// ========== ANIMATIONS PREMIUM - FULL PACKAGE ==========

(function() {
  
  // 1. FADE IN UP ON SCROLL (menggunakan Intersection Observer)
  function initFadeInUp() {
    const fadeElements = document.querySelectorAll(
      '.card-project, .glass-premium, .card-about, .cert-card, ' +
      'section > div > .text-center, .hero-glow + div > div, ' +
      '.grid > div, .flex-col.md\\:flex-row, .stats-card'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    fadeElements.forEach(el => observer.observe(el));
  }
  
  // 2. TAMBAH CLASS GLOW UNTUK CARD
  function addGlowToCards() {
    document.querySelectorAll('.card-project, .glass-premium, .card-about, .cert-card').forEach(card => {
      card.classList.add('card-glow');
    });
  }
  
  // 3. TAMBAH SHIMMER UNTUK JUDUL
  function addShimmerToTitles() {
    const titles = document.querySelectorAll(
      'h1, h2, .gradient-text, .gradient-text-premium, ' +
      '.text-4xl, .text-3xl.font-bold, .text-2xl.font-bold'
    );
    titles.forEach(title => {
      if (!title.closest('.btn-primary, .btn-premium')) {
        title.classList.add('shimmer-text');
      }
    });
  }
  
  // 4. TAMBAH PULSE UNTUK TOMBOL CONTACT
  function addPulseToButtons() {
    const buttons = document.querySelectorAll(
      'a[href*="mailto"], a[href*="contact"], a[href*="Let\'s talk"], ' +
      '.btn-primary, .btn-premium, .btn-solid'
    );
    buttons.forEach(btn => {
      btn.classList.add('btn-pulse');
    });
  }
  
  // 5. PAGE TRANSITION
  function addPageTransition() {
    document.body.classList.add('page-transition');
  }
  
  // 6. FLOAT ANIMATION UNTUK FOTO PROFIL
  function addFloatToProfile() {
    const profileImg = document.querySelector('.rounded-full, .w-60.h-60, .w-56.h-56');
    if (profileImg && profileImg.closest('.relative')) {
      profileImg.closest('.relative').classList.add('float-animation');
    }
  }
  
  // 7. SCALE IN UNTUK STATS DAN BADGE
  function addScaleToStats() {
    const stats = document.querySelectorAll('.grid-cols-2.md\\:grid-cols-4 > div, .flex.gap-8 > div, .stats-item');
    stats.forEach((stat, index) => {
      stat.style.opacity = '0';
      stat.classList.add('scale-in');
      stat.style.animationDelay = `${index * 0.1}s`;
    });
  }
  
  // 8. SLIDE ANIMATION UNTUK HERO CONTENT
  function addSlideToHero() {
    const heroLeft = document.querySelector('.lg\\:w-\\[55%\\], .lg\\:w-1\\/2');
    const heroRight = document.querySelector('.lg\\:w-\\[40%\\], .lg\\:w-1\\/2.flex.justify-center');
    
    if (heroLeft) heroLeft.classList.add('slide-left');
    if (heroRight) heroRight.classList.add('slide-right');
  }
  
  // 9. BLUR IN UNTUK BACKGROUND GLOW
  function addBlurToBackground() {
    const glowBg = document.querySelectorAll('.glow-bg');
    glowBg.forEach(bg => {
      bg.classList.add('blur-in');
    });
  }
  
  // 10. OBSERVER UNTUK ELEMEN YANG MUNCUL DINAMIS (FILTER PROJECT)
  function observeDynamicElements() {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.card-project, .glass-premium').forEach(card => {
        if (!card.classList.contains('card-glow')) {
          card.classList.add('card-glow');
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // 11. PARALLAX SCROLL (EFEK KECIL)
  function initParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroGlow = document.querySelector('.hero-glow');
      if (heroGlow) {
        heroGlow.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    });
  }
  
  // 12. TYPEWRITER EFFECT (OPSIONAL UNTUK HERO)
  function initTypewriter() {
    const heroText = document.querySelector('h1 .gradient-text-premium, .text-4xl.md\\:text-5xl span');
    if (heroText && heroText.innerText === 'Muhammad Ahsan') {
      // Sudah bagus, tidak perlu typewriter biar gak berlebihan
    }
  }
  
  // 13. LOADING PROGRESS BAR (SUBTLE)
  function initLoadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #3B82F6, #8B5CF6);
      z-index: 99999;
      transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }
  
  // 14. RUN ALL ANIMATIONS
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      addGlowToCards();
      addShimmerToTitles();
      addPulseToButtons();
      addPageTransition();
      addFloatToProfile();
      addScaleToStats();
      addSlideToHero();
      addBlurToBackground();
      initFadeInUp();
      observeDynamicElements();
      initParallax();
      initLoadingProgress();
    }, 100);
  });
  
})();