document.addEventListener('DOMContentLoaded', () => {
    const miniBoxes = document.querySelectorAll('.mini-box');
    
    const revealOnScroll = () => {
        miniBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;
            
            if (boxTop < triggerPoint) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    };

    miniBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);

    const mainTitle = document.querySelector('h1');
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        mainTitle.style.textShadow = `${moveX}px ${moveY}px 15px rgba(0,0,0,0.5)`;
    });

    const mainInfoBox = document.querySelector('.main-info-box');
    mainInfoBox.addEventListener('click', () => {
        // Logic for interaction can be added here
    });
});
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}