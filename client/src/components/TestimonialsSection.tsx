/* ============================================================
   JJCleanRides — Testimonials Section
   3 styled placeholder review cards — easy to swap in real quotes
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const placeholderReviews = [
  {
    name: "Customer Name",
    location: "New Forest",
    rating: 5,
    text: "Reviews coming soon — we're just getting started!",
    initials: "CN",
  },
  {
    name: "Customer Name",
    location: "Totton",
    rating: 5,
    text: "Reviews coming soon — we're just getting started!",
    initials: "CN",
  },
  {
    name: "Customer Name",
    location: "Southampton",
    rating: 5,
    text: "Reviews coming soon — we're just getting started!",
    initials: "CN",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="oklch(0.65 0.2 220)" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref } = useScrollReveal();

  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: "oklch(0.18 0.04 255)" }}
    >
      <div className="container">
        {/* Header */}
        <div ref={ref} className="reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="electric-rule" />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
            >
              Reviews
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
            What Our Customers Say
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderReviews.map((review, i) => (
            <div
              key={i}
              className="reveal p-6 flex flex-col gap-4"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "oklch(0.22 0.04 255)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                borderRadius: "4px",
              }}
            >
              <StarRating count={review.rating} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.65 0.01 240)",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}>
                {/* Avatar */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    background: "oklch(0.65 0.2 220 / 0.15)",
                    border: "1px solid oklch(0.65 0.2 220 / 0.3)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "oklch(0.65 0.2 220)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {review.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "oklch(0.85 0.005 240)",
                    }}
                  >
                    {review.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "oklch(0.5 0.01 240)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-center text-xs"
          style={{ color: "oklch(0.45 0.01 240)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Real customer reviews will appear here once they come in.
        </p>
      </div>
    </section>
  );
}
