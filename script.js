//Menu burger et sa fonctionnalité d'ouverture et de fermeture du menu de navigation en version mobile
const menuToggle = document.getElementById("menu-toggle"); // Bouton du menu de navigation en version mobile (burger menu)
const mobileMenu = document.getElementById("mobile-menu"); // Menu de navigation mobile qui s'ouvre et se ferme avec le burger menu

menuToggle.addEventListener("click", () => { // Ajoute un événement au clic sur le bouton
  const isOpen = mobileMenu.classList.toggle("flex"); // Affiche ou retire la classe "flex" et récupère l'état ouvert
  mobileMenu.classList.toggle("hidden", !isOpen); // Affiche ou masque le menu selon son état
  menuToggle.setAttribute("aria-expanded", String(isOpen)); // Met à jour l'attribut d'accessibilité
});



// Fonctionnalité de changement d'image aléatoire pour l'image principale
const heroImage = document.getElementById("hero-image"); // Récupère l'image principale
const heroImages = [
  "assets/img/hero/photo-1.webp",
  "assets/img/hero/photo-2.webp",
  "assets/img/hero/photo-3.webp",
]; // Liste des images locales disponibles
const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)]; // Sélectionne une image au hasard

heroImage.addEventListener("load", () => {// Ajoute un événement lorsque l'image est chargée
  heroImage.classList.remove("opacity-0"); // Fait apparaître l'image en fondu une fois chargée
});

heroImage.src = randomImage; // Charge l'image aléatoire
