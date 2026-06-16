import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

function SystemDiagram() {
  return (
    <svg viewBox="0 0 720 310" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Portal — center=360, x=210, w=300 */}
      <rect x="210" y="10" width="300" height="56" rx="8" fill="#1A1F2E" stroke="#2a3148" strokeWidth="1.5" />
      <text x="360" y="33" textAnchor="middle" fill="#e5e7eb" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
        Manarah Portal
      </text>
      <text x="360" y="52" textAnchor="middle" fill="#6b7280" fontSize="10" fontFamily="Inter, sans-serif">
        Authentication · Session Management · Reverse Proxy
      </text>

      {/* Proxy path labels */}
      <text x="140" y="92" textAnchor="middle" fill="#4b5563" fontSize="9" fontFamily="Inter, sans-serif">/wasit/*</text>
      <text x="287" y="92" textAnchor="middle" fill="#4b5563" fontSize="9" fontFamily="Inter, sans-serif">/mizan/*</text>
      <text x="434" y="92" textAnchor="middle" fill="#4b5563" fontSize="9" fontFamily="Inter, sans-serif">/amin/*</text>

      {/* Lines portal → components */}
      <line x1="260" y1="66" x2="140" y2="110" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="315" y1="66" x2="287" y2="110" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="405" y1="66" x2="434" y2="110" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="460" y1="66" x2="580" y2="110" stroke="#3a4060" strokeWidth="1.5" />

      {/* Wasit — x=80, w=120, center=140 */}
      <rect x="80" y="110" width="120" height="80" rx="8" fill="#141418" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
      <text x="140" y="134" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Wasit (واسط)</text>
      <text x="140" y="150" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="Inter, sans-serif">ETL Engine</text>
      <text x="140" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter, sans-serif">30+ connectors</text>
      <text x="140" y="181" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="Inter, sans-serif">:5004</text>

      {/* Mizan — x=227, w=120, center=287 */}
      <rect x="227" y="110" width="120" height="80" rx="8" fill="#141418" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
      <text x="287" y="134" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Mizan (ميزان)</text>
      <text x="287" y="150" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="Inter, sans-serif">Data Quality</text>
      <text x="287" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter, sans-serif">Scoring · Trends</text>
      <text x="287" y="181" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="Inter, sans-serif">:5002</text>

      {/* Amin — x=374, w=120, center=434 */}
      <rect x="374" y="110" width="120" height="80" rx="8" fill="#141418" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
      <text x="434" y="134" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Amin (أمين)</text>
      <text x="434" y="150" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="Inter, sans-serif">Governance</text>
      <text x="434" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter, sans-serif">Lineage · NDMO</text>
      <text x="434" y="181" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="Inter, sans-serif">:5001</text>

      {/* Manarah AI — x=520, w=120, center=580 */}
      <rect x="520" y="110" width="120" height="80" rx="8" fill="#141418" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" />
      <text x="580" y="134" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Manarah AI</text>
      <text x="580" y="150" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="Inter, sans-serif">LLM Agent</text>
      <text x="580" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter, sans-serif">Natural-language ops</text>
      <text x="580" y="181" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="Inter, sans-serif">Claude API</text>

      {/* Lines components → shared (dashed) */}
      <line x1="140" y1="190" x2="180" y2="242" stroke="#2a3148" strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="287" y1="190" x2="295" y2="242" stroke="#2a3148" strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="434" y1="190" x2="425" y2="242" stroke="#2a3148" strokeWidth="1.5" strokeDasharray="4,4" />
      <line x1="580" y1="190" x2="540" y2="242" stroke="#2a3148" strokeWidth="1.5" strokeDasharray="4,4" />

      {/* Shared packages — x=80, w=560, right=640 */}
      <rect x="80" y="242" width="560" height="52" rx="8" fill="#1A1F2E" stroke="#2a3148" strokeWidth="1.5" />
      <text x="360" y="264" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif">
        Shared Packages
      </text>
      <text x="360" y="283" textAnchor="middle" fill="#4b5563" fontSize="9.5" fontFamily="Inter, sans-serif">
        shared_auth · shared_i18n · shared_connectors · shared_core
      </text>
    </svg>
  )
}

interface ComponentCardProps {
  name: string
  role: string
  port: string
  description: string
  highlights: string[]
  stack: string[]
}

