/* ============================================================
   JJCleanRides — Reviews Section
   Displays customer reviews
   ============================================================ */
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  message: string;
  date: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "1rem",
            color: star <= rating ? "oklch(0.82 0.18 80)" : "oklch(0.35 0.01 240)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref } = useScrollReveal();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(setReviews)
      .catch(() => {});
  }, []);

  return (
    <section id="reviews" className="py-24" style={{ background: "oklch(0.18 0.04 255)" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref} className="reveal mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="electric-rule" />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
            >
              Customer Reviews
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
            What People Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="reveal"
              style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
            >
              <div
                className="p-6 h-full flex flex-col"
                style={{
                  background: "oklch(0.22 0.04 255)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                  borderRadius: "4px",
                }}
              >
                <Stars rating={review.rating} />
                <p
                  className="mt-3 flex-1"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "oklch(0.75 0.005 240)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  "{review.message}"
                </p>
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "white", fontWeight: 600 }}>
                    {review.name}
                  </p>
                  {review.location && (
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "oklch(0.65 0.2 220)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "2px" }}>
                      {review.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
