/* ============================================================
   JJCleanRides — Photo Gallery Section
   Masonry-style grid with lightbox on click
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-1-9MSNN6uQDRPyQfEA3SWS7L.webp",
    full: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-1-K3wg4FxZyyz3bQYB5EnPoC.png",
    alt: "Water beading on freshly detailed paint",
    caption: "Hydrophobic coating — water beads perfectly",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-2-9gVVkeiHJikDudekqStCCm.webp",
    full: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-2-fZxBJpkVvZVjfh63MCxBWa.png",
    alt: "Immaculate car interior after deep clean",
    caption: "Deep interior detail — leather conditioned, carpets spotless",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-3-9cbtVk6zTdX6ZwzimHRxSD.webp",
    full: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/gallery-3-fxHvdZ6pm5udZNAed4oLVN.png",
    alt: "Before and after alloy wheel clean",
    caption: "Before & after — alloy wheels restored",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/hero-bg-5xJfFNufZMJF5v8ZRyT76T.webp",
    full: "https://d2xsxph8kpxj0f.cloudfront.net/310519663470774982/3gi9ycfsRZLZBDYVekpZBe/hero-bg-FJQQTaWymMTMzY63F6AVzX.png",
    alt: "Professional mobile valeting at dusk",
    caption: "Mobile valeting — we come to your door",
  },
];

export default function GallerySection() {
  const { ref } = useScrollReveal();
  const [lightbox, setLightbox] = useState<null | { src: string; full: string; alt: string; caption: string }>(null);

  return (
    <section id="gallery" className="py-24" style={{ background: "oklch(0.18 0.04 255)" }}>
      <div className="container">
        {/* Header */}
        <div ref={ref} className="reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="electric-rule" />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace", color: "oklch(0.65 0.2 220)" }}
            >
              Our Work
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
            Photo Gallery
          </h2>
          <p
            className="mt-3 text-sm"
            style={{ color: "oklch(0.55 0.01 240)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Placeholder images — your real work photos will go here.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden cursor-pointer"
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderRadius: "4px",
                aspectRatio: i === 0 || i === 3 ? "4/5" : "1/1",
                gridRow: i === 0 || i === 3 ? "span 1" : "auto",
              }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, oklch(0.1 0.04 255 / 0.85) 0%, transparent 60%)",
                }}
              >
                <p
                  className="text-xs text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {img.caption}
                </p>
              </div>
              {/* Expand icon */}
              <div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7 flex items-center justify-center"
                style={{
                  background: "oklch(0.65 0.2 220 / 0.9)",
                  borderRadius: "2px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "oklch(0.05 0.02 255 / 0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.full}
              alt={lightbox.alt}
              className="w-full rounded object-contain"
              style={{ maxHeight: "80vh" }}
            />
            <p
              className="mt-3 text-center text-sm"
              style={{ color: "oklch(0.7 0.01 240)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {lightbox.caption}
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center"
              style={{
                background: "oklch(0.65 0.2 220)",
                borderRadius: "2px",
                color: "white",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
