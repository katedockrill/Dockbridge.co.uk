import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton, SectionLabel } from "@/components/UI";

function ServiceFeature({
  heading,
  copy,
  cta,
  href,
  emphasis,
}: {
  heading: string;
  copy: string;
  cta: string;
  href: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className="p-8 md:p-10 flex flex-col h-full border-t-2"
      style={{ borderColor: emphasis ? "#8B5E3C" : "#C9C1B6" }}
    >
      <h3 className="font-serif text-[23px] mb-4" style={{ color: "#1F1F1F" }}>
        {heading}
      </h3>
      <p className="font-sans text-[15px] leading-relaxed flex-1" style={{ color: "rgba(31,31,31,0.72)" }}>
        {copy}
      </p>
      <Link
        href={href}
        className="db-focus font-sans text-[13px] font-medium mt-7 text-left w-fit pb-1 border-b inline-flex items-center gap-2"
        style={{ color: "#8B5E3C", borderColor: "#8B5E3C", letterSpacing: "0.06em" }}
      >
        <span>{cta.toUpperCase()}</span>
        <span aria-hidden="true">&#8594;</span>
      </Link>
    </div>
  );
}

function StepIcon({ kind }: { kind: string }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: "0 0 26 26",
    fill: "none",
    stroke: "#8B5E3C",
    strokeWidth: 1.4,
  };
  if (kind === "understand") {
    return (
      <svg {...props}>
        <circle cx="13" cy="13" r="9" />
        <path d="M13 8v5l3 3" />
      </svg>
    );
  }
  if (kind === "challenge") {
    return (
      <svg {...props}>
        <path d="M13 3l3 6 6 1-4.5 4.5L18.5 21 13 17.5 7.5 21l1-6.5L4 10l6-1z" />
      </svg>
    );
  }
  if (kind === "advise") {
    return (
      <svg {...props}>
        <path d="M5 8h16M5 13h16M5 18h10" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4 21l4-1 12-12-3-3L5 17z" />
      <path d="M15 6l3 3" />
    </svg>
  );
}

const steps = [
  { key: "understand", title: "Understand", copy: "We start with your commercial position, priorities and challenges." },
  { key: "challenge", title: "Challenge", copy: "We test assumptions, options and market positions properly." },
  { key: "advise", title: "Advise", copy: "We turn complexity into clear commercial recommendations." },
  { key: "deliver", title: "Deliver", copy: "We stay close to the outcome and support implementation where required." },
];

const whyItems = [
  { title: "Independent thinking", copy: "We shape our advice around your business, not a fixed process or a supplier panel." },
  { title: "Clear advice", copy: "We explain the commercial reality in straightforward language." },
  { title: "Practical outcomes", copy: "Our recommendations are built around real decisions, not theoretical ones." },
  { title: "Long-term view", copy: "We think about what a decision means beyond the immediate deal." },
];

