document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú hamburguesa para celulares
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Animación de aparición para las tarjetas
    const cards = document.querySelectorAll('.glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});
