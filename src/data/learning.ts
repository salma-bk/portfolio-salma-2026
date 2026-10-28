// Parcours d'apprentissage. Statuts : 'en-cours' | 'prevu'.
// Textes à relire : les raisons sont rédigées à partir du parcours annoncé.

export type StepStatus = 'en-cours' | 'prevu';

export type LearningStep = {
  id: string;
  title: string;
  status: StepStatus;
  why: string; // pourquoi je me forme dessus
  now: string; // où j'en suis concrètement
};

export const learningSteps: LearningStep[] = [
  {
    id: 'nextjs',
    title: 'Next.js',
    status: 'prevu',
    why: 'Rendu serveur et SEO, pour livrer des applications full-stack prêtes pour la production.',
    now: 'Pas encore commencé : prochaine étape après Node.js.',
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    status: 'en-cours',
    why: 'Concevoir l’API qui alimente l’interface, et non plus seulement la consommer.',
    now: 'En cours avec l’API de ma plateforme React Learning (Express, validation des données).',
  },
  {
    id: 'python',
    title: 'Python',
    status: 'prevu',
    why: 'Automatisation, traitement de données et briques IA côté serveur.',
    now: 'Prévu, après les bases de Node.js et de Next.js.',
  },
  {
    id: 'claude-ia',
    title: 'Claude & IA',
    status: 'en-cours',
    why: 'Intégrer des agents IA dans des produits web : prompts, outils, Skills et plugins avec Claude Code.',
    now: 'En cours : génération d’exercices et de corrections par agent sur la plateforme.',
  },
  {
    id: 'n8n',
    title: 'n8n',
    status: 'prevu',
    why: 'Automatiser des flux métier et connecter les outils entre eux, sans tout coder.',
    now: 'Prévu, à aborder une fois l’intégration IA stabilisée.',
  },
];

export const learningIntro =
  'Je me forme sur les outils qui relient l’interface, le serveur et l’automatisation. L’objectif : concevoir des produits complets, pas seulement des écrans.';

export const learningProject = {
  title: 'Plateforme React Learning',
  summary:
    'Une plateforme personnelle pour apprendre React. Un agent IA génère des exercices selon le concept, le niveau et la difficulté, puis accompagne la correction.',
  problem: 'Trouver des exercices React adaptés à mon niveau, sans attendre un cours figé.',
  stack: ['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'Zod', 'API OpenAI'],
  done: [
    'Parcours d’apprentissage généré par concept, niveau et difficulté',
    'Agent IA qui crée les exercices, les corrections et l’accompagnement',
    'API REST en Express avec validation des données via Zod',
  ],
  learned: [
    'Valider chaque sortie de l’agent avant de l’afficher à l’utilisateur',
    'Séparer l’API du front pour pouvoir tester chaque couche indépendamment',
  ],
  demo: 'https://react-learning-web-staging.vercel.app',
};
