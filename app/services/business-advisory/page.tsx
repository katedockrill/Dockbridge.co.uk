import type { Metadata } from "next";
import Image from "next/image";
import { SectionLabel } from "@/components/UI";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Business Advisory | Dockbridge Advisory",
  description:
    "Commercial strategy, growth, partnerships and operational advice for businesses working through a specific challenge.",
};

const coverage = [
  { title: "Commercial strategy", copy: "Working through a specific commercial question with a structured, honest process rather than a generic framework." },
  { title: "Sales and growth strategy", copy: "Identifying where growth is realistic, and what needs to change to get there." },
  { title: "Partnership strategy", copy: "Assessing potential partners, structuring the relationship and avoiding the arrangements that look good on paper but don't work in practice." },
  { title: "Operational improvement", copy: "Finding the practical changes that improve margin and reduce friction, without a lengthy transformation programme." },
  { title: "Go-to-market planning", copy: "Building a plan for a new product, service or market that is grounded in how your business actually operates." },
  { title: "Supplier and partner strategy", copy: "Reviewing key supplier relationships for cost, risk and long-term fit — not just price at renewal." },
];

export default function BusinessAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Advisory"
        title="Broader commercial advice, when you need it."
        intro="Not every commercial decision fits under energy or water. Business Advisory covers everything else — commercial strategy, growth, partnerships, supplier relationships and the day-to-day operational decisions that come with running a business — whatever the specific challenge happens to be."
        image="/images/business-environment.jpg"
        imageAlt="A modern business meeting room overlooking a city skyline"
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionLabel>Where this typically helps</SectionLabel>
          <p className="font-sans text-[16px] leading-relaxed mb-12 max-w-2xl" style={{ color: "rgba(31,31,31,0.75)" }}>
            Business Advisory covers a wide range of ground. The areas below
            come up most often, but they are a starting point, not a fixed
            menu.
          </p>
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
          <p className="font-sans text-[15px] leading-relaxed mt-12 max-w-2xl" style={{ color: "rgba(31,31,31,0.7)" }}>
            If your situation doesn&rsquo;t fit neatly into one of these,
            that&rsquo;s fine — most don&rsquo;t. Tell us what you&rsquo;re
            facing and we&rsquo;ll tell you honestly whether we can help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
              Who this is for.
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
              Businesses of any size — from owner-led firms to larger
              commercial organisations — working through a decision that
              needs proper thought, whether that&rsquo;s a new partnership, a
              growth plan, an operational bottleneck or a supplier
              relationship that no longer fits.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              We scope the work tightly to the actual decision in front of
              you, rather than running a lengthy transformation programme.
            </p>
          </div>
          <div className="md:col-span-5 h-[220px] md:h-[280px]">
            <Image
              src="/images/advisory.jpg"
              alt="Two professionals in an advisory discussion"
              width={700}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Working through a specific commercial decision?"
        copy="Tell us what you're weighing up and we'll tell you honestly whether an outside view would help."
      />
    </>
  );
}
