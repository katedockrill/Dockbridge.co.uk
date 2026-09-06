import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dockbridge Advisory",
  description: "Dockbridge Advisory's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <h1 className="font-serif text-[32px] md:text-[40px] leading-tight mb-4" style={{ color: "#1F1F1F" }}>
          Privacy Policy
        </h1>
        <p className="font-sans text-[14px] mb-10" style={{ color: "rgba(31,31,31,0.55)" }}>
          Last updated: [insert date]
        </p>

        <div
          className="p-6 mb-12 border-l-2 font-sans text-[14.5px] leading-relaxed"
          style={{ borderColor: "#8B5E3C", backgroundColor: "rgba(212,175,124,0.12)", color: "rgba(31,31,31,0.8)" }}
        >
          <strong>Note for Dockbridge:</strong> this is a standard template
          to give the site a complete, working privacy policy at launch. It
          is not legal advice. Before publishing, please have it reviewed by
          a qualified solicitor to confirm it accurately reflects what data
          Dockbridge actually collects (including any analytics or cookies
          you add later) and that it meets your obligations under UK GDPR
          and the Data Protection Act 2018.
        </div>

        <div className="flex flex-col gap-10 font-sans text-[15.5px] leading-relaxed" style={{ color: "rgba(31,31,31,0.8)" }}>
          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              1. Who we are
            </h2>
            <p>
              Dockbridge Advisory (&ldquo;Dockbridge&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) is a commercial advisory business operating
              in the United Kingdom. This policy explains how we collect,
              use and protect personal information when you visit
              dockbridge.co.uk or contact us directly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              2. Information we collect
            </h2>
            <p className="mb-3">We may collect the following information:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Contact details you provide via our contact form or by email, such as your name, email address, company name and the content of your message.</li>
              <li>Basic technical information about your visit, such as pages viewed and general location, if we add analytics tools to the site.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              3. How we use your information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Respond to enquiries submitted through the contact form or by email.</li>
              <li>Provide, discuss and deliver our advisory services where you become a client.</li>
              <li>Understand how our website is used, so we can improve it.</li>
              <li>Meet our legal and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              4. Legal basis for processing
            </h2>
            <p>
              We rely on legitimate interests to respond to enquiries and
              operate our website, and on the performance of a contract
              where you engage us as a client. Where required, we will ask
              for your consent separately.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              5. How long we keep information
            </h2>
            <p>
              We keep personal information only for as long as necessary to
              respond to your enquiry, deliver our services, or meet legal
              and accounting obligations, after which it is securely deleted
              or anonymised.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              6. Sharing your information
            </h2>
            <p>
              We do not sell personal information. We may share it with
              trusted service providers who help us run our business (for
              example, email or hosting providers), and only to the extent
              needed for them to provide that service.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              7. Your rights
            </h2>
            <p className="mb-3">Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Access the personal information we hold about you.</li>
              <li>Ask us to correct inaccurate information.</li>
              <li>Ask us to delete your information, in certain circumstances.</li>
              <li>Object to or restrict how we use your information.</li>
              <li>Complain to the Information Commissioner&rsquo;s Office (ICO) if you believe we have not handled your information properly.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              8. Cookies
            </h2>
            <p>
              This site does not currently use non-essential cookies or
              tracking technologies. If that changes — for example, if
              analytics are added — this policy will be updated and, where
              required, a cookie consent banner will be added.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[21px] mb-3" style={{ color: "#1F1F1F" }}>
              9. Contact us
            </h2>
            <p>
              If you have any questions about this policy or how we handle
              your information, please contact us at{" "}
              <a href="mailto:hello@dockbridge.co.uk" style={{ color: "#8B5E3C" }}>
                hello@dockbridge.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
