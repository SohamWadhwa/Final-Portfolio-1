window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // Reset animation when out of view
            }
        });
    }, {
        threshold: 0.01, // Trigger when 10% of the element is visible
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTop');

        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('slide-out-down');
            setTimeout(() =>{
                backToTopBtn.classList.add('slide-in-up');
                backToTopBtn.style.display = 'block';
            }, 300);
        } else {
            backToTopBtn.classList.remove('slide-in-up');
            backToTopBtn.classList.add('slide-out-down');
            setTimeout(() => {
                backToTopBtn.style.display = 'none';
            }, 300);
        }
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Track mouse movements
    document.addEventListener('mousemove', (event) => {
        const { clientX: x, clientY: y } = event;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });
});


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true, // Enables smooth scrolling
//     multiplier: 0.1 // Adjust scroll speed (lower is slower)
// });





