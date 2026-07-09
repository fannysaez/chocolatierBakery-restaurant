# 02 · Aperçu de la maquette Figma

## Fichier Figma

Le fichier source (*Chocolatier Backery Restaurant Template*) contient trois pages :

- **Style Guide** — couleurs, boutons, cart toast, card menu type
- **Desktop** — la page d'accueil complète en version desktop
- **Mobile** — la page d'accueil complète en version mobile

## Captures utilisées comme référence

Exports desktop et mobile utilisés comme référence visuelle pixel-close, disponibles dans [`assets/maquette/`](../maquette).

<div align="center">
  <img src="../maquette/01-desktop.png" alt="Maquette Desktop" width="480" align="top">
  <img src="../maquette/02-mobile.png" alt="Maquette Mobile" width="180" align="top">
  <br>
  <sub><b>Desktop</b> · <b>Mobile</b></sub>
</div>

## Méthode de vérification

À chaque section codée, le rendu du navigateur est comparé visuellement à la capture correspondante, en particulier :

1. **Structure des cards** — chaque card produit a deux zones : un bloc "image" (fond clair `mist`) contenant la pastille de couleur, puis une zone blanche avec titre / description / prix. C'est un piège facile à manquer si on ne regarde que la couleur et pas la structure.
2. **Différences mobile ↔ desktop qui ne sont pas que de la mise en page** — certains textes changent carrément de contenu selon la taille d'écran (ex. le libellé au-dessus du titre du Hero, le titre de la section "Most ordered"), et le composant panier n'est pas le même sur les deux tailles (card claire sur desktop, toast sombre sur mobile).
3. **Couleurs et espacements** — comparés aux tokens du Style Guide (voir [04 · Design system](04-design-system.md)), pas "à l'oeil".

---

<p align="center">
  <a href="01-presentation.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="03-structure-projet.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
