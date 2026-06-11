// Intersection Observer for scroll-in animations on feature sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.feature-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
});