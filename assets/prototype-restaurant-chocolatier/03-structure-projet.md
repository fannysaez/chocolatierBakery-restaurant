# 03 · Structure du projet

```text
chocolatier-bakery-restaurant/
├── assets/
│   ├── maquette/                          # Exports de la maquette Figma (référence visuelle)
│   │   ├── 01-desktop.png
│   │   └── 02-mobile.png
│   └── prototype-restaurant-chocolatier/  # Documentation paginée du projet (ce dossier)
│       ├── 01-presentation.md
│       ├── 02-maquette-figma.md
│       ├── 03-structure-projet.md
│       ├── 04-design-system.md
│       ├── 05-sections-de-la-page.md
│       ├── 06-technologies.md
│       ├── 07-lancer-en-local.md
│       └── 08-responsive-mobile-first.md
├── index.html                             # Page unique (Header, Hero, Most ordered, Full menu, Cart)
└── README.md
```

## Pourquoi un seul fichier `index.html` ?

Contrairement au projet [oceansideRestaurant](https://github.com/fannysaez/oceansideRestaurant) (Bootstrap + fichiers CSS séparés `globals.css` / `utilities.css`), ici il n'y a **pas de fichier CSS séparé** : avec Tailwind en CDN, toutes les classes utilitaires sont générées directement à partir du HTML (voir [06 · Technologies](06-technologies.md)). La seule "configuration" vit dans une balise `<script>` en tête de fichier (`tailwind.config`), qui étend Tailwind avec la palette de couleurs et les polices du projet.

Il n'y a pas non plus de dossier `styles/` ni de fichier JavaScript : le brief demande une reproduction statique de la maquette pour cette itération.

---

<p align="center">
  <a href="02-maquette-figma.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="04-design-system.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
