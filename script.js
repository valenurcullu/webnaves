// --- script.js ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOGICA MENU MÓVIL (Nueva Navbar)
    const menuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.getElementById('navLinks');

    if(menuBtn && navLinksContainer) {
        menuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
        });
        
        // Cerrar menú al hacer clic en un link
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('nav-active');
            });
        });
    }

    // 2. MARCAR ENLACE ACTIVO AUTOMÁTICAMENTE
    // Nota: Busca links dentro de .custom-nav-links en lugar de .navbar-nav
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.custom-nav-links a');
    
    menuItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add("active-link");
        }
    });

    // 3. VALIDACIÓN SIMPLE DE FORMULARIO
    const contactForm = document.querySelector('form');
    if(contactForm){
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado correctamente. Gracias por contactar a Naves Del Sur.');
            contactForm.reset();
        });
    }
});