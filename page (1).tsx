import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SectionLabel } from "@/components/UI";

export const metadata: Metadata = {
  title: "Contact | Dockbridge Advisory",
  description: "Get in touch with Dockbridge Advisory.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what your business needs next."
        intro="Whether you're reviewing an energy contract, looking at water costs or facing a wider commercial decision, tell us a little about it and we'll come back to you honestly about whether — and how — we can help."
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <div className="md:col-span-5">
            <SectionLabel>Direct</SectionLabel>
            <a
              href="mailto:hello@dockbridge.co.uk"
              className="db-focus font-serif text-[22px] block mb-8"
              style={{ color: "#8B5E3C" }}
            >
              hello@dockbridge.co.uk
            </a>
            <p className="font-sans text-[15px] leading-relaxed" style={{ color: "rgba(31,31,31,0.7)" }}>
              We read every message personally and will let you know quickly
              whether Dockbridge is the right fit for what you need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
