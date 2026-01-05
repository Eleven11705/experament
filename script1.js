// Get the canvas element and its 2D context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables
let spiderman = {
    x: 50,
    y: 500,
    width: 30,
    height: 60,
    color: 'red',
    vx: 0, // velocity x
    vy: 0, // velocity y
    gravity: 0.5,
    jumpForce: -10
};

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game logic (basic gravity for demonstration)
    spiderman.vy += spiderman.gravity;
    spiderman.y += spiderman.vy;

    // Basic ground collision
    if (spiderman.y + spiderman.height > canvas.height) {
        spiderman.y = canvas.height - spiderman.height;
        spiderman.vy = 0;
    }

    // Draw Spiderman (as a rectangle)
    ctx.fillStyle = spiderman.color;
    ctx.fillRect(spiderman.x, spiderman.y, spiderman.width, spiderman.height);

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Event listener for user input (e.g., jumping)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && spiderman.vy === 0) {
        spiderman.vy = spiderman.jumpForce;
    }
});
