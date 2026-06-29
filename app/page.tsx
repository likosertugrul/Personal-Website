"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "520px" }}>
        {/* Monogram */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #5b21b6, #4c1d95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
            fontSize: "26px",
            fontWeight: 700,
            color: "#c4b5fd",
          }}
        >
          EL
        </div>

        {/* Name */}
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent-soft)",
            marginBottom: "0.75rem",
          }}
        >
          Ertuğrul Likos
        </p>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 1.25rem",
            color: "var(--text)",
          }}
        >
          Yakında Sizinleyim
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
            marginBottom: "2.5rem",
          }}
        >
          Kişisel portfolyo sitem üzerinde çalışmalar devam ediyor.
          <br />
          Kısa süre içinde burada olacağım.
        </p>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "var(--accent-soft)",
            margin: "0 auto 2.5rem",
            opacity: 0.5,
            borderRadius: "1px",
          }}
        />

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { href: "https://github.com/likosertugrul", label: "GitHub" },
            { href: "https://linkedin.com/in/likosertugrul", label: "LinkedIn" },
            { href: "https://x.com/likosertugrul", label: "X" },
            { href: "mailto:likosertugrul128@gmail.com", label: "E-posta" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
