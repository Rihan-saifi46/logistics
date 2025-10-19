
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    let isFirstSection = true;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const firstSectionHeight = window.innerHeight;

        if (scrollTop < firstSectionHeight - 100) {
            isFirstSection = true;
            navbar.classList.remove('hidden');
        } else {
            isFirstSection = false;
            if (scrollTop > lastScrollTop) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
        }
        lastScrollTop = scrollTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isFirstSection && e.clientY < 100) {
            navbar.classList.remove('hidden');
        }
    });

    // Slider functionality
    let currentSlide = 0;
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = 3;

    function goToSlide(n) {
        currentSlide = n % totalSlides;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Contact form submit handler
    function handleSubmit(event) {
        event.preventDefault();
        alert("Thank you for contacting us! We’ll get back to you shortly.");
        event.target.reset();
    }
   