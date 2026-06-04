// ========== CUSTOM CURSOR PREMIUM ==========
(function() {
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
  
  // Update posisi cursor
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot langsung mengikuti
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
  
  // Ring dengan efek smooth (delay + easing)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();
  
  // Hover effect untuk semua link, tombol, dan card
  const hoverElements = document.querySelectorAll('a, button, .btn-primary, .btn-premium, .btn-outline-sv, .card-project, .card-premium-sv, .group, [role="button"], .filter-btn');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.width = '56px';
      cursorRing.style.height = '56px';
      cursorRing.style.borderColor = '#60A5FA';
      cursorRing.style.borderWidth = '2px';
      cursorRing.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.4)';
      cursorRing.style.backgroundColor = 'rgba(96, 165, 250, 0.08)';
      cursorDot.style.width = '10px';
      cursorDot.style.height = '10px';
      cursorDot.style.background = '#93C5FD';
      cursorDot.style.boxShadow = '0 0 12px rgba(147, 197, 253, 0.8)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'rgba(96, 165, 250, 0.6)';
      cursorRing.style.borderWidth = '1.5px';
      cursorRing.style.boxShadow = '0 0 12px rgba(96, 165, 250, 0.2)';
      cursorRing.style.backgroundColor = 'transparent';
      cursorDot.style.width = '6px';
      cursorDot.style.height = '6px';
      cursorDot.style.background = '#60A5FA';
      cursorDot.style.boxShadow = '0 0 8px rgba(96, 165, 250, 0.6)';
    });
  });
  
  // Sembunyikan cursor default
  const style = document.createElement('style');
  style.textContent = `
    * { cursor: none !important; }
    a, button, input, textarea, [role="button"], .filter-btn { cursor: none !important; }
    input, textarea { cursor: text !important; }
  `;
  document.head.appendChild(style);
  
  // Observer untuk elemen yang muncul setelah halaman load (dinamis)
  const observer = new MutationObserver(() => {
    const newElements = document.querySelectorAll('a, button, .btn-primary, .btn-premium, .card-project, .filter-btn:not([data-cursor-attached])');
    newElements.forEach(el => {
      el.setAttribute('data-cursor-attached', 'true');
      el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '56px';
        cursorRing.style.height = '56px';
        cursorRing.style.borderColor = '#60A5FA';
        cursorRing.style.boxShadow = '0 0 20px rgba(96, 165, 250, 0.4)';
        cursorRing.style.backgroundColor = 'rgba(96, 165, 250, 0.08)';
        cursorDot.style.width = '10px';
        cursorDot.style.height = '10px';
        cursorDot.style.background = '#93C5FD';
        cursorDot.style.boxShadow = '0 0 12px rgba(147, 197, 253, 0.8)';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(96, 165, 250, 0.6)';
        cursorRing.style.boxShadow = '0 0 12px rgba(96, 165, 250, 0.2)';
        cursorRing.style.backgroundColor = 'transparent';
        cursorDot.style.width = '6px';
        cursorDot.style.height = '6px';
        cursorDot.style.background = '#60A5FA';
        cursorDot.style.boxShadow = '0 0 8px rgba(96, 165, 250, 0.6)';
      });
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
})();