/* ============================================================
   JJCleanRides — Footer
   Business name, Instagram link, Stripe badge, copyright
   ============================================================ */

const INSTAGRAM_URL =
  "https://www.instagram.com/jjcleanride?igsh=MW8weGkweTduZ3d1ag==";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        background: "oklch(0.12 0.04 255)",
        borderTop: "1px solid oklch(1 0 0 / 0.06)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.6rem",
                letterSpacing: "0.05em",
                color: "white",
                lineHeight: 1,
              }}
            >
              JJ<span style={{ color: "oklch(0.65 0.2 220)" }}>Clean</span>Rides
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                color: "oklch(0.45 0.01 240)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Totton &amp; New Forest
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "oklch(0.65 0.01 240)",
                textDecoration: "none",
              }}
            >
              {/* Instagram icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @jjcleanride
            </a>

            {/* Stripe badge */}
            <div
              className="flex items-center gap-2 px-3 py-1.5"
              style={{
                background: "oklch(0.22 0.04 255)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                borderRadius: "2px",
              }}
            >
              {/* Stripe-style lock icon */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="oklch(0.65 0.2 220)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  color: "oklch(0.55 0.01 240)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Secure via{" "}
                <span style={{ color: "oklch(0.65 0.2 220)" }}>Stripe</span>
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-6"
          style={{ height: "1px", background: "oklch(1 0 0 / 0.05)" }}
        />

        {/* Copyright */}
        <p
          className="text-center"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "oklch(0.4 0.01 240)",
          }}
        >
          © 2026 JJCleanRides. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
