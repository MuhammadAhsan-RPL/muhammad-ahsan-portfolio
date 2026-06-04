// ========== ANIMATIONS RINGAN - CURSOR TETAP SEHAT ==========
(function() {
  
  // 1. FADE IN UP SAAT SCROLL
  function initFadeInUp() {
    const elements = document.querySelectorAll('.card-project, .glass-premium, section > div > .text-center');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    
    elements.forEach(el => observer.observe(el));
  }
  
  // 2. HOVER GLOW CARD
  function addHoverGlow() {
    document.querySelectorAll('.card-project, .glass-premium').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.2s ease';
        card.style.transform = 'translateY(-4px)';
        card.style.borderColor = '#3B82F6';
        card.style.boxShadow = '0 10px 20px -10px rgba(59,130,246,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.borderColor = '#1E1E2A';
        card.style.boxShadow = 'none';
      });
    });
  }
  
  // 3. SHIMMER TEXT
  function addShimmer() {
    document.querySelectorAll('h1, h2, .gradient-text-premium').forEach(title => {
      title.classList.add('shimmer-text');
    });
  }
  
  // 4. PULSE BUTTON
  function addPulse() {
    document.querySelectorAll('a[href*="mailto"], .btn-primary, .btn-premium').forEach(btn => {
      btn.classList.add('btn-pulse');
    });
  }
  
  // 5. FLOAT ANIMATION
  function addFloat() {
    const profileImg = document.querySelector('.w-60.h-60, .w-56.h-56');
    if (profileImg && profileImg.closest('.relative')) {
      profileImg.closest('.relative').classList.add('float-animation');
    }
  }
  
  // 6. SCALE IN UNTUK STATS
  function addScaleIn() {
    const stats = document.querySelectorAll('.grid-cols-2.md\\:grid-cols-4 > div, .flex.gap-8 > div');
    stats.forEach((stat, index) => {
      stat.style.opacity = '0';
      stat.classList.add('scale-in');
      stat.style.animationDelay = `${index * 0.05}s`;
    });
  }
  
  // 7. SLIDE HERO
  function addSlideHero() {
    const heroLeft = document.querySelector('.lg\\:w-\\[55%\\], .lg\\:w-1\\/2');
    const heroRight = document.querySelector('.lg\\:w-\\[40%\\], .lg\\:w-1\\/2.flex.justify-center');
    if (heroLeft) heroLeft.classList.add('slide-left');
    if (heroRight) heroRight.classList.add('slide-right');
  }
  
  // JALANKAN SEMUA
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initFadeInUp();
      addHoverGlow();
      addShimmer();
      addPulse();
      addFloat();
      addScaleIn();
      addSlideHero();
    }, 100);
  });
  
})();