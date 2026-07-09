# 05 · Sections de la page

Détail de chaque section de `index.html` : structure, classes Tailwind clés, et différences mobile/desktop.

## Header

```html
<header class="bg-cream border border-ink/10 rounded-2xl flex items-center justify-between px-5 py-3">
```

- `flex items-center justify-between` : logo à gauche, nav/bouton à droite, alignés verticalement au centre.
- Le logo est un cercle `bg-ink` de 28px (`w-7 h-7`) contenant les initiales "CB" en texte blanc — pas juste une pastille de couleur vide.
- La navigation (`Menu`, `Our Story`, `Order`, `Contact`) est cachée sur mobile (`hidden md:flex`) et remplacée par un bouton hamburger (`md:hidden`), car la maquette mobile n'affiche pas de navigation texte.

## Hero

```html
<section class="bg-cream border border-ink/10 rounded-3xl p-6 md:p-12">
  <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
```

- `grid md:grid-cols-2` : une seule colonne empilée sur mobile (texte puis image), deux colonnes côte à côte à partir de `md`.
- **Le libellé au-dessus du titre change de texte selon l'écran**, pas seulement de taille : `"Small-batch pastries"` en mobile vs `"Small-batch pastries and chocolate"` en desktop. Implémenté avec deux éléments distincts (`md:hidden` / `hidden md:block`), pas une seule classe responsive — Tailwind ne peut pas changer le *contenu* d'un texte avec une classe, seulement son style.
- Le placeholder vidéo est un simple `div` avec `aspect-video md:aspect-[4/3] bg-mist` — le vrai `<video>` remplacera ce bloc plus tard.

## Most ordered

```html
<h2 class="md:hidden ...">Most ordered</h2>
<div class="hidden md:block ...">
  <p>Most ordered</p>
  <h2>The three guests ask for first</h2>
</div>
```

Là encore, mobile et desktop **n'affichent pas le même texte** : le mobile simplifie directement en "Most ordered" comme titre, le desktop garde le libellé + le titre complet "The three guests ask for first".

### Structure d'une card produit

```html
<article class="bg-white rounded-2xl shadow-sm overflow-hidden">
  <div class="bg-mist p-6 flex items-center">
    <span class="block w-9 h-9 rounded-full bg-rose"></span>
  </div>
  <div class="p-4">
    <h3>...</h3>
    <p>...</p>
    <p>$12</p>
  </div>
</article>
```

Point important repéré en comparant à la maquette : la pastille de couleur n'est **pas** posée directement sur le fond blanc de la card. Elle est dans un bloc "image placeholder" séparé (`bg-mist`), qui deviendra une vraie photo produit plus tard. `overflow-hidden` sur la card garantit que les coins arrondis du bloc `mist` du haut restent propres.

## Full menu ("Ten ways...")

Même structure de card que "Most ordered", en grille `grid-cols-2 md:grid-cols-5` (2 colonnes mobile, 5 colonnes desktop → 2 lignes de 5 sur desktop). Les 10 cards partagent la même description placeholder ("Menu card with image, description, quantity, and add-to-cart control.") — c'est comme ça sur la maquette source, les vraies descriptions arriveront avec le contenu final.

## Cart — deux composants différents, pas un seul qui se redimensionne

C'est la différence la plus facile à manquer : sur desktop, le panier est une **card claire** intégrée à la page (résumé + bouton "Checkout"). Sur mobile, c'est un **toast sombre en pilule** ("Added to your cart! See cart here"), qui reprend le style du composant "Cart Toast" du Style Guide. Deux `<section>` distinctes, chacune avec `hidden`/`md:hidden` sur la bonne classe :

```html
<section class="hidden md:block">  <!-- card desktop -->
<section class="md:hidden">        <!-- toast mobile -->
```

Une seule barre `fixed` qui se redimensionne n'aurait pas pu reproduire ça — c'est pour ça qu'il y a deux blocs HTML séparés plutôt qu'un seul avec des classes responsive sur les mêmes éléments.

---

<p align="center">
  <a href="04-design-system.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="06-technologies.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
