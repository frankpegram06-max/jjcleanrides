/* ============================================================
   JJCleanRides — Photo Gallery Section
   3 featured photos + expandable grid with lightbox
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredImages = [
  {
    src: "/gallery/hero-merc-blue.jpg",
    alt: "Blue Mercedes A-Class after full valet with sunset sky",
    caption: "Mercedes A-Class — exterior valet",
  },
  {
    src: "/gallery/range-rover-velar.jpg",
    alt: "Glossy black Range Rover Velar after full valet",
    caption: "Range Rover Velar — full exterior detail",
  },
  {
    src: "/gallery/bmw-interior.jpg",
    alt: "BMW X5 premium brown leather interior after deep clean",
    caption: "BMW X5 — deep interior detail",
  },
];

const moreImages = [
  {
    src: "/gallery/mercedes-front.jpg",
    alt: "Black Mercedes A-Class front exterior after valet",
    caption: "Mercedes A-Class — exterior valet",
  },
  {
    src: "/gallery/mercedes-side.jpg",
    alt: "Black Mercedes side profile with glossy paint",
    caption: "Mercedes — gloss paint finish",
  },
  {
    src: "/gallery/paint-gloss.jpg",
    alt: "Mirror-like gloss paint panel after detailing",
    caption: "Paint detail — mirror finish",
  },
  {
    src: "/gallery/range-rover-interior.jpg",
    alt: "Range Rover rear leather interior after deep clean",
    caption: "Range Rover — leather interior detail",
  },
  {
    src: "/gallery/ford-ranger-interior.jpg",
    alt: "Ford Ranger Raptor black and red interior after clean",
    caption: "Ford Ranger Raptor — interior detail",
  },
  {
    src: "/gallery/mercedes-door.jpg",
    alt: "Mercedes A-Class door open showing spotless interior",
    caption: "Mercedes A-Class — interior clean",
  },
  {
    src: "/gallery/ford-ranger.jpg",
    alt: "Ford Ranger Raptor exterior after valet",
    caption: "Ford Ranger Raptor — exterior valet",
  },
];

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function GallerySection() {
  const { ref } = useScrollReveal();
  const [showMore, setShowMore] = useState(false);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

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
        </div>

        {/* Featured 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {featuredImages.map((img, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden cursor-pointer"
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderRadius: "4px",
                aspectRatio: "4/3",
              }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, oklch(0.1 0.04 255 / 0.85) 0%, transparent 60%)",
                }}
              >
                <p className="text-xs text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {img.caption}
                </p>
              </div>
              <div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7 flex items-center justify-center"
                style={{ background: "oklch(0.65 0.2 220)", borderRadius: "2px" }}
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

        {/* Expanded grid */}
        {showMore && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {moreImages.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: "4px", aspectRatio: "1/1" }}
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, oklch(0.1 0.04 255 / 0.85) 0%, transparent 60%)",
                  }}
                >
                  <p className="text-xs text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* See More / See Less button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn-ghost flex items-center gap-2"
          >
            {showMore ? "See Less" : "See More Work"}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                transform: showMore ? "rotate(180deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
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
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
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
