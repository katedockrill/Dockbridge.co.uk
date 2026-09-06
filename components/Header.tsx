"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="db-focus flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-mark.png"
            alt="Dockbridge Advisory"
            width={34}
            height={34}
            priority
            className="md:hidden"
          />
          <Image
            src="/images/logo-full.png"
            alt="Dockbridge Advisory"
            width={132}
            height={62}
            priority
            className="hidden md:block"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="db-focus font-sans text-[13px] font-semibold tracking-[0.14em]"
                style={{ color: active ? "#8B5E3C" : "#1F1F1F" }}
              >
                {l.label.toUpperCase()}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="db-focus font-sans text-[13px] font-medium tracking-[0.06em] px-6 py-3"
            style={{ backgroundColor: "#1F1F1F", color: "#FAF8F3" }}
          >
            Talk to us
          </Link>
        </nav>

        <button
          className="db-focus md:hidden flex flex-col gap-[5px] p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-[1.5px] bg-charcoal" />
          <span className="block w-6 h-[1.5px] bg-charcoal" />
          <span className="block w-4 h-[1.5px] bg-charcoal" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/10 bg-ivory px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="db-focus font-sans text-[15px] font-semibold tracking-[0.1em]"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="db-focus font-sans text-[14px] font-medium text-center py-3 mt-2"
            style={{ backgroundColor: "#1F1F1F", color: "#FAF8F3" }}
          >
            Talk to us
          </Link>
        </nav>
      )}
    </header>
  );
}
