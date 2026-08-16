// Home page specific functionality

document.addEventListener('DOMContentLoaded', function() {
  console.log("🏠 Home page loaded");

  // Animate feature cards on scroll or load
  function animateCards() {
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        TodoApp.fadeIn(card);
      }, index * 150);
    });
  }

  // Add hover effects to feature cards
  function addCardEffects() {
    const cards = document.querySelectorAll('.stat-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-3px) scale(1)';
      });
    });
  }

  // Add typing effect to hero title
  function addTypingEffect() {
    const title = document.querySelector('.hero-title');
    if (title) {
      const text = title.textContent;
      title.textContent = '';
      title.style.opacity = '1';
      
      let index = 0;
      function typeChar() {
        if (index < text.length) {
          title.textContent += text[index];
          index++;
          setTimeout(typeChar, 50);
        }
      }
      
      setTimeout(typeChar, 500);
    }
  }

  // Add pulse effect to CTA button
  function addCTAEffect() {
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
      setInterval(() => {
        ctaBtn.style.animation = 'none';
        setTimeout(() => {
          ctaBtn.style.animation = 'pulse 0.5s ease';
        }, 100);
      }, 4000);
    }
  }

  // Add CSS for pulse animation
  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(pulseStyle);

  // Initialize all effects
  setTimeout(animateCards, 200);
  addCardEffects();
  addTypingEffect();
  addCTAEffect();

  console.log("✅ Home page effects initialized");
});