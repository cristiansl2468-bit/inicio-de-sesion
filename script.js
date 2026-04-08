document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', () => {
            // Cambiar tipo de input
            const isPassword = passwordField.type === 'password';
            passwordField.type = isPassword ? 'text' : 'password';
            
            // Cambiar color y brillo del ojo al activar
            togglePassword.style.color = isPassword ? '#00f2fe' : '#cbd5e1';
            togglePassword.style.filter = isPassword ? 'drop-shadow(0 0 5px #00f2fe)' : 'none';
            
            // Efecto de escala
            togglePassword.style.transform = 'scale(1.1)';
            setTimeout(() => togglePassword.style.transform = 'scale(1)', 100);
        });
    }
});
