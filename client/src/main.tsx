import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global scroll-reveal observer — watches all .reveal elements on the page
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const observe = () => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  };

  // Observe immediately and after a short delay to catch dynamically rendered elements
  observe();
  setTimeout(observe, 300);
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
setTimeout(initScrollReveal, 100);
