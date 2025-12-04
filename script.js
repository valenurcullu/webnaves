// --- script.js ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Marcar enlace activo automáticamente
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // 2. Validación simple de formulario (ejemplo)
    const contactForm = document.querySelector('form');
    if(contactForm){
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado correctamente. Gracias por contactar a Naves Del Sur.');
            contactForm.reset();
        });
    }
});