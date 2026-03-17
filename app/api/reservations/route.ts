import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { prisma } from "@/lib/prisma";
import CustomerReservationEmail from "@/emails/customer-reservation-email";
import AdminReservationEmail from "@/emails/admin-reservation-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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

    let availableTable = null;

    for (const table of candidateTables) {
      const conflictingReservation = await prisma.reservation.findFirst({
        where: {
          tableId: table.id,
          status: {
            in: ["pending", "confirmed"],
          },
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

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Grand Empire <reservations@grandempireuk.com>";

    const restaurantNotificationEmail =
      process.env.RESTAURANT_NOTIFICATION_EMAIL ||
      "grandempieruk@gmail.com";

    const customerHtml = await render(
      CustomerReservationEmail({
        name,
        date,
        time,
        guests: guestCount,
        tableNumber: availableTable.tableNumber,
      })
    );

    const adminHtml = await render(
      AdminReservationEmail({
        name,
        email,
        phone,
        date,
        time,
        guests: guestCount,
        tableNumber: availableTable.tableNumber,
        reservationId: reservation.id,
      })
    );

    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Your Reservation at Grand Empire 👑",
      html: customerHtml,
    });

    const adminResult = await resend.emails.send({
      from: fromEmail,
      to: [restaurantNotificationEmail],
      subject: "New Reservation Received",
      html: adminHtml,
    });

    if (customerResult.error) {
      console.error("Customer email failed:", customerResult.error);
    }

    if (adminResult.error) {
      console.error("Admin email failed:", adminResult.error);
    }

    return NextResponse.json(
      {
        message: "Reservation created successfully",
        reservation,
        customerEmailSent: !customerResult.error,
        adminEmailSent: !adminResult.error,
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