import { useEffect, useState } from 'react';
import type { Metric } from 'web-vitals';

type Vital = { name: 'LCP' | 'CLS' | 'INP'; value: number | null; rating: string | null };

type A11yResult = { violations: number; passes: number; incomplete: number } | null;

// Seuils officiels Core Web Vitals (Google)
const THRESHOLDS = {
  LCP: { good: 2500, unit: 'ms', label: 'Chargement (LCP)' },
  CLS: { good: 0.1, unit: '', label: 'Stabilité (CLS)' },
  INP: { good: 200, unit: 'ms', label: 'Réactivité (INP)' },
} as const;

const INITIAL: Vital[] = [
  { name: 'LCP', value: null, rating: null },
  { name: 'CLS', value: null, rating: null },
  { name: 'INP', value: null, rating: null },
];

// Partagé entre montages (utile en StrictMode, où l'effet s'exécute deux fois) :
// axe-core refuse un deuxième scan tant que le premier n'est pas terminé.
let axeRun: ReturnType<typeof runAxe> | null = null;
function runAxe() {
  return import('axe-core').then(({ default: axe }) =>
    axe.run(document, { resultTypes: ['violations', 'passes', 'incomplete'] }),
  );
}

export function QualityLive() {
  const [vitals, setVitals] = useState<Vital[]>(INITIAL);
  const [a11y, setA11y] = useState<A11yResult>(null);

  useEffect(() => {
    let active = true;
    // Import dynamique : le reste de la page ne dépend pas de web-vitals
    import('web-vitals').then(({ onLCP, onCLS, onINP }) => {
      const update = (metric: Metric) => {
        if (!active) return;
        setVitals((prev) =>
          prev.map((v) =>
            v.name === metric.name ? { ...v, value: metric.value, rating: metric.rating } : v,
          ),
        );
      };
      onLCP(update);
      onCLS(update);
      onINP(update);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    axeRun ??= runAxe();
    axeRun.then((results) => {
      if (!active) return;
      setA11y({
        violations: results.violations.length,
        passes: results.passes.length,
        incomplete: results.incomplete.length,
      });
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="qualite" className="section" aria-labelledby="titre-qualite">
      <div className="container">
        <p className="kicker">Performance en direct</p>
        <h2 id="titre-qualite">Qualité, mesurée en direct</h2>
        <p className="muted">
          Ces valeurs sont calculées sur votre navigateur pendant votre visite. Interagissez avec la
          page pour voir l’INP évoluer.
        </p>

        <ul className="vitals">
          {vitals.map((v) => {
            const t = THRESHOLDS[v.name];
            const display =
              v.value === null
                ? '—'
                : v.name === 'CLS'
                  ? v.value.toFixed(3)
                  : `${Math.round(v.value)} ${t.unit}`;
            const isGood = v.value !== null && v.value <= t.good;
            const status = v.value === null ? 'En attente' : isGood ? 'Bon' : 'À améliorer';
            const dataStatus = v.value === null ? undefined : isGood ? 'good' : 'needs';
            return (
              <li key={v.name} className="card vital" data-status={dataStatus}>
                <span className="muted">{t.label}</span>
                <span className="vital__value" aria-live="polite">
                  {display}
                </span>
                <span className="vital__status">{status}</span>
              </li>
            );
          })}
        </ul>

        <div className="card ci-block" data-status={a11y ? (a11y.violations === 0 ? 'good' : 'needs') : undefined}>
          <h3>Accessibilité, vérifiée en direct (axe-core)</h3>
          {a11y ? (
            <>
              <p>
                <span className="vital__value" aria-live="polite">
                  {a11y.violations}
                </span>{' '}
                violation{a11y.violations > 1 ? 's' : ''} détectée{a11y.violations > 1 ? 's' : ''}
              </p>
              <p className="muted">
                {a11y.passes} règles vérifiées avec succès
                {a11y.incomplete > 0
                  ? ` · ${a11y.incomplete} à contrôler manuellement (ex. contraste sur fonds en dégradé)`
                  : ''}
                .
              </p>
            </>
          ) : (
            <p className="muted">Scan en cours…</p>
          )}
          <p className="muted">
            Scan axe-core exécuté dans votre navigateur, sur cette page, à l’instant.
          </p>
        </div>
      </div>
    </section>
  );
}
