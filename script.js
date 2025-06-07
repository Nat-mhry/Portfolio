// Sélectionne le menu burger et les liens de navigation
const navLinks = document.querySelector('.nav-links');

// Ajoute un écouteur d'événement pour le clic sur le menu burger
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

