import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Insights | Dockbridge Advisory",
  description: "Commercial insight on energy, water and business advisory from Dockbridge Advisory.",
};

const articles = [
  {
    id: "energy-contract-renewal",
    title: "What businesses should consider before renewing an energy contract",
    image: "https://images.unsplash.com/photo-1757340347257-c45bb8589615?auto=format&fit=crop&w=1200&q=70",
    alt: "A modern city skyline at dusk",
    body: [
      "A renewal quote from your existing supplier is rarely the same thing as a market review. It reflects one supplier's current appetite for your business, not what the wider market would offer for the same usage profile.",
      "Before renewing, it's worth understanding where you are in the market cycle, what flexibility you actually need versus what you've always had, and whether your usage data is accurate enough to negotiate from a position of strength. Contract length, exit terms and pass-through costs are usually where the real risk sits — not just the headline rate.",
      "None of this requires switching supplier. It just requires treating the decision with the same scrutiny you'd apply to any other significant cost line.",
    ],
  },
  {
    id: "commercial-water",
    title: "Why commercial water deserves more attention",
    image: "https://images.unsplash.com/photo-1567709113771-436f0f444ed9?auto=format&fit=crop&w=1200&q=70",
    alt: "Calm water in London at night",
    body: [
      "Since the non-household water market opened up, most eligible businesses have had the ability to switch supplier, renegotiate terms or query billing — yet many have never done so. Water is often left on the same tariff for years simply because nobody has been asked to look at it.",
      "The most common issue isn't the tariff itself but billing accuracy: incorrect site details, outdated meter readings or surface water drainage charges applied where they shouldn't be. For multi-site businesses, small per-site errors compound quickly.",
      "A proper water review takes far less time than an energy review and often surfaces savings that have simply gone unnoticed rather than requiring any change in usage.",
    ],
  },
  {
    id: "external-advice",
    title: "When external commercial advice can add value to a growing business",
    image: "https://images.unsplash.com/photo-1758518730136-1bf4fa26ccbf?auto=format&fit=crop&w=1200&q=70",
    alt: "Business professionals collaborating around a conference table",
    body: [
      "Not every commercial decision needs outside input. But certain moments tend to benefit from a perspective that isn't inside the business day to day: entering a new partnership, planning a go-to-market for a new product, or reviewing a supplier relationship that has quietly become important without ever being formally assessed.",
      "The value of external advice in these situations isn't a lack of internal capability — it's the ability to ask questions without the internal politics or assumptions that can make it hard to challenge the status quo from within.",
      "Good advisory work is scoped tightly to the actual decision in front of you. If the scope keeps growing, that's usually a sign the engagement has drifted from the original commercial question.",
    ],
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Commercial insight."
        intro="Short, practical thinking on energy, water and wider commercial decisions — written for people who need to make a decision, not read a sales pitch."
      />

      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-20">
          {articles.map((a) => (
            <article key={a.id} id={a.id} className="scroll-mt-24">
              <div className="h-[220px] md:h-[320px] mb-8">
                <Image
                  src={a.image}
                  alt={a.alt}
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-[12px] mb-3 font-medium" style={{ color: "#B9845F", letterSpacing: "0.14em" }}>
                INSIGHT
              </p>
              <h2 className="font-serif text-[26px] md:text-[30px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
                {a.title}
              </h2>
              <div className="flex flex-col gap-4">
                {a.body.map((p, i) => (
                  <p key={i} className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.78)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
