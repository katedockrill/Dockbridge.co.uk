import { PrimaryButton } from "./UI";

export default function CTASection({
  title,
  copy,
  buttonLabel = "Talk to us",
}: {
  title: string;
  copy: string;
  buttonLabel?: string;
}) {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#1F1F1F" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-[27px] md:text-[32px] leading-tight mb-6" style={{ color: "#FAF8F3" }}>
            {title}
          </h2>
          <p className="font-sans text-[16px] leading-relaxed mb-9" style={{ color: "rgba(250,248,243,0.75)" }}>
            {copy}
          </p>
          <PrimaryButton href="/contact">{buttonLabel}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
