const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    // Rastro negro semitransparente
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Color aleatorio: Neón o Rosa
        ctx.fillStyle = Math.random() > 0.9 ? "#ff69b4" : "#00f2fe"; 
        ctx.font = `${fontSize}px monospace`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Ajuste al redimensionar ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Lógica del ojo (password)
const toggle = document.querySelector('#togglePassword');
const pass = document.querySelector('#password');
toggle.addEventListener('click', () => {
    const type = pass.type === 'password' ? 'text' : 'password';
    pass.type = type;
    toggle.style.color = type === 'text' ? '#00f2fe' : '#fff';
});
