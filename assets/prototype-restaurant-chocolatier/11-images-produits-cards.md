# 11 · Images produits sur les cards (Most ordered & Full menu)

Jusqu'ici, le bloc "image" de chaque card produit (`bg-mist`) ne contenait qu'une pastille de couleur (`<span class="rounded-full">`), en attendant les vraies photos. Ce chapitre documente leur remplacement par des `<img>` locales, pour les deux sections concernées : **Most ordered** (3 cards) et **Full menu** (10 cards).

## Avant / après

```html
<!-- Avant -->
<div class="bg-mist p-6 flex items-center">
  <span class="block w-9 h-9 rounded-full bg-rose"></span>
</div>

<!-- Après -->
<div class="bg-mist">
  <img
    src="assets/img/order/photo-1.webp"
    alt="Midnight Ganache Tart"
    class="w-full h-32 object-cover"
  />
</div>
```

- `p-6 flex items-center` disparaît : ces classes ne servaient qu'à centrer la pastille, pas à mettre en page une photo.
- `w-full h-32 object-cover` (ou `h-24` pour les cards plus petites de "Full menu") fait remplir l'image sur toute la largeur du bloc, sans déformation.
- `overflow-hidden` sur `<article>` garantit que les coins arrondis du haut de la card restent propres, comme avant.

## La pastille n'a pas disparu — elle a changé de rôle

Plutôt que de supprimer la pastille de couleur (rose / gold / sage / cocoa), elle a été déplacée à côté du prix, en taille réduite, comme repère visuel de catégorie :

```html
<p class="font-semibold text-sm flex items-center justify-between">
  $12
  <span class="block w-4 h-4 rounded-full bg-rose"></span>
</p>
```

- `flex items-center justify-between` aligne le prix à gauche et la pastille à droite sur la même ligne.
- Taille réduite par rapport à l'original : `w-9 h-9` → `w-4 h-4` sur les 3 cards "Most ordered", `w-8 h-8` → `w-3 h-3` sur les 10 cards "Full menu" (cards plus petites, texte en `text-xs`).

## Les images

### Most ordered — `assets/img/order/`

```text
assets/img/order/
├── photo-1.webp   # Midnight Ganache Tart
├── photo-2.webp   # Vanilla Cloud Croissant
└── photo-3.webp   # Atelier Celebration Box
```

### Full menu — `assets/img/specialite/`

```text
assets/img/specialite/
├── image-1.webp    # Midnight Ganache Tart
├── image-2.webp    # Vanilla Cloud Croissant
├── image-3.webp    # Atelier Celebration Box
├── image-4.webp    # Raspberry Rose Eclair
├── image-5.webp    # Pistachio Opera Slice
├── image-6.webp    # Hazelnut Praline Crown
├── image-7.webp    # Lemon Silk Tartlet
├── image-8.webp    # Salted Caramel Brioche
├── image-9.webp    # Black Cocoa Truffle Set
└── image-10.webp   # Seasonal Fruit Mille-Feuille
```

Deux dossiers séparés car ce sont deux sections différentes de la page, avec leurs propres tailles de card (`h-32` vs `h-24`) et donc des exports photo différents — pas de mutualisation des fichiers entre les deux sections.

**Pour changer une photo :** remplace le fichier `.webp` correspondant dans le bon dossier (`order/` ou `specialite/`), le nom de fichier et le `src` dans `index.html` n'ont pas besoin de changer.

---

<p align="center">
  <a href="10-interactivite-javascript.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
</p>