function ComponentCard({ name, role, port, description, highlights, stack }: ComponentCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-accent font-medium uppercase tracking-wide">{role}</span>
        <code className="text-xs text-muted font-mono bg-bg border border-border px-2 py-0.5 rounded">{port}</code>
      </div>
      <h3 className="text-primary font-semibold text-lg mb-3">{name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-1.5 mb-5">
        {highlights.map((h) => (
          <li key={h} className="text-sm text-muted flex items-start gap-2">
            <span className="text-accent mt-0.5 flex-shrink-0 text-xs">·</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span key={s} className="text-xs text-muted bg-bg border border-border px-2 py-0.5 rounded">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ManarahDeepDive() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24 px-6 max-w-4xl mx-auto">
        <a href="/" className="text-muted text-sm hover:text-primary transition-colors mb-10 block">
          ← Back
        </a>

        {/* Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-medium">
              Demo Live
            </span>
            <span className="text-xs text-muted border border-border px-2.5 py-0.5 rounded-full">NDMO P1–P3</span>
            <span className="text-xs text-muted border border-border px-2.5 py-0.5 rounded-full">UAE PDPL</span>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Manarah Suite — Architecture</h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            An AI-native alternative to the Informatica stack. Four independent services behind a
            single URL, sharing auth, connectors, and i18n — built for UAE government data
            environments.
          </p>
        </div>

        {/* System diagram */}
        <section className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest mb-5 font-medium">System Architecture</h2>
          <div className="bg-card border border-border rounded-xl p-6 mb-5">
            <SystemDiagram />
          </div>
          <div className="text-muted text-sm leading-relaxed space-y-2">
            <p>
              The portal is the single entry point and reverse proxy. One URL routes{' '}
              <code className="text-xs bg-bg border border-border px-1.5 py-0.5 rounded">/wasit/*</code>,{' '}
              <code className="text-xs bg-bg border border-border px-1.5 py-0.5 rounded">/mizan/*</code>, and{' '}
              <code className="text-xs bg-bg border border-border px-1.5 py-0.5 rounded">/amin/*</code> to
              independent gunicorn processes running on internal ports.
            </p>
            <p>
              A shared{' '}
              <code className="text-xs bg-bg border border-border px-1.5 py-0.5 rounded">SECRET_KEY</code>{' '}
              means a single signed session cookie authenticates across all four services — no
              separate login per tool, no token exchange.
            </p>
            <p>
              The dashed lines represent importable Python packages (
              <code className="text-xs bg-bg border border-border px-1.5 py-0.5 rounded">shared_*</code>
              ) that each service installs at build time — not HTTP calls.
            </p>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest mb-5 font-medium">Components</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <ComponentCard
              name="Wasit (واسط)"
              role="ETL Engine"
              port=":5004"
              description="Pipeline builder with a visual editor and 30+ enterprise source adapters. Pipelines are versioned and auditable. UAE PDPL data masking is applied per-field during extraction."
              highlights={[
                'Visual pipeline editor',
                '30+ connector adapters (Snowflake, BigQuery, SAP HANA, Oracle, Azure, Salesforce…)',
                'Pipeline versioning and audit trail',
                'Scheduled + event-triggered runs',
                'Field-level PII masking before load',
              ]}
              stack={['Python', 'Flask', 'SQLAlchemy', 'APScheduler']}
            />
            <ComponentCard
              name="Mizan (ميزان)"
              role="Data Quality"
              port=":5002"
              description="Automated DQ scoring across datasets. Measures completeness, consistency, accuracy, and timeliness. Failed records drill-down and compliance-ready reports map to NDMO P2 controls."
              highlights={[
                'Completeness, consistency, accuracy, timeliness dimensions',
                'Failed-record drill-down per dataset',
                'NDMO P2 DQ control coverage',
                'Score trend tracking over time',
                'Scheduled quality runs with alerts',
              ]}
              stack={['Python', 'Flask', 'SQLite', 'Pandas']}
            />
            <ComponentCard
              name="Amin (أمين)"
              role="Data Governance"
              port=":5001"
              description="Governance platform covering data stewardship, asset cataloguing, lineage, and PDPL/NDMO compliance. Role-based access with viewer, steward, and admin roles across data domains."
              highlights={[
                'Data asset catalogue with classifications',
                'Dataset lineage graph',
                'NDMO P1–P3 control tracking per asset',
                'Role-based stewardship (viewer / steward / admin)',
                'PDPL consent and retention records',
              ]}
              stack={['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic']}
            />
            <ComponentCard
              name="Manarah AI"
              role="LLM Agent"
              port="Claude API"
              description="Natural-language interface over the entire suite. Translates chat requests into API calls against Wasit, Mizan, and Amin using tool-use chains. Supports Arabic and English."
              highlights={[
                'Natural-language ETL pipeline builder',
                'DQ analysis and fix suggestions via chat',
                'Tool-use chains across all three services',
                'Context-aware governance recommendations',
                'Arabic and English language support',
              ]}
              stack={['Python', 'Claude API', 'Flask']}
            />
          </div>
        </section>

        {/* Shared infrastructure */}
        <section className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest mb-5 font-medium">
            Shared Infrastructure
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'shared_auth',
                desc: 'Session management, inactivity timeout, and LDAP integration. All four services share the same SECRET_KEY — one signed cookie, one login.',
              },
              {
                name: 'shared_connectors',
                desc: '30+ adapters behind a unified Connector interface. Adding a new source is one class — no changes to the ETL engine.',
              },
              {
                name: 'shared_i18n',
                desc: 'Full Arabic/English bilingual support with RTL layout switching. Translations are YAML files loaded at app-factory time.',
              },
              {
                name: 'shared_core',
                desc: 'Config loader, DB helpers, error middleware, and health-check endpoints shared across all services.',
              },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-card border border-border rounded-xl p-5">
                <code className="text-sm text-accent font-mono">{name}</code>
                <p className="text-sm text-muted mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NDMO controls */}
        <section className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest mb-5 font-medium">
            NDMO Control Mapping
          </h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 text-xs text-muted uppercase tracking-wide font-medium">
                    Priority
                  </th>
                  <th className="text-left px-5 py-3 text-xs text-muted uppercase tracking-wide font-medium">
                    Control Area
                  </th>
                  <th className="text-left px-5 py-3 text-xs text-muted uppercase tracking-wide font-medium">
                    Implemented in
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { priority: 'P1', area: 'Data Classification', component: 'Amin' },
                  { priority: 'P1', area: 'Access Control & Stewardship', component: 'Amin' },
                  { priority: 'P1', area: 'Data Lineage', component: 'Amin' },
                  { priority: 'P2', area: 'Data Quality Scoring', component: 'Mizan' },
                  { priority: 'P2', area: 'Pipeline Audit Trail', component: 'Wasit' },
                  { priority: 'P2', area: 'PII Masking in Transit', component: 'Wasit' },
                  { priority: 'P3', area: 'Retention Policy Enforcement', component: 'Amin' },
                  { priority: 'P3', area: 'Consent Records', component: 'Amin' },
                ].map(({ priority, area, component }) => (
                  <tr key={area} className="border-b border-border last:border-0">
                    <td className="px-5 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          priority === 'P1'
                            ? 'bg-red-500/10 text-red-400'
                            : priority === 'P2'
                              ? 'bg-accent/10 text-accent'
                              : 'bg-blue-500/10 text-blue-400'
                        }`}
                      >
                        {priority}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted">{area}</td>
                    <td className="px-5 py-3 text-primary font-medium">{component}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Connector list */}
        <section className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest mb-5 font-medium">
            Enterprise Connectors (Wasit)
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Snowflake',
              'BigQuery',
              'Redshift',
              'Databricks',
              'SAP HANA',
              'Oracle DB',
              'Microsoft SQL Server',
              'PostgreSQL',
              'MySQL',
              'Azure SQL',
              'Azure Blob Storage',
              'Azure Data Lake',
              'Salesforce',
              'Google Sheets',
              'Amazon S3',
              'SharePoint',
              'REST APIs',
              'SFTP',
              'FTP',
              'MongoDB',
              'Elasticsearch',
              'Kafka',
              'RabbitMQ',
              'Teradata',
              'IBM Db2',
              'Google Cloud Storage',
              'Delta Lake',
            ].map((c) => (
              <span key={c} className="text-xs text-muted bg-bg border border-border px-2.5 py-1 rounded">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://manarah-portal.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dark transition-colors"
          >
            Try the Demo →
          </a>
          <a
            href="/"
            className="text-sm px-6 py-3 border border-border text-muted rounded-full hover:border-accent hover:text-primary transition-colors"
          >
            ← Back to Portfolio
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
