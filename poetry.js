document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.poetry-block');

    const fadeIn = () => {
        blocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            if (blockTop < window.innerHeight - 150) {
                block.style.opacity = '1';
                block.style.filter = 'blur(0px)';
            }
        });
    };

    blocks.forEach(block => {
        block.style.opacity = '0';
        block.style.filter = 'blur(10px)';
        block.style.transition = 'opacity 1.5s ease, filter 1.5s ease';
    });

    window.addEventListener('scroll', fadeIn);
    fadeIn(); 
});
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}