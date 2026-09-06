import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/UI";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Water | Dockbridge Advisory",
  description:
    "Supplier review, procurement, cost analysis, billing review and commercial strategy for business water.",
};

const coverage = [
  { title: "Supplier review", copy: "Checking whether your current water supplier and tariff still make commercial sense." },
  { title: "Procurement", copy: "Running the market properly since deregulation opened up genuine choice for most business sites." },
  { title: "Cost analysis", copy: "Breaking down what you actually pay for water, wastewater and surface water drainage." },
  { title: "Billing review", copy: "Checking bills against actual usage and site details — errors are more common than most businesses expect." },
  { title: "Efficiency and commercial strategy", copy: "Identifying where usage, cost and risk can genuinely be improved, not just switched." },
];

export default function WaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Water"
        title="Water is a genuine cost line, not an afterthought."
        intro="Most businesses spend far more time on energy than on water, even though water costs are often just as reviewable. Dockbridge applies the same commercial discipline to water — supplier review, procurement, billing accuracy and efficiency — that we bring to energy."
        image="/images/water.jpg"
        imageAlt="Calm water with reflected light"
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
              Businesses that have never reviewed their water supply since
              deregulation, or that suspect their billing may not reflect
              actual usage — particularly multi-site operators where small
              errors add up.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              Often reviewed alongside an energy renewal, but equally useful
              on its own.
            </p>
          </div>
          <div className="md:col-span-5 h-[220px] md:h-[280px]">
            <Image
              src="/images/uk-landscape.jpg"
              alt="A UK town landscape at golden hour"
              width={700}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure if your water supply has ever been reviewed?"
        copy="That's usually the first sign it's worth a look. Send us your latest bill and we'll tell you honestly whether there's anything worth pursuing."
      />
    </>
  );
}
