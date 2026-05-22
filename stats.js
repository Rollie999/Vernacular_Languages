document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    
    const animateBars = () => {
        bars.forEach(bar => {
            const finalHeight = bar.style.height;
            bar.style.height = '0';
            setTimeout(() => {
                bar.style.transition = 'height 1.5s ease-out';
                bar.style.height = finalHeight;
            }, 200);
        });
    };

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = 'transparent';
        });
    });

    animateBars();
});
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}