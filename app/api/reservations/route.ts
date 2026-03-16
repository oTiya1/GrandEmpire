import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Incoming reservation body:", body);

    const { name, email, phone, guests, date, time } = body;

    if (!name || !email || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const guestCount = Number(guests);

    if (Number.isNaN(guestCount) || guestCount < 1) {
      return NextResponse.json(
        { message: "Guests must be a valid number" },
        { status: 400 }
      );
    }

    const startTime = new Date(`${date}T${time}:00`);

    if (Number.isNaN(startTime.getTime())) {
      return NextResponse.json(
        { message: "Invalid date or time" },
        { status: 400 }
      );
    }

    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

    // Find tables that can fit the guest count
    const candidateTables = await prisma.table.findMany({
      where: {
        seats: {
          gte: guestCount,
        },
      },
      orderBy: {
        seats: "asc",
      },
    });

    if (candidateTables.length === 0) {
      return NextResponse.json(
        { message: "No table can accommodate this number of guests" },
        { status: 400 }
      );
    }

    // Find the first table that is not already reserved in the selected time slot
    let availableTable = null;

    for (const table of candidateTables) {
      const conflictingReservation = await prisma.reservation.findFirst({
        where: {
          tableId: table.id,
          status: "confirmed",
          AND: [
            {
              startTime: {
                lt: endTime,
              },
            },
            {
              endTime: {
                gt: startTime,
              },
            },
          ],
        },
      });

      if (!conflictingReservation) {
        availableTable = table;
        break;
      }
    }

    if (!availableTable) {
      return NextResponse.json(
        { message: "No tables available for the selected date and time" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        guests: guestCount,
        startTime,
        endTime,
        tableId: availableTable.id,
      },
    });

    console.log("Reservation created:", reservation.id);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Grand Empire <reservations@grandempieruk.com>";

    const restaurantNotificationEmail =
      process.env.RESTAURANT_NOTIFICATION_EMAIL ||
      "grandempieruk@gmail.com";

    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Your Reservation at Grand Empire 👑",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>Reservation Confirmed</h2>
            <p>Hello ${name},</p>
            <p>Thank you for choosing <strong>Grand Empire</strong>. Your reservation has been received successfully.</p>

            <h3>Reservation Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Guests:</strong> ${guestCount}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Table:</strong> ${availableTable.tableNumber}</p>
            <p><strong>Duration:</strong> 2 hours</p>

            <br />
            <p>We look forward to welcoming you.</p>
            <p><strong>Grand Empire</strong><br />108–110 Rushey Green, London</p>
          </div>
        `,
      });

      await resend.emails.send({
        from: fromEmail,
        to: restaurantNotificationEmail,
        subject: "New Reservation Received",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>New Reservation Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Guests:</strong> ${guestCount}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Table:</strong> ${availableTable.tableNumber}</p>
            <p><strong>Reservation ID:</strong> ${reservation.id}</p>
          </div>
        `,
      });

      console.log("Customer and restaurant emails sent successfully");
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }

    return NextResponse.json(
      {
        message: "Reservation created successfully",
        reservation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}