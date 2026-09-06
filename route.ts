import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, company, message } = data as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    const cleanName = name?.trim();
    const cleanEmail = email?.trim();
    const cleanCompany = company?.trim();
    const cleanMessage = message?.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (cleanName.length > 120 || cleanEmail.length > 254 || (cleanCompany?.length ?? 0) > 160 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { ok: false, error: "Please shorten your message and try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@dockbridge.co.uk";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Dockbridge Website <enquiries@mail.dockbridge.co.uk>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { ok: false, error: "The contact form is temporarily unavailable. Please email hello@dockbridge.co.uk." },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeCompany = escapeHtml(cleanCompany || "Not provided");
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `New Dockbridge website enquiry — ${cleanName}`,
        text: [
          "New enquiry from dockbridge.co.uk",
          "",
          `Name: ${cleanName}`,
          `Email: ${cleanEmail}`,
          `Company: ${cleanCompany || "Not provided"}`,
          "",
          "Message:",
          cleanMessage,
        ].join("\n"),
        html: `
          <div style="font-family:Arial,sans-serif;color:#1F1F1F;line-height:1.6;max-width:640px">
            <h2 style="font-weight:500">New Dockbridge website enquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Message:</strong><br />${safeMessage}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error("Resend send failed:", response.status, providerError);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your message. Please email hello@dockbridge.co.uk." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please email hello@dockbridge.co.uk." },
      { status: 500 }
    );
  }
}
