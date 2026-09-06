import Link from "next/link";
import Image from "next/image";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p
        className="font-sans text-[12px] mb-4 font-medium"
        style={{ color: "#8B5E3C", letterSpacing: "0.14em" }}
      >
        {title.toUpperCase()}
      </p>
      <div className="flex flex-col gap-3 font-sans text-[14px]" style={{ color: "rgba(31,31,31,0.65)" }}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="db-focus w-fit hover:text-[#1F1F1F]">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 border-t" style={{ backgroundColor: "#FAF8F3", borderColor: "rgba(31,31,31,0.1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Image src="/images/logo-full.png" alt="Dockbridge Advisory" width={168} height={56} style={{ height: "auto", width: "168px" }} />
          <p className="font-sans text-[14px] leading-relaxed mt-5 max-w-xs" style={{ color: "rgba(31,31,31,0.6)" }}>
            Commercial advisory across energy, water and wider business strategy.
          </p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <FooterColumn
            title="Practices"
            links={[
              { label: "Energy", href: "/services/energy" },
              { label: "Water", href: "/services/water" },
              { label: "Business Advisory", href: "/services/business-advisory" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Insights", href: "/insights" },
            ]}
          />
          <FooterColumn
            title="Contact"
            links={[
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ]}
          />
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto px-6 md:px-10 mt-14 pt-8 border-t font-sans text-[13px]"
        style={{ color: "rgba(31,31,31,0.45)", borderColor: "rgba(31,31,31,0.08)" }}
      >
        © {new Date().getFullYear()} Dockbridge Advisory. hello@dockbridge.co.uk
      </div>
    </footer>
  );
}
