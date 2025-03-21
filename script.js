
// Add animations to elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Apply animation delays for cards
    const cards = document.querySelectorAll('.card');
    let delay = 0.2;
    
    cards.forEach(card => {
      card.style.animationDelay = `${delay}s`;
      delay += 0.1;
    });
    
    // Add scroll reveal animation with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all cards for scroll animations
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      item.style.transitionDelay = `${0.1 * index + 0.3}s`;
      observer.observe(item);
    });
    
    // Observe skills list items
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(10px)';
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      item.style.transitionDelay = `${0.05 * index + 0.2}s`;
      observer.observe(item);
    });
  });
  