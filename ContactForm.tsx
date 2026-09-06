"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  borderColor: "rgba(31,31,31,0.25)",
  backgroundColor: "#FAF8F3",
  color: "#1F1F1F",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="p-8 border" style={{ borderColor: "rgba(31,31,31,0.15)" }}>
        <h3 className="font-serif text-[22px] mb-3" style={{ color: "#1F1F1F" }}>
          Thank you.
        </h3>
        <p className="font-sans text-[15px] leading-relaxed" style={{ color: "rgba(31,31,31,0.72)" }}>
          We&rsquo;ve received your message and will come back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="db-focus font-sans text-[13px] font-medium block mb-2" style={{ color: "#1F1F1F" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="db-focus w-full border px-4 py-3 font-sans text-[15px]"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="email" className="db-focus font-sans text-[13px] font-medium block mb-2" style={{ color: "#1F1F1F" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="db-focus w-full border px-4 py-3 font-sans text-[15px]"
            style={fieldStyle}
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="db-focus font-sans text-[13px] font-medium block mb-2" style={{ color: "#1F1F1F" }}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="db-focus w-full border px-4 py-3 font-sans text-[15px]"
          style={fieldStyle}
        />
      </div>
      <div>
        <label htmlFor="message" className="db-focus font-sans text-[13px] font-medium block mb-2" style={{ color: "#1F1F1F" }}>
          What can we help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="db-focus w-full border px-4 py-3 font-sans text-[15px]"
          style={fieldStyle}
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-[14px]" style={{ color: "#8B5E3C" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="db-focus font-sans text-[13px] font-medium tracking-[0.08em] px-8 py-4 w-fit disabled:opacity-60"
        style={{ backgroundColor: "#8B5E3C", color: "#FAF8F3" }}
      >
        {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
      </button>
    </form>
  );
}
