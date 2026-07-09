# 06 · Technologies utilisées

| Techno | Rôle |
| --- | --- |
| **HTML5** | Structure de la page |
| **Tailwind CSS v4 (CDN)** | Mise en forme, entièrement en classes utilitaires |
| **Google Fonts** | Poppins (titres) + Inter (texte courant) |

## Pourquoi Tailwind en CDN plutôt qu'en installation npm ?

Deux façons d'utiliser Tailwind :

| | CDN (`@tailwindcss/browser`) | npm + CLI |
| --- | --- | --- |
| Installation | Aucune, un seul `<script>` | Node.js, `package.json`, build |
| Configuration | En CSS, bloc `@theme` dans un `<style type="text/tailwindcss">` | En CSS aussi (même syntaxe `@theme`), dans un fichier `.css` dédié |
| Démarrage | Immédiat, ouvrir le HTML dans un navigateur | Nécessite une commande de build (`npx tailwindcss ...`) |
| Usage typique | Prototypage, apprentissage, petits projets statiques | Projets de production, avec bundler (Vite, Webpack...) |

Pour ce projet — première prise en main de Tailwind, site statique sans étape de build — le CDN a été choisi pour rester concentré sur les classes utilitaires elles-mêmes plutôt que sur la configuration d'outils. Bon point : depuis Tailwind v4, la configuration `@theme` est en CSS des deux côtés (CDN et npm) — passer de l'un à l'autre plus tard ne demanderait pas de tout réapprendre, juste de déplacer le bloc `@theme` dans un fichier `.css` et d'ajouter une étape de build.

**Limite du CDN à connaître :** contrairement au CLI, il n'y a pas de purge du CSS inutilisé ni d'optimisation pour la production — pour un site déployé publiquement, on migrerait vers l'installation npm.

**Remarque :** `cdn.tailwindcss.com` (le "Play CDN" historique) existe toujours mais tourne sur le moteur **Tailwind v3** et sa config JS (`tailwind.config = {...}`) — voir [04 · Design system](04-design-system.md) pour la différence avec l'approche v4 utilisée ici.

## Pas de framework de composants

Contrairement à [oceansideRestaurant](https://github.com/fannysaez/oceansideRestaurant) qui utilise **Bootstrap 5** (composants prêts à l'emploi : `.card`, `.btn`, `.navbar`, surchargés par des variables CSS `--bs-*`), Tailwind ne fournit aucun composant. Chaque "card" ou "bouton" de ce projet est assemblé à la main à partir de classes utilitaires (`rounded-2xl`, `shadow-sm`, `px-6 py-3`, etc.) — voir [05 · Sections de la page](05-sections-de-la-page.md) pour le détail.

---

<p align="center">
  <a href="05-sections-de-la-page.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="07-lancer-en-local.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
