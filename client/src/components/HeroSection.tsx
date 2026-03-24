/* ============================================================
   JJCleanRides — Hero Section
   Split layout: text left, full-height photo right
   Mobile: full-screen photo with overlay
   ============================================================ */

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ minHeight: "100svh", display: "flex" }}
    >
      {/* ── Mobile background (photo + overlay) ── */}
      <div
        className="md:hidden absolute inset-0"
        style={{
          backgroundImage: "url(/gallery/hero-jack.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      />
      <div
        className="md:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.04 255 / 0.25) 0%, oklch(0.12 0.04 255 / 0.45) 50%, oklch(0.12 0.04 255 / 0.92) 100%)",
        }}
      />

      {/* ── Left panel — text ── */}
      <div
        className="relative z-10 flex flex-col justify-center w-full md:w-[56%]"
        style={{
          minHeight: "100svh",
          padding: "6rem 3rem 5rem",
          background: "transparent",
        }}
      >
        {/* Desktop only: navy background on left panel */}
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.11 0.045 258) 0%, oklch(0.15 0.05 255) 60%, oklch(0.15 0.04 255 / 0.92) 85%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-lg">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="electric-rule" />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.2 220)",
              }}
            >
              Totton &amp; New Forest
            </span>
          </div>

          {/* Business name */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 11vw, 8rem)",
              lineHeight: 0.88,
              color: "white",
              letterSpacing: "0.02em",
              marginBottom: "1.25rem",
            }}
          >
            JJ<span style={{ color: "oklch(0.65 0.2 220)" }}>Clean</span>
            <br />Rides
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "3.5rem",
              height: "2px",
              background: "oklch(0.65 0.2 220)",
              marginBottom: "1.25rem",
            }}
          />

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "oklch(0.82 0.005 240)",
              fontWeight: 300,
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: "38ch",
            }}
          >
            Professional mobile valeting —
            <br />we come to you, anywhere in the New Forest.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button className="btn-electric" onClick={() => scrollTo("services")}>
              View Packages
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("book")}>
              Book Now
            </button>
          </div>

          {/* Trust bar */}
          <div
            className="flex flex-wrap gap-5"
            style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)", paddingTop: "1.5rem" }}
          >
            {[
              { value: "Mobile", label: "We come to you" },
              { value: "£30", label: "Starting from" },
              { value: "5★", label: "Rated service" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    color: "oklch(0.65 0.2 220)",
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "oklch(0.5 0.01 240)",
                    marginTop: "2px",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel — photo (desktop only) ── */}
      <div
        className="hidden md:block"
        style={{
          width: "44%",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <img
          src="/gallery/hero-jack.jpg"
          alt="Freshly valeted Range Rover Velar by JJCleanRides"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
          }}
        />
        {/* Left-edge fade to blend with text panel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, oklch(0.13 0.045 257) 0%, transparent 20%, transparent 80%, oklch(0.12 0.04 255 / 0.4) 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background:
              "linear-gradient(to bottom, transparent 0%, oklch(0.18 0.04 255) 100%)",
          }}
        />
      </div>

      {/* ── Diagonal bottom cut (full width) ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ lineHeight: 0, zIndex: 5 }}
      >
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "50px" }}
        >
          <polygon points="0,50 1440,0 1440,50" fill="oklch(0.18 0.04 255)" />
        </svg>
      </div>
    </section>
  );
}
