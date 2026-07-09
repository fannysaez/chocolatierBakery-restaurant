# 04 · Design system / tokens Tailwind

## Palette de couleurs

Extraite du Style Guide Figma, déclarée dans un bloc `@theme` (`index.html`, balise `<style type="text/tailwindcss">` en tête de fichier) :

| Token | Hex | Usage |
| --- | --- | --- |
| `ink` | `#2b1810` | Texte principal, boutons primaires, fond du toast panier mobile |
| `cocoa` | `#4a2c1d` | État `hover` des boutons sombres |
| `rose` | `#8c3a2b` | Accents (labels, pastille produit) |
| `sage` | `#a67c52` | Pastille produit (variante) |
| `gold` | `#c9974c` | Pastille produit (variante) |
| `cream` | `#f5e6d3` | Fond des cards Header / Hero |
| `mist` | `#ede1d1` | Fond des blocs "image" des cards produit |
| `page` | `#fdf8f0` | Fond général de la page (plus clair que `cream`) |

> Palette mise à jour pour un rendu plus "chocolatier" (bruns torréfiés, caramel, terracotta) — les noms de tokens n'ont pas changé, seules les valeurs hex ont été remplacées dans le bloc `@theme`. Voir le mécanisme en détail dans [09 · Vocabulaire Tailwind CSS](09-vocabulaire-tailwind.md).

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
