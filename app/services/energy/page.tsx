import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/UI";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Commercial Energy | Dockbridge Advisory",
  description:
    "Strategic energy procurement, contract strategy, supplier tendering and market insight for UK businesses.",
};

const coverage = [
  { title: "Procurement strategy", copy: "Working out the right buying approach for your risk appetite, usage profile and market timing." },
  { title: "Contract strategy", copy: "Reviewing terms, flexibility and exposure before you sign — not after." },
  { title: "Supplier tendering", copy: "Running a proper tender process across the market rather than accepting the first renewal quote." },
  { title: "Market insight", copy: "Plain-language explanation of what is actually happening in the energy market and what it means for you." },
  { title: "Ongoing commercial support", copy: "Support that continues after the contract is signed, not a one-off transaction." },
];

export default function EnergyPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy"
        title="Commercial energy decisions deserve more than a price comparison."
        intro="Energy contracts affect cost, cash flow, flexibility and future risk. Dockbridge helps businesses understand the market, assess supplier options and build a procurement strategy around their own commercial priorities — not a generic template."
        image="/images/energy-infra.jpg"
        imageAlt="Energy infrastructure at a UK industrial site"
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionLabel>What this covers</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {coverage.map((c) => (
              <div key={c.title} className="border-b pb-8" style={{ borderColor: "rgba(31,31,31,0.1)" }}>
                <h3 className="font-serif text-[19px] mb-2" style={{ color: "#8B5E3C" }}>
                  {c.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-relaxed" style={{ color: "rgba(31,31,31,0.72)" }}>
                  {c.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
              Who this is for.
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
              Businesses with meaningful energy spend — a single site or
              many — who want a proper commercial view of the market rather
              than a same-day renewal quote from their existing supplier.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              We work alongside finance and operations teams, not around
              them, so the eventual decision is understood and owned
              internally.
            </p>
          </div>
          <div className="md:col-span-5 h-[220px] md:h-[280px]">
            <Image
              src="/images/detail.jpg"
              alt="Detail of industrial materials and structure"
              width={700}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to look properly at your energy position?"
        copy="Tell us where you are in your contract cycle and we'll let you know honestly whether now is the right time to act."
      />
    </>
  );
}
