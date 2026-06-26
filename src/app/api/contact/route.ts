import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Receives contact form submissions.
 * Wire up a real email service (Resend, SendGrid, Nodemailer, etc.)
 * by replacing the TODO block below.
 *
 * Environment variables to add on Vercel:
 *   CONTACT_TO_EMAIL  – recipient address
 *   RESEND_API_KEY    – (if using Resend)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body as {
      name: string;
      email: string;
      service?: string;
      message: string;
    };

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // ─── TODO: replace with your email provider ────────────────────
    // Example using Resend (https://resend.com):
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@yourdomain.com",
    //   to: process.env.CONTACT_TO_EMAIL!,
    //   subject: `New enquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    // });
    // ────────────────────────────────────────────────────────────────

    console.log("Contact form submission:", { name, email, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
