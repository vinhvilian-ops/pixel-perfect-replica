import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-up, .stagger").forEach((el) => observer.observe(el));

    // Trigger for elements already in view
    setTimeout(() => {
      document.querySelectorAll(".stagger, .fade-up").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
