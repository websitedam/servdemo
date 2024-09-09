function typeWriter(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = '';
    let i = 0;
    function write() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(write, speed);
        }
    }
    write();
}

document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.typewriter');
    const text = document.querySelector('.typewriter-text');
    
    typeWriter(title, 100);  // Escribe el título
    setTimeout(function() {
        typeWriter(text, 50);  // Escribe el párrafo después del título
    }, 3500);  // Espera a que termine el título antes de empezar el párrafo
});








