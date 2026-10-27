// Contenu du portfolio. Les champs marqués TODO sont à compléter par Salma.
// Les faits viennent du CV ; rien n'est inventé.

export const profile = {
  name: 'Salma Ben Khalifa',
  title: 'Développeuse Front-End React · Design Systems · IA',
  experience: '7 ans d’expérience',
  stack: ['React', 'TypeScript', 'Vue.js', 'WeWeb', 'Figma'],
  promise:
    'Je conçois des interfaces et des design systems réutilisables, accessibles (WCAG 2.2 AA) et rapides.',
  email: 'salma.bk.work@gmail.com',
  github: 'https://github.com/salma-bk',
  linkedin: 'https://linkedin.com/in/salmabk-consultante-web',
};

// Chiffres issus du CV (résultats mesurés en mission)
export const proofs = [
  { value: 'LCP < 2,5 s', label: 'Pages clés, Make Up For Ever' },
  { value: '−35 à −50 %', label: 'JavaScript initial, Make Up For Ever' },
  { value: 'CLS < 0,1', label: 'Stabilité visuelle des pages clés' },
  { value: '+35 %', label: 'Trafic organique, Les Publications Agora' },
];

export type CaseStudy = {
  id: string;
  client: string;
  role: string;
  period: string;
  context: string;
  hypothesis: string; // TODO : formuler avec Salma
  decisions: string[]; // TODO : décisions et compromis
  results: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'cagip',
    client: 'Crédit Agricole (CAGIP)',
    role: 'Développeuse Front-End / Design System',
    period: 'Sept. 2025 – Mai 2026',
    context:
      'Standardiser les interfaces internes de la Factory à partir de maquettes Figma.',
    hypothesis: 'TODO : quel problème de cohérence et de maintenance cherchiez-vous à résoudre ?',
    decisions: [
      'TODO : pourquoi des composants WeWeb / Vue.js ? Quels compromis ?',
      'Design Tokens (couleurs, typo, espacements) pour garantir la cohérence',
    ],
    results: ['Un design system adopté par la Factory', 'Composants cohérents et plus faciles à maintenir'],
    stack: ['Vue.js', 'WeWeb', 'Figma', 'Design Tokens'],
  },
  {
    id: 'mufe',
    client: 'Make Up For Ever (groupe LVMH)',
    role: 'Développeuse Front-End / Design System',
    period: 'Juil. 2025 – Sept. 2025',
    context: 'Refonte e-commerce et industrialisation du design system sur Salesforce Commerce Cloud.',
    hypothesis: 'TODO : quelle hypothèse de performance et d’accessibilité avez-vous testée ?',
    decisions: [
      'Architecture SCSS modulaire (BEM / ITCSS, variables, mixins)',
      'WCAG 2.2 AA : navigation clavier, focus, contrastes, ARIA',
    ],
    results: [
      'LCP < 2,5 s et CLS < 0,1 sur les pages clés',
      'JavaScript initial réduit de 35 à 50 %',
    ],
    stack: ['SCSS', 'BEM / ITCSS', 'Salesforce Commerce Cloud'],
  },
  {
    id: 'acteurs-publics',
    client: 'Acteurs Publics',
    role: 'Responsable Web / Développeuse Front-End',
    period: 'Févr. 2022 – Juil. 2024',
    context: 'Refonte de sites et plateformes en React, avec WordPress comme CMS.',
    hypothesis: 'TODO : quel était le point de départ (audit d’accessibilité, performance) ?',
    decisions: ['TODO : choix d’architecture et de découpage des composants React'],
    results: ['CLS réduit de 35 %', 'Score Lighthouse moyen amélioré de 20 points'],
    stack: ['React', 'WordPress', 'API REST'],
  },
];

export type Experience = {
  id: string;
  client: string;
  role: string;
  period: string;
  context: string;
  stack: string[];
};

// Parcours complet, du plus récent au plus ancien (certaines missions ont aussi une étude de cas détaillée ci-dessus)
export const experiences: Experience[] = [
  {
    id: 'cagip',
    client: 'Crédit Agricole (CAGIP)',
    role: 'Développeuse Front-End / Design System',
    period: 'Sept. 2025 – Mai 2026',
    context:
      "Développement d'applications internes et construction du Design System CAGIP : composants réutilisables depuis Figma, variants et états UI, Design Tokens.",
    stack: ['Vue.js', 'WeWeb', 'Figma', 'Design Tokens'],
  },
  {
    id: 'mufe',
    client: 'Make Up For Ever (groupe LVMH)',
    role: 'Développeuse Front-End / Design System',
    period: 'Juil. 2025 – Sept. 2025',
    context:
      'Refonte e-commerce et industrialisation du Design System sur Salesforce Commerce Cloud : bibliothèque de composants, architecture SCSS modulaire (BEM/ITCSS), conformité WCAG 2.2 AA.',
    stack: ['SCSS', 'BEM / ITCSS', 'Salesforce Commerce Cloud'],
  },
  {
    id: 'edilead',
    client: 'Edilead',
    role: 'Responsable Studio Dév Front-End',
    period: 'Janv. 2025 – Juil. 2025',
    context:
      "Développement des interfaces digitales d'une agence spécialisée dans la génération de leads pour grands comptes (EDF, Albéa…) : site vitrine et landing pages React, Design System partagé, composants de formulaires réutilisables.",
    stack: ['React', 'Design System', 'Figma'],
  },
  {
    id: 'acteurs-publics',
    client: 'Acteurs Publics',
    role: 'Responsable Web / Développeuse Front-End',
    period: 'Févr. 2022 – Juil. 2024',
    context:
      "Refonte de sites et plateformes en React avec WordPress comme CMS : composants réutilisables, intégration API REST, Component-Driven Design, audit et corrections d'accessibilité WCAG.",
    stack: ['React', 'WordPress', 'API REST'],
  },
  {
    id: 'agora',
    client: 'Les Publications Agora',
    role: 'Développeuse Front-End',
    period: 'Mai 2019 – Févr. 2022',
    context:
      "Refonte complète de la plateforme digitale pour améliorer l'expérience utilisateur, les performances et le référencement naturel, avec des landing pages en Vue.js et un Design System partagé.",
    stack: ['Vue.js', 'HTML5 / CSS3', 'JavaScript', 'SEO'],
  },
  {
    id: 'hcdc',
    client: 'Le Haut Comité de la Défense Civile',
    role: 'Webmaster & UI Designer',
    period: 'Févr. 2018 – Avr. 2019',
    context:
      "Modernisation de la plateforme digitale de formation et de son identité visuelle : landing pages HTML5/CSS3/JavaScript, templates UI réutilisables, refonte de la charte graphique et de l'emailing responsive.",
    stack: ['HTML5 / CSS3', 'JavaScript', 'UI Design'],
  },
];

