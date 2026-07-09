# 10 · Interactivité JavaScript (menu mobile & image hero aléatoire)

Le prototype initial était **100% statique** : le bouton burger n'était qu'une icône `☰` sans aucun comportement, et l'image du Hero était une URL fixe. Ce chapitre documente les deux interactions ajoutées dans `script.js`, chargé en bas de `index.html` :

```html
<script src="script.js" defer></script>
```

## Menu burger (mobile)

### Le problème

Le bouton `md:hidden` existait dans le header, mais :
- aucun `id`, aucun `addEventListener` nulle part,
- aucun panneau de navigation mobile dans le DOM — la seule `<nav>` du header est cachée sous `768px` (`hidden md:flex`).

Résultat : cliquer sur le bouton ne faisait rien.

### La solution

Un second `<nav id="mobile-menu">` (mêmes liens que la nav desktop) a été ajouté sous le header, caché par défaut :

```html
<button id="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden ...">
  &#9776;
</button>

<nav id="mobile-menu" class="hidden md:hidden flex-col items-center gap-4 ...">
  <a href="#menu">Menu</a>
  <a href="#story">Our Story</a>
  <a href="#order">Order</a>
  <a href="#contact">Contact</a>
</nav>
```

Et dans `script.js`, un simple toggle de classes au clic :

```js
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
```

- `classList.toggle("flex")` retourne `true`/`false` selon que la classe vient d'être ajoutée ou retirée → on s'en sert pour piloter `hidden` sur la même ligne.
- `aria-expanded` est mis à jour pour l'accessibilité (lecteurs d'écran).

## Image hero aléatoire

### Le besoin

Avoir une photo différente à **chaque rechargement de page**, avec une ombre portée et une apparition en fondu (pas un carrousel qui tourne tout seul).

### Les images

Les photos vivent en local dans `assets/img/hero/` (format `.webp`) :

```text
assets/img/hero/
├── photo-1.webp
├── photo-2.webp
└── photo-3.webp
```

### Le balisage

```html
<div class="aspect-video md:aspect-[4/3] bg-mist rounded-2xl">
  <img
    id="hero-image"
    src="https://picsum.photos/seed/chocolatier/800/600"
    alt="Chocolatier Bakery"
    class="w-full h-full object-cover rounded-2xl shadow-2xl opacity-0 transition-opacity duration-700"
  />
</div>
```

- `shadow-2xl` = l'ombre portée. Le conteneur parent n'a **pas** `overflow-hidden`, sinon il rognerait l'ombre de l'image (qui déborde de sa propre boîte).
- `opacity-0` + `transition-opacity duration-700` = point de départ invisible, avec une transition CSS déjà armée.
- Le `src` du HTML n'est qu'un **fallback** : le JS l'écrase immédiatement au chargement.

### Le script

```js
const heroImage = document.getElementById("hero-image");
const heroImages = [
  "assets/img/hero/photo-1.webp",
  "assets/img/hero/photo-2.webp",
  "assets/img/hero/photo-3.webp",
];
const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];

heroImage.addEventListener("load", () => {
  heroImage.classList.remove("opacity-0");
});

heroImage.src = randomImage;
```

1. Un index aléatoire choisit une image dans le tableau.
2. Le listener `load` est attaché **avant** de changer le `src` (sinon on risque de rater l'événement si l'image est déjà en cache).
3. Une fois l'image chargée, `opacity-0` est retiré → la transition Tailwind fait apparaître l'image en fondu.

**Pour ajouter une photo :** dépose un `.webp` dans `assets/img/hero/` et ajoute son chemin dans le tableau `heroImages`.

---

<p align="center">
  <a href="09-vocabulaire-tailwind.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="11-images-produits-cards.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
