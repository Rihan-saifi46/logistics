  const navbar = document.querySelector('nav');
        let lastScrollTop = 0;
        let isFirstSection = true;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const firstSectionHeight = window.innerHeight;

            // Check if we're in first section
            if (scrollTop < firstSectionHeight - 100) {
                isFirstSection = true;
                navbar.classList.remove('hidden');
            } else {
                isFirstSection = false;
                // Hide navbar when scrolling down, show when scrolling up
                if (scrollTop > lastScrollTop) {
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                }
            }
            lastScrollTop = scrollTop;
        });

        // Show navbar on mouse hover at top
        document.addEventListener('mousemove', (e) => {
            if (!isFirstSection && e.clientY < 100) {
                navbar.classList.remove('hidden');
            }
        });

        // Slider functionality
//         let currentSlide = 0;
//         const slider = document.getElementById('slider');
//         const dots = document.querySelectorAll('.dot');
//         const totalSlides = 3;

//         function goToSlide(n) {
//     currentSlide = n;
//     const slideWidth = slider.clientWidth; // poore slider container ki width
//     slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
//     updateDots();
// }
//         function nextSlide() {
//             currentSlide = (currentSlide + 1) % totalSlides;
//             goToSlide(currentSlide);
//         }

//         function updateDots() {
//             dots.forEach((dot, index) => {
//                 dot.classList.toggle('active', index === currentSlide);
//             });
//         }

        // Auto slide
        // setInterval(nextSlide, 5000);
let currentSlide = 0;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

// Go to specific slide
function goToSlide(n) {
    currentSlide = n;
    const slideWidth = slider.clientWidth; // get full container width
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateDots();
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

// Update active dot
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Optional: handle window resize to recalc width
window.addEventListener('resize', () => {
    goToSlide(currentSlide);
});

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission
        function handleSubmit(e) {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            e.target.reset();
        }

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease-out';
                }
            });
        }, observerOptions);
  
   
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelector('.links');
    const btn = document.querySelector('.menu-btn');
    const slider = document.querySelector('.slider-section'); // slider ke baad ka content

    btn.addEventListener('click', () => {
        links.classList.toggle('active');

        if (links.classList.contains('active')) {
            const height = links.scrollHeight;
            links.style.maxHeight = height + 'px';

            // Push slider-section + baaki content down
            slider.style.marginTop = height + 'px';
        } else {
            links.style.maxHeight = '0';
            slider.style.marginTop = '0';
        }
    });
});

        document.querySelectorAll('.service-card, .gallery-item, .info-item').forEach(el => {
            observer.observe(el);
        });