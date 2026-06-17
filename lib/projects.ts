export type ProjectStatus = 'live' | 'demo' | 'local'

export interface Project {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  architectureHighlight: string
  stack: string[]
  status: ProjectStatus
  liveUrl?: string
  githubUrl?: string
  ndmoAligned?: boolean
}

export const FEATURED_PROJECT: Project = {
  slug: 'manarah',
  name: 'Manarah Suite',
  category: 'Data Platform',
  tagline: 'A practical alternative to the Informatica stack, built for GCC regulatory environments',
  description:
    'Four services behind a single portal. Wasit handles ETL with 30+ connectors, Mizan runs data quality scoring, Amin manages governance and catalog, and Manarah AI is a chat interface into all three. Compliance controls for UAE PDPL and local data regulations sit inside each pipeline step, not layered on at the end. Demo login: demo / demo123.',
  architectureHighlight:
    '30+ enterprise connectors (Snowflake, BigQuery, SAP HANA, Oracle, Azure Blob/SQL, Salesforce, Databricks, Redshift, S3…) behind a shared connector interface. Each component is an independent Flask service sharing a common auth, connector, and i18n layer via importable packages.',
  stack: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Claude API', 'SQLite'],
  status: 'demo',
  liveUrl: 'https://manarah-portal.onrender.com',
  ndmoAligned: true,
}

export const DATA_TOOLS: Project[] = [
  {
    slug: 'qubtan',
    name: 'Qubtan',
    category: 'Operations Intelligence',
    tagline: 'Internal platform for a UAE maritime business',
    description:
      "Encrypted PII, role-based access, automated compliance alerts and invoice reporting for Captain's Club GCC. Flask-Talisman for security headers, Flask-Limiter for rate limiting, Fernet encryption on all personal data fields.",
    architectureHighlight:
      'App factory pattern with per-environment configs, Flask-WTF CSRF, and APScheduler for automated compliance reports. PostgreSQL in prod, SQLite in-memory for tests.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'Fernet', 'Flask-Talisman', 'APScheduler'],
    status: 'local',
    githubUrl: undefined,
  },
  {
    slug: 'rased',
    name: 'Rased (راصد)',
    category: 'Social Analytics',
    tagline: 'Social media analytics platform',
    description:
      'Tracks and analyses social media engagement, trends, and audience data across platforms. Deployed on Render with seed-able demo data.',
    architectureHighlight: 'Python Flask with Render deployment config. Seed-able demo data.',
    stack: ['Python', 'Flask', 'SQLite', 'Render'],
    status: 'live',
    liveUrl: 'https://rased-ydk2.onrender.com',
    githubUrl: 'https://github.com/moealsarraj/rased',
  },
  {
    slug: 'tarjim',
    name: 'Tarjim (ترجم)',
    category: 'Arabic Localisation',
    tagline: 'RTL audit + Arabic translation tool',
    description:
      'Audits any web project for RTL layout issues, translates UI strings to Arabic with contextual accuracy, auto-fixes CSS/HTML problems, and scores translation quality using Arabic NLP metrics.',
    architectureHighlight:
      'CLI + Flask web UI. Audits a running app via Playwright, then generates a diff patch and a quality report.',
    stack: ['Python', 'Flask', 'Claude API', 'Playwright', 'Arabic NLP'],
    status: 'live',
    liveUrl: 'https://tarjim-gvod.onrender.com',
  },
]

export const AI_SUITES = [
  {
    name: 'BizIntel',
    count: 7,
    tools: ['Competitive Intel', 'Persona Studio', 'Meeting Distiller', 'Contract Lens', 'CSV Storyteller', 'Resume Match', 'Resume Forge'],
    liveUrl: 'https://bizintel-vrlr.onrender.com',
    githubUrl: 'https://github.com/moealsarraj/bizintel',
  },
  {
    name: 'DevKit',
    count: 6,
    tools: ['Schema Detective', 'Test Forge', 'SQL Whisperer', 'Doc Forge', 'Changelog AI', 'Git Narrator'],
    liveUrl: 'https://devkit-lepz.onrender.com',
    githubUrl: 'https://github.com/moealsarraj/devkit',
  },
  {
    name: 'AI Lab',
    count: 4,
    tools: ['Prompt Bench', 'Prompt Shield', 'Agent Builder', 'Arabic Bench'],
    liveUrl: 'https://ailab-xiua.onrender.com',
    githubUrl: 'https://github.com/moealsarraj/ailab',
  },
  {
    name: 'ContentForge',
    count: 2,
    tools: ['Content Repurposer', 'AI Debate Arena'],
    liveUrl: 'https://contentforge-9tu6.onrender.com',
    githubUrl: 'https://github.com/moealsarraj/contentforge',
  },
]

export const OTHER_PROJECTS: Project[] = [
  {
    slug: 'trader-x',
    name: 'Trader X',
    category: 'Automated Trading',
    tagline: 'Backtester + paper trader + live trading system',
    description:
      'Multi-component trading system with a strategy engine, backtester, paper trader (simulated), live trader, and a real-time dashboard. Separate processes for each mode.',
    architectureHighlight:
      'Three independent trader processes (backtest / paper / live) with a shared strategy module and a dashboard server. State persisted to JSON, no database required.',
    stack: ['Python', 'Flask', 'WebSocket', 'Financial APIs'],
    status: 'local',
  },
  {
    slug: 'masna',
    name: 'Masna',
    category: 'Autonomous AI',
    tagline: 'Autonomous product factory',
    description:
      'One run produces a new developer tool: researched, built, tested, and pushed to GitHub. A fully automated pipeline that goes from idea to shipped repo.',
    architectureHighlight:
      'Multi-stage pipeline: research → spec → scaffold → implement → test → git push. Each stage is a distinct function called sequentially by a factory orchestrator.',
    stack: ['Python', 'Claude API', 'GitHub API', 'Flask'],
    status: 'local',
  },
  {
    slug: 'khaliyya',
    name: 'Khaliyya',
    category: 'Community Intelligence',
    tagline: 'Resident profiles + retention risk scoring',
    description:
      'Unified resident profiles from any data source with automatic churn/retention risk scoring. Built for coliving operators.',
    architectureHighlight: 'App factory pattern, risk score calculated per-resident on profile update via SQLAlchemy event listeners.',
    stack: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'],
    status: 'local',
  },
  {
    slug: 'virb',
    name: 'Virb Thrift',
    category: 'Marketplace',
    tagline: 'Thrift marketplace built with Next.js, Turborepo, and Supabase',
    description:
      'Full-stack thrift marketplace with a Turborepo monorepo containing the buyer app, seller app, and shared packages. Supabase for auth and database.',
    architectureHighlight: 'Turborepo monorepo with shared UI and types packages. Supabase RLS policies for multi-tenant data isolation.',
    stack: ['Next.js', 'TypeScript', 'Turborepo', 'Supabase', 'Tailwind'],
    status: 'local',
  },
]
