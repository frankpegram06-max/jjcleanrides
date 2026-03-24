/* ============================================================
   JJCleanRides — About Section
   Split panel: photo left, text right with decorative quote mark
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABOUT_IMG = "/gallery/about-jack.jpg";

export default function AboutSection() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="py-24" style={{ background: "oklch(0.15 0.04 255)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div ref={ref} className="reveal order-2 md:order-1">
            <div
              className="relative"
              style={{ maxWidth: "420px", margin: "0 auto md:0" }}
            >
              {/* Decorative border offset */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full"
                style={{
                  border: "2px solid oklch(0.65 0.2 220 / 0.3)",
                  borderRadius: "4px",
                  zIndex: 0,
                }}
              />
              <img
                src={ABOUT_IMG}
                alt="Jack Jones — founder of JJCleanRides"
                className="relative z-10 w-full object-cover"
                style={{ borderRadius: "4px", aspectRatio: "3/4", objectPosition: "top" }}
                loading="lazy"
              />
              {/* Name tag */}
              <div
                className="absolute bottom-4 left-4 z-20 px-4 py-2"
                style={{
                  background: "oklch(0.12 0.04 255 / 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(0.65 0.2 220 / 0.3)",
                  borderRadius: "2px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    color: "white",
                    letterSpacing: "0.05em",
                  }}
                >
                  Jack Jones
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "oklch(0.65 0.2 220)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder, JJCleanRides
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal order-1 md:order-2" style={{ transitionDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="electric-rule" />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
              >
                About
              </span>
            </div>

            <h2
              className="mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "white",
                lineHeight: 1,
              }}
            >
              Meet Jack
            </h2>

            {/* Decorative quote mark */}
            <div
              className="relative pl-5 mb-6"
              style={{ borderLeft: "2px solid oklch(0.65 0.2 220 / 0.4)" }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.05rem",
                  color: "oklch(0.78 0.005 240)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                "Hi, I'm Jack — the founder of JJCleanRides. I started this business out of a genuine passion for cars and a belief that every vehicle deserves to look its best. I come to you, work around your schedule, and take pride in every job I do. No shortcuts, no rushing — just a clean you'll notice."
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: "Based in", value: "Totton, Hampshire" },
                { label: "Coverage", value: "New Forest & surrounding areas" },
                { label: "Payments", value: "Secure via Stripe" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      color: "oklch(0.65 0.2 220)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      minWidth: "80px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "oklch(0.75 0.005 240)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
