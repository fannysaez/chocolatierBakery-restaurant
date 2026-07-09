# 04 · Design system / tokens Tailwind

## Palette de couleurs

Extraite du Style Guide Figma, déclarée dans un bloc `@theme` (`index.html`, balise `<style type="text/tailwindcss">` en tête de fichier) :

| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#1b0f16` | Texte principal, boutons primaires, fond du toast panier mobile |
| `cocoa` | `#2c1524` | État `hover` des boutons sombres |
| `rose` | `#a63c52` | Accents (labels, pastille produit) |
| `sage` | `#7c9070` | Pastille produit (variante) |
| `gold` | `#c9974c` | Pastille produit (variante) |
| `cream` | `#f8e9d2` | Fond des cards Header / Hero |
| `mist` | `#e9efe9` | Fond des blocs "image" des cards produit, placeholder vidéo |
| `page` | `#fdf8f0` | Fond général de la page (plus clair que `cream`) |

Trois tons de fond se superposent sur la page : `page` (fond général) → `cream` (cards Header/Hero) → `white` (cards produit/panier). C'est ce qui donne la profondeur visuelle de la maquette — un fond plat unique ne suffit pas.

## Comment Tailwind sait générer `bg-rose`, `text-ink`

Tailwind ne connaît pas ces noms par défaut. Depuis **Tailwind v4**, la configuration se fait en CSS, avec un bloc `@theme` — ce sont de vraies variables CSS custom properties (visibles dans les devtools sur `:root`), mais avec un préfixe (`--color-*`, `--font-*`...) que Tailwind reconnaît pour générer automatiquement les classes utilitaires correspondantes :

```html
<style type="text/tailwindcss">
  @theme {
    --color-ink: #1b0f16;
    --color-rose: #a63c52;
    /* ... */
  }
</style>
```

`--color-ink` génère `bg-ink`, `text-ink`, `border-ink`, etc. C'est différent des versions précédentes de Tailwind (v3 et avant), où cette configuration se faisait en JavaScript via un objet `tailwind.config = { theme: { extend: { colors: {...} } } }` — une approche qu'on peut encore croiser dans des tutoriels ou projets plus anciens, mais qui n'est plus la méthode actuelle.

`extend` **ajoute** ces couleurs à la palette par défaut de Tailwind (qui reste disponible : `bg-white`, `text-gray-500`, etc.) plutôt que de la remplacer.

## Typographie

- **`font-display`** (Poppins, bold/extra-bold) → titres (`h1`, `h2`)
- **`font-sans`** (Inter) → texte courant, police par défaut du `<body>`

Chargées via Google Fonts (`<link>` en tête de fichier), pas de fichier de police local.

## Composants du Style Guide

Le Style Guide Figma définit aussi des styles pour : boutons (primaire / secondaire), toast panier, card menu. Voir le détail de leur implémentation Tailwind dans [05 · Sections de la page](05-sections-de-la-page.md).

---

<p align="center">
  <a href="03-structure-projet.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="05-sections-de-la-page.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
