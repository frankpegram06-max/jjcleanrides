/* ============================================================
   JJCleanRides — Enquiry / Booking Form Section
   Uses Formspree for email delivery (no backend needed)
   Replace FORMSPREE_ENDPOINT with actual form ID when ready
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// TODO: Replace with your Formspree form ID — sign up free at https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormState = "idle" | "submitting" | "success" | "error";

export default function EnquiryFormSection() {
  const { ref } = useScrollReveal();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
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
    transition: "border-color 0.2s",
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
    <section
      id="book"
      className="py-24"
      style={{ background: "oklch(0.15 0.04 255)" }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div ref={ref} className="reveal mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="electric-rule" />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
              >
                Get In Touch
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
              Book Your Valet
            </h2>
            <p
              className="mt-3"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "oklch(0.6 0.01 240)",
                lineHeight: 1.6,
              }}
            >
              Fill in the form and Jack will be in touch within 24 hours.
            </p>
          </div>

          {/* Success state */}
          {formState === "success" ? (
            <div
              className="reveal visible p-8 text-center"
              style={{
                background: "oklch(0.22 0.04 255)",
                border: "1px solid oklch(0.65 0.2 220 / 0.4)",
                borderRadius: "4px",
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "oklch(0.65 0.2 220 / 0.15)",
                  borderRadius: "50%",
                  border: "2px solid oklch(0.65 0.2 220 / 0.4)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(0.65 0.2 220)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                Booking Received!
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "oklch(0.7 0.01 240)",
                  lineHeight: 1.6,
                }}
              >
                Thanks! Jack will be in touch within 24 hours to confirm your booking and send your payment link.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal flex flex-col gap-5"
            >
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>
              </div>

              {/* Row: Phone + Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="07xxx xxxxxx"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="location">Location / Postcode *</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. SO40 3AB"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>
              </div>

              {/* Vehicle */}
              <div>
                <label style={labelStyle} htmlFor="vehicle">Vehicle Make &amp; Model *</label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  required
                  placeholder="e.g. Ford Focus, BMW 3 Series"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                />
              </div>

              {/* Row: Package + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle} htmlFor="package">Preferred Package *</label>
                  <select
                    id="package"
                    name="package"
                    required
                    style={{ ...inputStyle, appearance: "none" as const }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  >
                    <option value="" style={{ background: "#1a2540" }}>Select a package</option>
                    <option value="Quick Clean £30" style={{ background: "#1a2540" }}>Quick Clean — £30</option>
                    <option value="Deep Detailed Clean £50" style={{ background: "#1a2540" }}>Deep Detailed Clean — £50</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="date">Preferred Date *</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    style={{ ...inputStyle, colorScheme: "dark" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={labelStyle} htmlFor="notes">Additional Notes <span style={{ color: "oklch(0.45 0.01 240)" }}>(optional)</span></label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Anything else Jack should know? e.g. pet hair, specific areas of concern..."
                  style={{ ...inputStyle, resize: "vertical" as const, minHeight: "100px" }}
                  onFocus={(e) => (e.target.style.borderColor = "oklch(0.65 0.2 220)")}
                  onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.12)")}
                />
              </div>

              {/* Error */}
              {formState === "error" && (
                <p
                  className="text-sm"
                  style={{
                    color: "oklch(0.7 0.2 25)",
                    fontFamily: "'DM Sans', sans-serif",
                    background: "oklch(0.7 0.2 25 / 0.1)",
                    border: "1px solid oklch(0.7 0.2 25 / 0.3)",
                    borderRadius: "2px",
                    padding: "0.75rem 1rem",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="btn-electric mt-2"
                style={{
                  width: "100%",
                  textAlign: "center",
                  opacity: formState === "submitting" ? 0.7 : 1,
                  cursor: formState === "submitting" ? "not-allowed" : "pointer",
                }}
              >
                {formState === "submitting" ? "Sending…" : "Send Enquiry"}
              </button>

              <p
                className="text-center text-xs"
                style={{ color: "oklch(0.45 0.01 240)", fontFamily: "'DM Sans', sans-serif" }}
              >
                By submitting you agree to be contacted about your booking.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
