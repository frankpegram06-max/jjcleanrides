/* ============================================================
   JJCleanRides — Hero Section
   Full-bleed image, text anchored bottom-left, diagonal bottom cut
   ============================================================ */

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/hero-bg-5xJfFNufZMJF5v8ZRyT76T.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full grain-overlay"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark gradient overlay — heavier at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.12 0.04 255 / 0.35) 0%, oklch(0.12 0.04 255 / 0.55) 50%, oklch(0.12 0.04 255 / 0.92) 100%)",
        }}
      />

      {/* Content — anchored bottom-left */}
      <div
        className="relative z-10 container flex flex-col justify-end"
        style={{ minHeight: "100svh", paddingBottom: "6rem" }}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="electric-rule" />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "'DM Mono', monospace",
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
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            lineHeight: 0.9,
            color: "white",
            letterSpacing: "0.02em",
            marginBottom: "0.5rem",
          }}
        >
          JJ<span style={{ color: "oklch(0.65 0.2 220)" }}>Clean</span>
          <br />Rides
        </h1>

        {/* Tagline */}
        <p
          className="mb-8 max-w-md"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "oklch(0.85 0.005 240)",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          Professional Mobile Valeting Across the New Forest
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            className="btn-electric"
            onClick={() => scrollTo("services")}
          >
            View Packages
          </button>
          <button
            className="btn-ghost"
            onClick={() => scrollTo("book")}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ lineHeight: 0, zIndex: 2 }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "60px" }}
        >
          <polygon
            points="0,60 1440,0 1440,60"
            fill="oklch(0.18 0.04 255)"
          />
        </svg>
      </div>
    </section>
  );
}
