// ========== CUSTOM CURSOR (Desktop Only) ==========
(function () {
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;
  if (window.innerWidth < 1024) return;

  const oldDot = document.querySelector(".cursor-dot");
  const oldRing = document.querySelector(".cursor-ring");
  if (oldDot) oldDot.remove();
  if (oldRing) oldRing.remove();

  const cursorDot = document.createElement("div");
  const cursorRing = document.createElement("div");
  cursorDot.className = "cursor-dot";
  cursorRing.className = "cursor-ring";
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverElements = document.querySelectorAll(
    "a, button, .btn-primary, .btn-premium, .card-project, .filter-btn, .faq-question"
  );
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorRing.style.width = "50px";
      cursorRing.style.height = "50px";
      cursorRing.style.borderColor = "rgba(96, 165, 250, 0.85)";
      cursorRing.style.backgroundColor = "rgba(96, 165, 250, 0.08)";
      cursorDot.style.width = "8px";
      cursorDot.style.height = "8px";
      cursorDot.style.background = "#93c5fd";
    });
    el.addEventListener("mouseleave", () => {
      cursorRing.style.width = "34px";
      cursorRing.style.height = "34px";
      cursorRing.style.borderColor = "rgba(96, 165, 250, 0.5)";
      cursorRing.style.backgroundColor = "transparent";
      cursorDot.style.width = "6px";
      cursorDot.style.height = "6px";
      cursorDot.style.background = "#60a5fa";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      if (cursorDot) cursorDot.style.display = "none";
      if (cursorRing) cursorRing.style.display = "none";
      document.body.style.cursor = "auto";
    } else {
      if (cursorDot) cursorDot.style.display = "block";
      if (cursorRing) cursorRing.style.display = "block";
    }
  });
})();
