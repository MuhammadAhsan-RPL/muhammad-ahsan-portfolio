// ========== CUSTOM CURSOR (Desktop Only) ==========
(function() {
  // Cek apakah ini perangkat touch (HP/tablet)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  // Jika perangkat touch, langsung berhenti (gak usah jalankan cursor custom)
  if (isTouchDevice) return;
  
  // Cek juga lebar layar
  if (window.innerWidth < 1024) return;
  
  // Hapus cursor lama jika ada
  const oldDot = document.querySelector('.cursor-dot');
  const oldRing = document.querySelector('.cursor-ring');
  if (oldDot) oldDot.remove();
  if (oldRing) oldRing.remove();
  
  // Buat elemen cursor baru
  const cursorDot = document.createElement('div');
  const cursorRing = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorRing.className = 'cursor-ring';
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);
  
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
  
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();
  
  // Hover effect untuk desktop
  const hoverElements = document.querySelectorAll('a, button, .btn-primary, .btn-premium, .card-project, .filter-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '56px';
      cursorRing.style.height = '56px';
      cursorRing.style.borderColor = '#60A5FA';
      cursorRing.style.backgroundColor = 'rgba(96, 165, 250, 0.08)';
      cursorDot.style.width = '10px';
      cursorDot.style.height = '10px';
      cursorDot.style.background = '#93C5FD';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'rgba(96, 165, 250, 0.6)';
      cursorRing.style.backgroundColor = 'transparent';
      cursorDot.style.width = '6px';
      cursorDot.style.height = '6px';
      cursorDot.style.background = '#60A5FA';
    });
  });
  
  // Jika layar diresize ke ukuran HP, hapus cursor
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
      if (cursorDot) cursorDot.style.display = 'none';
      if (cursorRing) cursorRing.style.display = 'none';
      document.body.style.cursor = 'auto';
    } else {
      if (cursorDot) cursorDot.style.display = 'block';
      if (cursorRing) cursorRing.style.display = 'block';
    }
  });
})();