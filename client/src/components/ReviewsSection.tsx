/* ============================================================
   JJCleanRides — Reviews Section
   Displays customer reviews + leave-a-review form
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

function Stars({ rating, interactive = false, onChange }: { rating: number; interactive?: boolean; onChange?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => interactive && onChange?.(star)}
          onMouseEnter={() => interactive && setHovered(star)}
          onMouseLeave={() => interactive && setHovered(0)}
          style={{
            fontSize: interactive ? "1.6rem" : "1rem",
            color: star <= (hovered || rating) ? "oklch(0.82 0.18 80)" : "oklch(0.35 0.01 240)",
            cursor: interactive ? "pointer" : "default",
            transition: "color 0.15s",
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
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", location: "", rating: 5, message: "" });

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then(setReviews)
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setFormState("submitting");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const newReview = await res.json();
        setReviews((prev) => [...prev, newReview]);
        setForm({ name: "", location: "", rating: 5, message: "" });
        setFormState("success");
        setTimeout(() => setFormState("idle"), 3000);
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "oklch(0.22 0.04 255)",
    border: "1px solid oklch(1 0 0 / 0.12)",
    borderRadius: "2px",
    padding: "0.75rem 1rem",
    color: "white",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "oklch(0.55 0.01 240)",
    marginBottom: "0.4rem",
    display: "block",
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
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

        {/* Leave a review form */}
        <div className="reveal max-w-2xl mx-auto">
          <div
            className="p-8"
            style={{
              background: "oklch(0.22 0.04 255)",
              border: "1px solid oklch(0.65 0.2 220 / 0.2)",
              borderRadius: "4px",
            }}
          >
            <h3
              className="mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.8rem",
                color: "white",
                letterSpacing: "0.03em",
              }}
            >
              Leave a Review
            </h3>

            {formState === "success" ? (
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.65 0.2 220)", fontSize: "0.95rem" }}>
                Thanks for your review! It's now live on the site.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Location <span style={{ color: "oklch(0.45 0.01 240)" }}>(optional)</span></label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g. Southampton"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Your Rating *</label>
                  <Stars rating={form.rating} interactive onChange={(r) => setForm({ ...form, rating: r })} />
                </div>

                <div>
                  <label style={labelStyle}>Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your experience..."
                    style={{ ...inputStyle, resize: "vertical" as const, minHeight: "80px" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>

                {formState === "error" && (
                  <p style={{ color: "oklch(0.7 0.2 25)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-electric"
                  style={{
                    opacity: formState === "submitting" ? 0.7 : 1,
                    cursor: formState === "submitting" ? "not-allowed" : "pointer",
                  }}
                >
                  {formState === "submitting" ? "Submitting…" : "Submit Review"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
