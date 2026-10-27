# Portfolio — Salma Ben Khalifa (2026)

Squelette du portfolio : React + TypeScript + Vite, mobile-first, accessible.

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

- `src/styles/tokens.css` : design tokens (couleurs, espacements, typo), thème clair/sombre
- `src/data/content.ts` : contenu (profil, métriques, études de cas), à compléter
- `src/sections/QualityLive.tsx` : Core Web Vitals mesurés en direct sur la page
- `src/sections/TokenExplorer.tsx` : tokens affichés avec ratio de contraste WCAG calculé
- `src/sections/CaseStudies.tsx` : études de cas au format produit (problème → décisions → métriques)

## À faire

- Remplacer les champs marqués `TODO` dans `content.ts`
- Ajouter Lighthouse CI et axe-core en CI pour les scores affichés
- Ajouter les captures/visuels des projets