const insights = [
  {
    title: "What businesses should consider before renewing an energy contract",
    href: "/insights#energy-contract-renewal",
    image: "https://images.unsplash.com/photo-1757340347257-c45bb8589615?auto=format&fit=crop&w=800&q=70",
    alt: "A modern city skyline at dusk",
  },
  {
    title: "Why commercial water deserves more attention",
    href: "/insights#commercial-water",
    image: "https://images.unsplash.com/photo-1567709113771-436f0f444ed9?auto=format&fit=crop&w=800&q=70",
    alt: "Calm water in London at night",
  },
  {
    title: "When external commercial advice can add value to a growing business",
    href: "/insights#external-advice",
    image: "https://images.unsplash.com/photo-1758518730136-1bf4fa26ccbf?auto=format&fit=crop&w=800&q=70",
    alt: "Business professionals collaborating around a conference table",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 md:pt-14 pb-16 md:pb-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <h1 className="font-serif text-[34px] md:text-[46px] leading-[1.08] mb-6" style={{ color: "#1F1F1F" }}>
              Commercial advice, handled properly.
            </h1>
            <p className="font-sans text-[17px] leading-relaxed mb-10 max-w-md" style={{ color: "rgba(31,31,31,0.75)" }}>
              Dockbridge Advisory helps UK businesses make better decisions
              across energy, water and wider commercial strategy.
            </p>
            <div className="flex flex-wrap gap-5">
              <PrimaryButton href="/contact">Talk to us</PrimaryButton>
              <SecondaryButton href="/services">Explore our services</SecondaryButton>
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative h-[300px] md:h-[420px] overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="The Millennium Bridge and Tyne Bridge over the River Tyne at sunset"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-serif text-[28px] md:text-[34px] leading-tight" style={{ color: "#1F1F1F" }}>
              A clearer approach to commercial decisions.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-sans text-[16px] leading-relaxed mb-5" style={{ color: "rgba(31,31,31,0.78)" }}>
              Dockbridge Advisory helps businesses make better commercial
              decisions — the kind that affect cost, risk and growth, and
              deserve proper scrutiny before they&rsquo;re made.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.78)" }}>
              Whether the challenge sits within energy, water or wider
              business strategy, our role is the same: bring clarity,
              challenge assumptions properly, and give advice that&rsquo;s
              actually practical to act on.
            </p>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionLabel>What we do</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <ServiceFeature
              heading="Commercial Energy"
              copy="Strategic energy procurement, contract advice and market insight for UK businesses."
              cta="Explore Energy"
              href="/services/energy"
            />
            <ServiceFeature
              heading="Water"
              copy="Support with commercial water costs, supplier arrangements and opportunities to improve efficiency and value."
              cta="Explore Water"
              href="/services/water"
            />
            <ServiceFeature
              heading="Business Advisory"
              copy="Strategy, growth and partnership support for leadership teams working through a commercial challenge — whatever shape that challenge takes."
              cta="Explore Business Advisory"
              href="/services/business-advisory"
            />
          </div>
        </div>
      </section>

      {/* Why Dockbridge */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-[28px] md:text-[34px] leading-tight mb-14 max-w-xl" style={{ color: "#1F1F1F" }}>
            Commercial perspective without unnecessary complexity.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {whyItems.map((it) => (
              <div key={it.title} className="border-b pb-8" style={{ borderColor: "rgba(31,31,31,0.1)" }}>
                <h3 className="font-serif text-[19px] mb-2" style={{ color: "#8B5E3C" }}>
                  {it.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-relaxed" style={{ color: "rgba(31,31,31,0.72)" }}>
                  {it.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8">
            <h2 className="font-serif text-[28px] md:text-[34px] leading-tight mb-14 max-w-lg" style={{ color: "#1F1F1F" }}>
              Good advice starts with understanding the business.
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {steps.map((s) => (
                <div key={s.key}>
                  <div className="mb-4">
                    <StepIcon kind={s.key} />
                  </div>
                  <h3 className="font-sans text-[13px] mb-2 font-medium" style={{ color: "#1F1F1F", letterSpacing: "0.14em" }}>
                    {s.title.toUpperCase()}
                  </h3>
                  <p className="font-sans text-[14.5px] leading-relaxed" style={{ color: "rgba(31,31,31,0.68)" }}>
                    {s.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 h-[260px] md:h-full min-h-[300px]">
            <Image
              src="/images/architecture.jpg"
              alt="Modern commercial architecture"
              width={700}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "rgba(201,193,182,0.22)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
              For businesses who want a second opinion they can trust.
            </h2>
            <p className="font-sans text-[16px] leading-relaxed mb-4" style={{ color: "rgba(31,31,31,0.75)" }}>
              Dockbridge works with businesses of every size — from a single
              commercial site to multi-site and larger organisations — who
              want a straight, independent view before they commit to a
              decision.
            </p>
            <p className="font-sans text-[16px] leading-relaxed" style={{ color: "rgba(31,31,31,0.75)" }}>
              There is no fixed client profile. If it is a genuine commercial
              question, across energy, water or wider strategy, it is the
              kind of work we do.
            </p>
          </div>
          <div className="md:col-span-6 h-[260px] md:h-[340px]">
            <Image
              src="/images/business-environment.jpg"
              alt="A business meeting room overlooking a city skyline"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-[28px] md:text-[34px] mb-14" style={{ color: "#1F1F1F" }}>
            Commercial insight.
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {insights.map((a) => (
              <Link key={a.title} href={a.href} className="db-focus block group">
                <div className="h-[170px] mb-6 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-sans text-[12px] mb-3 font-medium" style={{ color: "#B9845F", letterSpacing: "0.14em" }}>
                  INSIGHT
                </p>
                <h3 className="font-serif text-[19px] leading-snug group-hover:underline" style={{ color: "#1F1F1F" }}>
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#1F1F1F" }}>
        <Image
          src="/images/detail.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-[0.14]"
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
          <h2 className="font-serif text-[27px] md:text-[34px] leading-tight mb-6" style={{ color: "#FAF8F3" }}>
            Let&rsquo;s talk about what your business needs next.
          </h2>
          <p className="font-sans text-[16px] leading-relaxed mb-9" style={{ color: "rgba(250,248,243,0.75)" }}>
            Whether you are reviewing an energy contract, looking at water
            costs or facing a wider commercial challenge, we would be happy to
            talk.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <PrimaryButton href="/contact">Talk to us</PrimaryButton>
            <a href="mailto:hello@dockbridge.co.uk" className="db-focus font-sans text-[14.5px]" style={{ color: "#D4AF7C" }}>
              hello@dockbridge.co.uk
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
