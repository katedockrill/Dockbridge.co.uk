import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SectionLabel } from "@/components/UI";

export const metadata: Metadata = {
  title: "Services | Dockbridge Advisory",
  description:
    "Dockbridge Advisory's three practices — Energy, Water and Business Advisory — sit under one commercial approach.",
};

const services = [
  {
    name: "Commercial Energy",
    href: "/services/energy",
    copy:
      "Strategic procurement, contract strategy, supplier tendering, market insight and ongoing commercial support for UK businesses buying energy at scale.",
  },
  {
    name: "Water",
    href: "/services/water",
    copy:
      "Supplier review, procurement, cost analysis, billing review and efficiency and commercial strategy for businesses managing water as a genuine cost line.",
  },
  {
    name: "Business Advisory",
    href: "/services/business-advisory",
    copy:
      "Commercial strategy, sales and growth strategy, partnership strategy, operational improvement, go-to-market planning and supplier and partner strategy for wider practical business challenges.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One commercial approach, three practices."
        intro="Energy is where Dockbridge started, but the way we work — understand, challenge, advise, deliver — applies just as well to water and to wider commercial strategy. Each practice below stands on its own; together they cover most of what a growing business needs from a commercial adviser."
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div key={s.href} className="p-8 md:p-10 flex flex-col h-full border-t-2" style={{ borderColor: "#C9C1B6" }}>
              <h2 className="font-serif text-[24px] mb-4" style={{ color: "#1F1F1F" }}>
                {s.name}
              </h2>
              <p className="font-sans text-[15px] leading-relaxed flex-1" style={{ color: "rgba(31,31,31,0.72)" }}>
                {s.copy}
              </p>
              <Link
                href={s.href}
                className="db-focus font-sans text-[13px] font-medium mt-7 w-fit pb-1 border-b inline-flex items-center gap-2"
                style={{ color: "#8B5E3C", borderColor: "#8B5E3C", letterSpacing: "0.06em" }}
              >
                <span>LEARN MORE</span>
                <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 max-w-3xl">
          <SectionLabel>Why one firm</SectionLabel>
          <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
            Commercial decisions rarely sit in one category.
          </h2>
          <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
            An energy renewal, a water billing query and a broader question
            about growth or partnerships often land on the same desk in the
            same quarter. Working with one adviser who understands the whole
            picture — rather than three separate specialists who don&rsquo;t
            talk to each other — tends to produce better, faster decisions.
          </p>
          <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
            Working with one firm across all three means fewer handoffs, and
            nothing forced into a fixed process it doesn&rsquo;t fit.
          </p>
        </div>
      </section>
    </>
  );
}
