// Efecto de cambio de color en el header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0,0,0,0.8)';
    }
});

// Mensaje de confirmación del formulario
const form = document.getElementById('art-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por contactar con Urban Canvas! Nos pondremos en contacto pronto para crear algo increíble.');
    form.reset();
});

// Animación simple al hacer clic en las tarjetas de arte
const cards = document.querySelectorAll('.art-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        console.log(`Interés en la obra: ${name}`);
    });
});