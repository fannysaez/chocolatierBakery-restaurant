# 08 · Approche responsive / mobile first

## Le principe

Tailwind applique une classe **sans préfixe à toutes les tailles d'écran**. Un préfixe comme `md:` **écrase** cette classe à partir d'un certain seuil (768px par défaut pour `md`). Il n'y a jamais besoin d'écrire une media query séparée : tout se lit dans l'ordre, directement dans le `class`.

| Préfixe | Largeur mini |
| --- | --- |
| *(aucun)* | 0px (mobile) |
| `md:` | 768px |
| `lg:` | 1024px |

Ce projet n'utilise que `md:` — un seul point de bascule mobile/desktop, car la maquette Figma ne fournit que ces deux versions.

## Exemple concret : la grille "Ten ways"

```html
<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
```

- En dessous de 768px : `grid-cols-2` s'applique → 2 colonnes.
- À partir de 768px : `md:grid-cols-5` prend le relais → 5 colonnes (2 lignes de 5 cards).

## Au-delà de la mise en page : le contenu qui change

La particularité de cette maquette, c'est que le responsive ne se limite pas à réorganiser les mêmes éléments — **certains textes et certains composants sont carrément différents** entre mobile et desktop (voir [05 · Sections de la page](05-sections-de-la-page.md)) :

- le libellé au-dessus du titre du Hero,
- le titre de la section "Most ordered",
- le composant panier entier (card claire vs toast sombre).

Technique utilisée : afficher deux blocs distincts et cacher l'un ou l'autre selon la taille d'écran, avec `hidden` / `md:hidden` / `hidden md:block` — plutôt que d'essayer de faire porter les deux versions par un seul élément.

```html
<p class="md:hidden">Small-batch pastries</p>
<p class="hidden md:block">Small-batch pastries and chocolate</p>
```

**Limite à garder en tête :** les deux versions sont présentes dans le DOM en permanence (une des deux est juste masquée en CSS avec `display: none`), ce n'est pas un vrai changement de contenu côté serveur. Pour ce projet statique sans backend, c'est la solution la plus simple.

---

<p align="center">
  <a href="07-lancer-en-local.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
</p>