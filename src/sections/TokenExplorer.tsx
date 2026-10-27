import { useEffect, useState } from 'react';

// Ratio de contraste WCAG 2.x entre deux couleurs hexadécimales (#rrggbb)
function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

type Pair = { label: string; fg: string; bg: string; minimum: number };

const TOKEN_NAMES: Record<string, string> = {
  '--color-text': 'Texte',
  '--color-muted': 'Texte secondaire',
  '--color-primary': 'Primaire',
  '--color-on-primary': 'Texte sur primaire',
  '--color-focus': 'Focus',
};

function readToken(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function TokenExplorer() {
  const [pairs, setPairs] = useState<Pair[]>([]);

  useEffect(() => {
    // Lit les valeurs réelles du thème courant, pour que la page reste exacte en thème sombre
    const read = () => {
      const bg = readToken('--color-bg');
      const surface = readToken('--color-surface');
      const isHex = (v: string) => /^#[0-9a-f]{6}$/i.test(v);
      if (!isHex(bg) || !isHex(surface)) return;
      setPairs([
        { label: 'Texte sur fond', fg: readToken('--color-text'), bg, minimum: 4.5 },
        { label: 'Texte secondaire sur fond', fg: readToken('--color-muted'), bg, minimum: 4.5 },
        { label: 'Bouton : texte sur primaire', fg: readToken('--color-on-primary'), bg: readToken('--color-primary'), minimum: 4.5 },
        { label: 'Focus sur fond', fg: readToken('--color-focus'), bg, minimum: 3 },
      ]);
    };
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', read);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', read);
    };
  }, []);

  return (
    <section id="design-system" className="section" aria-labelledby="titre-ds">
      <div className="container">
        <p className="kicker">Design system</p>
        <h2 id="titre-ds">Design system : tokens et contrastes</h2>
        <p className="muted">
          Les couleurs ci-dessous sont lues directement dans les tokens CSS du thème actif. Le ratio est
          calculé selon la formule WCAG ; le seuil AA est de 4,5:1 pour le texte et 3:1 pour les
          éléments non textuels.
        </p>

        <div className="token-grid">
          {Object.entries(TOKEN_NAMES).map(([name, label]) => (
            <div key={name} className="card token">
              <span className="token__swatch" style={{ background: `var(${name})` }} aria-hidden="true" />
              <span>{label}</span>
              <code className="muted">{name}</code>
            </div>
          ))}
        </div>

        <ul className="contrast-list">
          {pairs.map((p) => {
            const ratio = contrastRatio(p.fg, p.bg);
            const pass = ratio >= p.minimum;
            return (
              <li key={p.label} className="card contrast">
                <span
                  className="contrast__sample"
                  style={{ color: p.fg, background: p.bg }}
                >
                  Aa
                </span>
                <span>{p.label}</span>
                <span className="contrast__ratio">
                  {ratio.toFixed(2)}:1 · {pass ? 'Conforme AA' : 'Non conforme'}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
