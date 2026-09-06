import { NextRequest, NextResponse } from "next/server";

// This route accepts the contact form submission from app/contact/page.tsx.
//
// It does NOT send an email yet — wire up a transactional email provider
// (e.g. Resend, Postmark, SendGrid) here before going live, or swap this
// out entirely for a form backend such as Formspree/Netlify Forms and
// point the form's `action` at that instead. See README.md for details.
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, company, message } = data as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // TODO: send the email / forward to CRM here.
    console.log("New Dockbridge contact form submission:", {
      name,
      email,
      company,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
