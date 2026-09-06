export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FAF8F3",
        color: "#1F1F1F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B5E3C",
            marginBottom: "24px",
          }}
        >
          Dockbridge Advisory
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 1.05,
            fontWeight: 500,
            margin: 0,
            fontFamily: "Georgia, serif",
          }}
        >
          We’ll be back shortly.
        </h1>

        <div
          style={{
            width: "64px",
            height: "2px",
            background: "#8B5E3C",
            margin: "28px auto",
          }}
        />

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#5B554E",
            marginBottom: "28px",
          }}
        >
          We’re making a few final updates to the Dockbridge Advisory website.
          If you need us in the meantime, you can still get in touch directly.
        </p>

        <a
          href="mailto:hello@dockbridge.co.uk"
          style={{
            display: "inline-block",
            background: "#8B5E3C",
            color: "#FAF8F3",
            padding: "14px 24px",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          hello@dockbridge.co.uk
        </a>

        <p
          style={{
            marginTop: "44px",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8A8179",
          }}
        >
          Commercial advice, handled properly.
        </p>
      </div>
    </main>
  );
}