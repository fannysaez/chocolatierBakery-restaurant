# 07 · Lancer le projet en local

Aucune installation n'est nécessaire : Tailwind est chargé depuis un CDN directement dans `index.html`.

## 1. Cloner le dépôt

```bash
git clone https://github.com/fannysaez/chocolatier-bakery-restaurant.git
cd chocolatier-bakery-restaurant
```

## 2. Ouvrir le fichier

Le plus simple : double-cliquer sur `index.html`, ou l'ouvrir depuis le navigateur (`Ctrl + O`).

## 3. (Optionnel) Servir via un serveur local

Pour un rendu plus proche d'un environnement de production (et éviter d'éventuels soucis de chemins relatifs si des assets sont ajoutés) :

```bash
# avec l'extension VS Code "Live Server"
# clic droit sur index.html > "Open with Live Server"

# ou avec Python
python -m http.server 5500
# puis ouvrir http://localhost:5500
```

Une connexion internet est requise au premier chargement (CDN Tailwind + Google Fonts).

---

<p align="center">
  <a href="06-technologies.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
  &nbsp;
  <a href="08-responsive-mobile-first.md"><img src="https://img.shields.io/badge/-SUIVANT-C18D52?style=for-the-badge" alt="SUIVANT"></a>
</p>
