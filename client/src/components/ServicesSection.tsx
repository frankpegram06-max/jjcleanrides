/* ============================================================
   JJCleanRides — Services & Pricing Section
   Two cards side by side, offset vertically, electric blue accents
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    label: "A",
    name: "Deep Detail",
    description: "Full interior & exterior — the works",
    price: "£50",
    features: [
      "Snow foam & pre wash",
      "Chrome & plastic trims",
      "Tyres dressed",
      "Wax coat applied",
      "Deep hoover",
      "Vents & dashboard cleaned",
      "Seats cleaned",
      "Wheels deep cleaned",
    ],
    highlight: true,
  },
  {
    label: "B",
    name: "Quick Detail",
    description: "Fast refresh inside & out",
    price: "£30",
    features: [
      "Snow foam & pre wash",
      "Inside hoovered",
      "Inside dusted",
      "Dash wipe down",
      "Glass clean",
      "Wheels cleaned",
    ],
    highlight: false,
  },
  {
    label: "C",
    name: "Inside Only",
    description: "Full interior clean",
    price: "£20",
    features: [
      "Carpets hoovered",
      "Seats hoovered",
      "Windows cleaned",
      "Vents & dash wipe",
    ],
    highlight: false,
  },
  {
    label: "D",
    name: "Outside Only",
    description: "Full exterior clean",
    price: "£20",
    features: [
      "Snow foam & pre wash",
      "Chrome & plastic trims",
      "Wheels cleaned",
      "Glass cleaned",
      "Headlights cleaned",
    ],
    highlight: false,
  },
];

export default function ServicesSection() {
  const { ref } = useScrollReveal();

  const scrollToBook = () => {
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24" style={{ background: "oklch(0.18 0.04 255)" }}>
      <div className="container">
        {/* Section header */}
        <div ref={ref} className="reveal mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="electric-rule" />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
            >
              Packages
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "white",
              lineHeight: 1,
            }}
          >
            Services &amp; Pricing
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.12}s`,
                marginTop: i === 1 ? "0" : "0",
              }}
            >
              <div
                className="relative p-8 flex flex-col h-full"
                style={{
                  background: s.highlight
                    ? "linear-gradient(135deg, oklch(0.22 0.06 250) 0%, oklch(0.2 0.05 255) 100%)"
                    : "oklch(0.22 0.04 255)",
                  border: s.highlight
                    ? "1px solid oklch(0.65 0.2 220 / 0.5)"
                    : "1px solid oklch(1 0 0 / 0.08)",
                  borderRadius: "4px",
                }}
              >
                {s.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "oklch(0.65 0.2 220)", borderRadius: "4px 4px 0 0" }}
                  />
                )}

                {/* Package label badge */}
                <div
                  className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center"
                  style={{
                    background: s.highlight ? "oklch(0.65 0.2 220)" : "oklch(0.65 0.2 220 / 0.15)",
                    border: "1px solid oklch(0.65 0.2 220 / 0.5)",
                    borderRadius: "2px",
                  }}
                >
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    color: s.highlight ? "white" : "oklch(0.65 0.2 220)",
                    letterSpacing: "0.05em",
                  }}>
                    {s.label}
                  </span>
                </div>

                {s.highlight && (
                  <div
                    className="absolute top-4 right-4 text-xs font-semibold tracking-widest uppercase px-2 py-1"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      background: "oklch(0.65 0.2 220 / 0.15)",
                      color: "oklch(0.65 0.2 220)",
                      borderRadius: "2px",
                      border: "1px solid oklch(0.65 0.2 220 / 0.3)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6 mt-8">
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      color: "white",
                      letterSpacing: "0.03em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ color: "oklch(0.65 0.01 240)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem" }}>
                    {s.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "3.5rem",
                      color: s.highlight ? "oklch(0.65 0.2 220)" : "white",
                      lineHeight: 1,
                    }}
                  >
                    {s.price}
                  </span>
                  <span style={{ color: "oklch(0.55 0.01 240)", fontSize: "0.85rem", marginLeft: "0.25rem" }}>
                    per vehicle
                  </span>
                </div>

                <ul className="mb-8 flex flex-col gap-2 flex-1">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "oklch(0.78 0.005 240)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span style={{ color: "oklch(0.65 0.2 220)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToBook}
                  className={s.highlight ? "btn-electric" : "btn-ghost"}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-6 text-center text-sm"
          style={{ color: "oklch(0.55 0.01 240)", fontFamily: "'DM Sans', sans-serif" }}
        >
          All jobs are mobile — we come to you.
        </p>
      </div>
    </section>
  );
}
