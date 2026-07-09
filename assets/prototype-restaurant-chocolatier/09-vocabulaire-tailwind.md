# 09 · Vocabulaire Tailwind CSS

Glossaire des classes utilitaires utilisées dans `index.html`, groupées par catégorie. Chaque classe Tailwind suit la même logique : **un préfixe = une propriété CSS**, la valeur qui suit choisit l'ampleur.

## Layout (disposition)

| Classe | Équivalent CSS | Usage dans le projet |
| --- | --- | --- |
| `flex` | `display: flex` | Header, boutons avec icône |
| `grid` | `display: grid` | Grilles de cards produit |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr))` | 2 colonnes (mobile) |
| `items-center` | `align-items: center` | Centrage vertical dans un flex/grid |
| `justify-between` | `justify-content: space-between` | Logo à gauche, nav à droite dans le header |
| `gap-4` | `gap: 1rem` | Espace entre éléments d'une grid/flex |

## Espacement (spacing)

| Classe | Équivalent CSS | Note |
| --- | --- | --- |
| `p-6` | `padding: 1.5rem` | `p` = tous les côtés |
| `px-5` | `padding-left/right: 1.25rem` | `x` = horizontal |
| `py-3` | `padding-top/bottom: 0.75rem` | `y` = vertical |
| `mb-4` | `margin-bottom: 1rem` | `m` = margin, même logique `x`/`y`/`t`/`b` |
| `space-y-6` | `margin-top: 1.5rem` sur chaque enfant sauf le premier | Espace entre sections empilées |

L'échelle numérique (`1`, `2`, `3`, `4`, `5`, `6`...) suit un multiple de `0.25rem` (4px) : `p-4` = 1rem = 16px.

## Dimensions (sizing)

| Classe | Équivalent CSS |
| --- | --- |
| `w-9` | `width: 2.25rem` |
| `h-9` | `height: 2.25rem` |
| `max-w-6xl` | `max-width: 72rem` |
| `aspect-video` | `aspect-ratio: 16 / 9` |
| `aspect-[4/3]` | `aspect-ratio: 4 / 3` (valeur arbitraire entre crochets) |

## Typographie

| Classe | Équivalent CSS |
| --- | --- |
| `text-sm` | `font-size: 0.875rem` |
| `text-4xl` | `font-size: 2.25rem` |
| `font-semibold` | `font-weight: 600` |
| `font-bold` | `font-weight: 700` |
| `leading-tight` | `line-height: 1.25` |
| `tracking-widest` | `letter-spacing: 0.1em` |
| `uppercase` | `text-transform: uppercase` |

`font-display` et `font-sans` sont des tokens **custom** définis dans `@theme` (voir [04 · Design system](04-design-system.md)), pas des classes Tailwind natives.

## Bordures et arrondis

| Classe | Équivalent CSS |
| --- | --- |
| `rounded-2xl` | `border-radius: 1rem` |
| `rounded-full` | `border-radius: 9999px` (cercle/pilule) |
| `border` | `border-width: 1px` |
| `border-ink/10` | Bordure couleur `ink` à 10% d'opacité |

## Couleurs et opacité

| Classe | Signification |
| --- | --- |
| `bg-rose` | `background-color` avec le token `rose` |
| `text-ink/60` | Couleur de texte `ink` à 60% d'opacité (slash = opacity modifier) |
| `hover:bg-cocoa` | `background-color: cocoa` uniquement au survol |

Les noms après `bg-`, `text-`, `border-` (`ink`, `rose`, `cocoa`...) ne sont pas fournis par Tailwind : ce sont les tokens définis dans `@theme` — détail complet dans [04 · Design system](04-design-system.md).

## Effets

| Classe | Équivalent CSS |
| --- | --- |
| `shadow-sm` | Ombre portée légère |
| `overflow-hidden` | `overflow: hidden` (utilisé pour rogner une image dans un coin arrondi) |
| `object-cover` | `object-fit: cover` (image qui remplit son conteneur sans se déformer) |
| `transition-colors` | Anime les changements de couleur (utilisé avec `hover:`) |

## Responsive et états (préfixes)

| Préfixe | Rôle |
| --- | --- |
| `md:` | Applique la classe à partir de 768px (voir [08 · Responsive](08-responsive-mobile-first.md)) |
| `hover:` | Applique la classe au survol souris |
| `md:hidden` | Combine un breakpoint et une propriété : caché à partir de 768px |

**Règle à retenir :** un préfixe se lit toujours de gauche à droite comme une condition — `md:hover:bg-cocoa` voudrait dire "à partir de 768px, au survol, fond cocoa".

---

<p align="center">
  <a href="08-responsive-mobile-first.md"><img src="https://img.shields.io/badge/-PR%C3%89C%C3%89DENT-6b7280?style=for-the-badge" alt="PRÉCÉDENT"></a>
</p>
