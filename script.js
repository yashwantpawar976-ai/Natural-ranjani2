/**
 * Milk Drop Click Animation
 * Adds a splashing milk drop effect whenever the user clicks on the page.
 */

document.addEventListener('click', function (e) {
    // Number of drops between 6 and 10
    const numDrops = 6 + Math.floor(Math.random() * 5);

    for (let i = 0; i < numDrops; i++) {
        createMilkDrop(e.clientX, e.clientY);
    }
});

function createMilkDrop(x, y) {
    const drop = document.createElement('div');
    drop.classList.add('milk-drop');

    // Splash calculations
    const angle = Math.random() * Math.PI * 2;
    // Velocity/distance of the splash
    const velocity = 30 + Math.random() * 40; 
    
    const tx = Math.cos(angle) * velocity;
    // Add a bit of downward gravity bias
    const ty = Math.sin(angle) * velocity + (Math.random() * 20);

    drop.style.left = `${x}px`;
    drop.style.top = `${y}px`;
    drop.style.setProperty('--tx', `${tx}px`);
    drop.style.setProperty('--ty', `${ty}px`);

    // Randomize duration subtly (0.4s to 0.7s)
    const duration = 0.4 + Math.random() * 0.3;
    drop.style.animationDuration = `${duration}s`;

    // Randomize size slightly for realism (6px to 12px)
    const size = 6 + Math.random() * 6;
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;

    document.body.appendChild(drop);

    // Remove element after animation ends
    setTimeout(() => {
        drop.remove();
    }, duration * 1000);
}
