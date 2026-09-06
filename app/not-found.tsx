import Link from "next/link";
import { PrimaryButton } from "@/components/UI";

export default function NotFound() {
  return (
    <section className="py-24 md:py-36" style={{ backgroundColor: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 max-w-xl">
        <p className="font-sans text-[13px] font-medium mb-5" style={{ color: "#8B5E3C", letterSpacing: "0.16em" }}>
          404
        </p>
        <h1 className="font-serif text-[30px] md:text-[38px] leading-tight mb-6" style={{ color: "#1F1F1F" }}>
          This page doesn&rsquo;t exist.
        </h1>
        <p className="font-sans text-[16px] leading-relaxed mb-9" style={{ color: "rgba(31,31,31,0.75)" }}>
          The page you&rsquo;re looking for may have moved or the link may be
          out of date. You can head back to the homepage, or go straight to
          the section you need.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <PrimaryButton href="/">Back to home</PrimaryButton>
          <Link href="/services" className="db-focus font-sans text-[14.5px]" style={{ color: "#8B5E3C" }}>
            View our services
          </Link>
        </div>
      </div>
    </section>
  );
}
