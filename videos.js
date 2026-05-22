document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    videoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    const placeholders = document.querySelectorAll('.video-placeholder');
    placeholders.forEach(p => {
        p.addEventListener('mouseenter', () => {
            p.style.cursor = 'pointer';
            p.style.backgroundColor = '#111';
        });
        p.addEventListener('mouseleave', () => {
            p.style.backgroundColor = '#000';
        });
    });
});
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}