import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/UI";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | Dockbridge Advisory",
  description:
    "Dockbridge Advisory is a commercial advisory firm working across energy, water and wider business strategy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Three practices, one way of working."
        intro="Dockbridge started in commercial energy, where the case for independent advice is clearest, and was built from the outset to extend into water and wider business strategy. The questions change; the standard of scrutiny doesn't."
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <SectionLabel>How we think</SectionLabel>
            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
              Clarity leads to opportunity.
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
              We start by understanding the commercial position a business is
              actually in, then work out what genuinely needs to change —
              not by leading with a product or a fixed process.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              It&rsquo;s also where the name comes from. Dockbridge is about
              connecting a commercial question to a proper answer, without
              adding anything in between that doesn&rsquo;t need to be
              there.
            </p>
          </div>
          <div className="md:col-span-5 h-[260px] md:h-[340px]">
            <Image
              src="/images/brand-statement.jpg"
              alt="A staircase with the words Clarity Leads To Opportunity engraved on a wall"
              width={700}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 h-[240px] md:h-[300px]">
            <Image
              src="/images/values.jpg"
              alt="A wall reading People, Ideas, Opportunity, Progress"
              width={700}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
              People. Ideas. Opportunity. Progress.
            </h2>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              Commercial decisions are made by people, not spreadsheets, so
              we explain things in plain language and work with the people
              who actually have to live with the outcome. We&rsquo;d rather
              challenge an assumption properly than run through a checklist,
              because a good idea is worth more than a standard process. And
              advice should lead somewhere concrete — we stay involved until
              a decision actually happens, not just until the report lands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
          <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
            Independent by design.
          </h2>
          <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
            Dockbridge is not tied to a single supplier panel or a fixed
            methodology. That independence is what allows us to recommend
            what actually suits the business in front of us, across energy,
            water or wider commercial strategy.
          </p>
          <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
            We&rsquo;d rather be judged on the quality of our advice than the
            size of our client list.
          </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know if we're the right fit?"
        copy="The best way to find out is a conversation, not a sales pitch. Get in touch and we'll be straightforward with you about whether we can help."
      />
    </>
  );
}
