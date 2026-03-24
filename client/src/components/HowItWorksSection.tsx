/* ============================================================
   JJCleanRides — How It Works Section
   3-step horizontal flow with connecting dotted lines
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Fill In The Form",
    description:
      "Choose your package, tell us your location and preferred date, and submit the quick enquiry form below.",
    icon: "📋",
  },
  {
    number: "02",
    title: "Jack Confirms",
    description:
      "Jack will be in touch within 24 hours to confirm your booking and send your secure Stripe payment link.",
    icon: "✅",
  },
  {
    number: "03",
    title: "We Come To You",
    description:
      "Sit back and relax. We arrive at your door with all the equipment — you get a showroom-clean car.",
    icon: "🚗",
  },
];

export default function HowItWorksSection() {
  const { ref } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      className="py-24"
      style={{ background: "oklch(0.15 0.04 255)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={ref} className="reveal mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="electric-rule" />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
            >
              Process
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
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6"
            style={{
              height: "1px",
              background:
                "repeating-linear-gradient(to right, oklch(0.65 0.2 220 / 0.4) 0, oklch(0.65 0.2 220 / 0.4) 8px, transparent 8px, transparent 16px)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-8 py-8 relative z-10"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Number circle */}
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  background: "oklch(0.22 0.04 255)",
                  border: "2px solid oklch(0.65 0.2 220 / 0.5)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    color: "oklch(0.65 0.2 220)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.5rem",
                  color: "white",
                  letterSpacing: "0.03em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.65 0.01 240)",
                  lineHeight: 1.6,
                  maxWidth: "22ch",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stripe note */}
        <div
          className="mt-12 flex items-center justify-center gap-3 py-4 px-6 mx-auto w-fit"
          style={{
            background: "oklch(0.22 0.04 255)",
            border: "1px solid oklch(1 0 0 / 0.08)",
            borderRadius: "4px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="oklch(0.65 0.2 220)" strokeWidth="1.5"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="oklch(0.65 0.2 220)" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="1.5" fill="oklch(0.65 0.2 220)"/>
          </svg>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "oklch(0.65 0.01 240)",
            }}
          >
            Secure payments processed via{" "}
            <span style={{ color: "oklch(0.65 0.2 220)", fontWeight: 600 }}>Stripe</span>
          </span>
        </div>
      </div>
    </section>
  );
}
