// Initialize Lucide Icons
lucide.createIcons();

// Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    const prevBtn = document.querySelector('.carousel-arrow-left');
    const nextBtn = document.querySelector('.carousel-arrow-right');
    
    let activeSlide = 2;

    const updateCarousel = () => {
        slides.forEach((slide, i) => {
            const offset = i - activeSlide;
            
            // Setting classes
            if (offset === 0) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }

            // Setting inline styles similar to React
            slide.style.transform = `translateX(${offset * 220}px) scale(${offset === 0 ? 1 : 0.8})`;
            slide.style.zIndex = offset === 0 ? 5 : 3 - Math.abs(offset);
            slide.style.opacity = Math.abs(offset) > 2 ? 0 : 1 - (Math.abs(offset) * 0.2);
        });

        dots.forEach((dot, i) => {
            if (i === activeSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const goTo = (index) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        activeSlide = index;
        updateCarousel();
    };

    prevBtn?.addEventListener('click', () => goTo(activeSlide - 1));
    nextBtn?.addEventListener('click', () => goTo(activeSlide + 1));

    slides.forEach((slide, i) => {
        slide.addEventListener('click', () => goTo(i));
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
    });

    // Initial render
    updateCarousel();
});

// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
