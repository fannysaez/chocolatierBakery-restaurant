# 01 · Présentation du projet

## Contexte

Projet réalisé dans le cadre de la formation **CDA (Simplon)**. L'objectif est de reproduire, en **HTML5 + Tailwind CSS**, une maquette Figma fournie pour le brief : *Chocolatier Bakery Restaurant*, un site vitrine de commande de pâtisseries à emporter.

C'est la première utilisation de **Tailwind CSS** sur un projet de la formation (les projets précédents, comme [oceansideRestaurant](https://github.com/fannysaez/oceansideRestaurant), utilisaient Bootstrap 5 + CSS custom).

## Objectif

Reproduire fidèlement la maquette fournie (desktop **et** mobile) en respectant :
- la palette de couleurs et la typographie du style guide,
- la mise en page de chaque section,
- une approche **mobile first**, sans framework de composants — uniquement des classes utilitaires Tailwind,
- **aucun JavaScript** pour cette itération : le site est statique (pas d'ajout au panier fonctionnel, pas de menu mobile interactif).

## Sections du site à reproduire

| Section | Contenu |
| --- | --- |
| **Header** | Logo (monogramme "CB"), navigation (Menu, Our Story, Order, Contact), bouton menu mobile |
| **Hero** | Accroche, titre, description, bouton "Order now", visuel vidéo (placeholder) |
| **Most ordered** | Les 3 pâtisseries les plus commandées, en cards |
| **Full menu** | Grille de 10 pâtisseries ("Ten ways to make the table feel special") |
| **Cart** | Résumé du panier — en card sur desktop, en toast sur mobile (ce sont deux composants différents, pas juste une même barre qui se redimensionne) |

Le détail de chaque section (classes Tailwind utilisées, différences mobile/desktop) est expliqué dans [05 · Sections de la page](05-sections-de-la-page.md).

---

<p align="center">
  <a href="02-maquette-figma.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
