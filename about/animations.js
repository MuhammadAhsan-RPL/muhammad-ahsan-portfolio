// ========== SUBTLE PROFESSIONAL ANIMATIONS ==========
(function () {
  function initFadeInUp() {
    const elements = document.querySelectorAll(
      ".card-project, .card-about, .cert-card, .card-detail"
    );

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initFadeInUp();
  });
})();
