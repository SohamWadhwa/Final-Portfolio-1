// Select all divider elements
const dividers = document.querySelectorAll('.divider');

// Intersection Observer callback
const handleIntersection = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Expand the divider when in view
            entry.target.style.width = '100%';
        } else {
            // Reset the divider width when out of view (optional)
            entry.target.style.width = '0';
        }
    });
};

// Create Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Trigger when 50% of the divider is visible
});

// Observe each divider
dividers.forEach(divider => observer.observe(divider));

// Add hover effect for project preview
document.querySelectorAll('.project-title').forEach(title => {
    const preview = title.closest('.project').querySelector('.project-preview');
    
    title.addEventListener('mouseenter', () => {
        if (preview) {
            preview.classList.add('active');
        }
    });

    title.addEventListener('mouseleave', () => {
        if (preview) {
            preview.classList.remove('active');
        }
    });
});