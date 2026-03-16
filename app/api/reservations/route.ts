import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Incoming body:", body);

    const { name, email, phone, guests, date, time } = body;

    if (!name || !email || !phone || !guests || !date || !time) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Combine date + time
    const startTime = new Date(`${date}T${time}:00`);

    // Automatically set 2-hour duration
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

    // Get first available table (for now simple logic)
    const table = await prisma.table.findFirst();

    if (!table) {
      return NextResponse.json(
        { message: "No tables available" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        guests: Number(guests),
        startTime,
        endTime,
        tableId: table.id, // ✅ correct UUID
      },
    });

    console.log("Sending email to:", email);

    try {
      await resend.emails.send({
        from: "Grand Empire <onboarding@resend.dev>",
        to: email,
        subject: "Your Reservation at Grand Empire 👑",
        html: `
          <h2>Reservation Confirmed</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Table:</strong> ${table.tableNumber}</p>
          <p><strong>Duration:</strong> 2 hours</p>
          <br/>
          <p>We look forward to welcoming you at Grand Empire.</p>
          <p>108–110 Rushey Green, London</p>
        `,
      });

      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email error:", emailError);
    }

    return NextResponse.json(reservation);

  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}