import Image from "next/image";
import { SectionLabel } from "./UI";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20" style={{ backgroundColor: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-end">
        <div className={image ? "md:col-span-7" : "md:col-span-9"}>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1
            className="font-serif text-[34px] md:text-[46px] leading-[1.1] mb-6"
            style={{ color: "#1F1F1F" }}
          >
            {title}
          </h1>
          <p className="font-sans text-[17px] leading-relaxed max-w-xl" style={{ color: "rgba(31,31,31,0.75)" }}>
            {intro}
          </p>
        </div>
        {image && (
          <div className="md:col-span-5 h-[220px] md:h-[280px]">
            <Image
              src={image}
              alt={imageAlt || ""}
              width={700}
              height={560}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
