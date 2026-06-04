// ========== ANIMATIONS RINGAN (Tidak ganggu cursor) ==========
(function() {
  
  // 1. Fade In Up saat scroll
  function initFadeInUp() {
    const elements = document.querySelectorAll('.card-project, .glass-premium, section > div > .text-center');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(30px)';
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
  }
  
  // 2. Hover Glow Card
  function addGlow() {
    document.querySelectorAll('.card-project, .glass-premium').forEach(card => {
      card.style.transition = 'all 0.3s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
        card.style.borderColor = '#3B82F6';
        card.style.boxShadow = '0 20px 30px -15px rgba(59,130,246,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.borderColor = '#1E1E2A';
        card.style.boxShadow = 'none';
      });
    });
  }
  
  // 3. Shimmer untuk judul
  function addShimmer() {
    const titles = document.querySelectorAll('h1, h2, .gradient-text');
    titles.forEach(title => {
      title.style.background = 'linear-gradient(90deg, #3B82F6, #60A5FA, #3B82F6)';
      title.style.backgroundSize = '200% auto';
      title.style.webkitBackgroundClip = 'text';
      title.style.backgroundClip = 'text';
      title.style.color = 'transparent';
      title.style.animation = 'shimmer 3s linear infinite';
    });
  }
  
  // 4. Pulse untuk tombol Contact
  function addPulse() {
    const btns = document.querySelectorAll('a[href*="mailto"], .btn-primary, .btn-premium');
    btns.forEach(btn => {
      btn.style.animation = 'pulse 2s ease-in-out infinite';
    });
  }
  
  // 5. Tambahkan keyframes ke style
  function addKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
        50% { transform: scale(1.02); box-shadow: 0 0 0 8px rgba(59,130,246,0); }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Jalankan semua
  document.addEventListener('DOMContentLoaded', () => {
    addKeyframes();
    setTimeout(() => {
      initFadeInUp();
      addGlow();
      addShimmer();
      addPulse();
    }, 100);
  });
  
})();