export type SideProject = {
  id: string;
  title: string;
  type: string;
  context: string;
  stack: string[];
  url: string;
  image: string;
};

export const sideProjects: SideProject[] = [
  {
    id: 'ux-republic',
    title: 'UX-Republic',
    type: 'Landing page événementielle',
    context:
      'Landing page événementielle en Vue.js, avec des composants réutilisables et une interface responsive et accessible.',
    stack: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Git'],
    url: 'https://thefutureistherepublic.fr/',
    image: '/projects/ux-republic.jpg',
  },
  {
    id: 'autoloc',
    title: 'Autoloc Sélection',
    type: 'Application automobile',
    context:
      "Catalogue automobile en React : recherche, filtres et tri, fiches véhicules détaillées, galerie d'images et panier.",
    stack: ['React', 'React Router', 'API REST', 'Shopify', 'Tailwind CSS', 'Git'],
    url: 'https://autolocselection.netlify.app/',
    image: '/projects/autoloc.jpg',
  },
  {
    id: 'react-coach-ai',
    title: 'React Coach AI',
    type: "Plateforme d'apprentissage & agent IA",
    context:
      "Plateforme d'apprentissage React assistée par IA : génération dynamique d'exercices selon le concept, le niveau et la difficulté, agent IA pour la correction et l'accompagnement.",
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Zod'],
    url: 'https://react-learning-web-staging.vercel.app/',
    image: '/projects/react-coach-ai.jpg',
  },
  {
    id: 'propheties-ux',
    title: 'Prophéties UX',
    type: 'Landing page interactive',
    context:
      "Landing page interactive : une roue tire une prophétie au hasard sur l'avenir du design et de l'IA et déclenche une animation de révélation.",
    stack: ['React', 'Vite', 'CSS', 'Git'],
    url: 'https://prophetie-landing-page.netlify.app/',
    image: '/projects/propheties-ux.jpg',
  },
];

export type Formation = { degree: string; institute: string; year: string };

export const formations: Formation[] = [
  { degree: 'Master Ingénierie des Médias', institute: 'Ingemedia', year: '2018' },
  { degree: 'Licence Information & Communication', institute: 'Ingemedia', year: '2015' },
  { degree: 'Développeuse JavaScript React', institute: 'Greta Suresnes', year: '2025' },
  { degree: 'React — The Complete Guide & Next.js', institute: 'Udemy', year: '2026' },
];

export const certifications: string[] = [
  'Web Accessibility',
  'Claude Academy (Anthropic)',
  'Claude : maîtriser Cowork, Claude Code, Skills et Plugins',
];

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

// Questions basées uniquement sur les faits déjà présents sur la page (Hero, Parcours, Études de cas)
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'experience',
    question: "Combien d'années d'expérience a Salma ?",
    options: ['3 ans', '5 ans', '7 ans', '10 ans'],
    correctIndex: 2,
  },
  {
    id: 'mufe-group',
    question: 'Make Up For Ever, où Salma a travaillé sur le Design System, appartient à quel groupe ?',
    options: ['LVMH', "L'Oréal", 'Kering', 'Estée Lauder'],
    correctIndex: 0,
  },
  {
    id: 'mufe-js',
    question: "Chez Make Up For Ever, de combien le JavaScript initial a-t-il été réduit ?",
    options: ['10 à 20 %', '35 à 50 %', '60 à 70 %', 'Il a augmenté'],
    correctIndex: 1,
  },
  {
    id: 'a11y-level',
    question: "Quel niveau de conformité accessibilité Salma vise-t-elle ?",
    options: ['WCAG 2.2 A', 'WCAG 2.2 AA', 'WCAG 2.2 AAA', 'Aucun standard précis'],
    correctIndex: 1,
  },
  {
    id: 'cagip-client',
    question: 'Le Design System CAGIP, sur lequel Salma travaille actuellement, est une mission pour quel groupe ?',
    options: ['BNP Paribas', 'Société Générale', 'Crédit Agricole', 'La Banque Postale'],
    correctIndex: 2,
  },
  {
    id: 'stack',
    question: "Laquelle de ces technologies n'apparaît PAS dans la stack principale de Salma ?",
    options: ['React', 'TypeScript', 'Angular', 'Vue.js'],
    correctIndex: 2,
  },
];
