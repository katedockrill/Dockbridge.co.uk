import Link from "next/link";

export function PrimaryButton({
  href,
  children,
  arrow = true,
}: {
  href: string;
  children: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="db-focus font-sans text-[13px] font-medium tracking-[0.08em] px-8 py-4 inline-flex items-center gap-2"
      style={{ backgroundColor: "#8B5E3C", color: "#FAF8F3" }}
    >
      <span>{children.toUpperCase()}</span>
      {arrow && <span aria-hidden="true">&#8594;</span>}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  dark = false,
  arrow = true,
}: {
  href: string;
  children: string;
  dark?: boolean;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="db-focus font-sans text-[13px] font-medium tracking-[0.08em] px-8 py-4 inline-flex items-center gap-2 border"
      style={{
        borderColor: dark ? "#FAF8F3" : "#1F1F1F",
        color: dark ? "#FAF8F3" : "#1F1F1F",
      }}
    >
      <span>{children.toUpperCase()}</span>
      {arrow && <span aria-hidden="true">&#8594;</span>}
    </Link>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-sans text-[12px] font-medium mb-5"
      style={{ color: "#8B5E3C", letterSpacing: "0.16em" }}
    >
      {typeof children === "string" ? children.toUpperCase() : children}
    </p>
  );
}
