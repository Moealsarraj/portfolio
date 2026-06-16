function ArchDiagram() {
  return (
    <svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Portal */}
      <rect x="140" y="8" width="300" height="46" rx="6" fill="#1A1F2E" stroke="#2a3148" strokeWidth="1.5" />
      <text x="290" y="28" textAnchor="middle" fill="#e5e7eb" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        Manarah Portal
      </text>
      <text x="290" y="44" textAnchor="middle" fill="#6b7280" fontSize="8.5" fontFamily="Inter, sans-serif">
        Auth · Session · Reverse Proxy
      </text>

      {/* Lines portal → components */}
      <line x1="195" y1="54" x2="70" y2="100" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="250" y1="54" x2="205" y2="100" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="330" y1="54" x2="375" y2="100" stroke="#3a4060" strokeWidth="1.5" />
      <line x1="385" y1="54" x2="510" y2="100" stroke="#3a4060" strokeWidth="1.5" />

      {/* Wasit */}
      <rect x="10" y="100" width="120" height="56" rx="6" fill="#141418" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />
      <text x="70" y="122" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Wasit</text>
      <text x="70" y="136" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">ETL · 30+ Connectors</text>
      <text x="70" y="149" textAnchor="middle" fill="#374151" fontSize="7.5" fontFamily="Inter, sans-serif">port 5004</text>

      {/* Mizan */}
      <rect x="145" y="100" width="120" height="56" rx="6" fill="#141418" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />
      <text x="205" y="122" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Mizan</text>
      <text x="205" y="136" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">Data Quality · Scoring</text>
      <text x="205" y="149" textAnchor="middle" fill="#374151" fontSize="7.5" fontFamily="Inter, sans-serif">port 5002</text>

      {/* Amin */}
      <rect x="315" y="100" width="120" height="56" rx="6" fill="#141418" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />
      <text x="375" y="122" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Amin</text>
      <text x="375" y="136" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">Governance · NDMO</text>
      <text x="375" y="149" textAnchor="middle" fill="#374151" fontSize="7.5" fontFamily="Inter, sans-serif">port 5001</text>

      {/* Manarah AI */}
      <rect x="450" y="100" width="120" height="56" rx="6" fill="#141418" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />
      <text x="510" y="122" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Manarah AI</text>
      <text x="510" y="136" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">LLM Agent · Chat</text>
      <text x="510" y="149" textAnchor="middle" fill="#374151" fontSize="7.5" fontFamily="Inter, sans-serif">Claude API</text>

      {/* Lines components → shared (dashed) */}
      <line x1="70" y1="156" x2="120" y2="193" stroke="#2a3148" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="205" y1="156" x2="235" y2="193" stroke="#2a3148" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="375" y1="156" x2="350" y2="193" stroke="#2a3148" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="510" y1="156" x2="460" y2="193" stroke="#2a3148" strokeWidth="1" strokeDasharray="3,3" />

      {/* Shared packages */}
      <rect x="10" y="193" width="560" height="40" rx="6" fill="#1A1F2E" stroke="#2a3148" strokeWidth="1.5" />
      <text x="290" y="210" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontWeight="500" fontFamily="Inter, sans-serif">
        Shared Packages
      </text>
      <text x="290" y="225" textAnchor="middle" fill="#4b5563" fontSize="8" fontFamily="Inter, sans-serif">
        shared_auth · shared_i18n · shared_connectors · shared_core
      </text>
    </svg>
  )
}

function ProductPreview() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#1e2d4a]" style={{ background: '#0c1222' }}>
      {/* Demo banner */}
      <div
        style={{
          background: '#f59e0b',
          color: '#0c0c0f',
          fontSize: '11px',
          fontWeight: '600',
          textAlign: 'center',
          padding: '6px 12px',
          letterSpacing: '0.02em',
        }}
      >
        Demo Mode — Read-only · Login: demo / demo123
      </div>
      {/* App shell */}
      <div style={{ display: 'flex', height: '310px' }}>
        {/* Sidebar */}
        <nav
          style={{
            width: '152px',
            background: '#0f1624',
            borderRight: '1px solid #1e2d4a',
            display: 'flex',
            flexDirection: 'column',
            padding: '12px 0',
            flexShrink: 0,
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 12px 12px',
              marginBottom: '4px',
              borderBottom: '1px solid #1e2d4a',
            }}
          >
            <div
              style={{
                background: '#f59e0b',
                color: '#0c0c0f',
                width: '22px',
                height: '22px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: '700',
                flexShrink: 0,
              }}
            >
              M
            </div>
            <span style={{ color: '#e5e7eb', fontSize: '12px', fontWeight: '500' }}>Manarah</span>
          </div>
          {/* Suite label */}
          <div
            style={{
              fontSize: '9px',
              color: '#374151',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '8px 12px 4px',
            }}
          >
            Suite
          </div>
          {/* Nav items */}
          {[
            { label: 'Home', active: true },
            { label: 'Wasit' },
            { label: 'Mizan' },
            { label: 'Amin' },
            { label: 'AI' },
          ].map(({ label, active }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                margin: '1px 6px',
                borderRadius: '5px',
                fontSize: '12px',
                color: active ? '#f59e0b' : '#9ca3af',
                background: active ? 'rgba(245,158,11,0.08)' : 'transparent',
                cursor: 'default',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: active ? '#f59e0b' : '#374151',
                  flexShrink: 0,
                }}
              />
              {label}
            </div>
          ))}
          {/* System section */}
          <div
            style={{
              fontSize: '9px',
              color: '#374151',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '12px 12px 4px',
              marginTop: 'auto',
            }}
          >
            System
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 10px',
              margin: '1px 6px',
              borderRadius: '5px',
              fontSize: '12px',
              color: '#6b7280',
              cursor: 'default',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#374151', flexShrink: 0 }} />
            Admin
          </div>
        </nav>

        {/* Main content */}
        <div style={{ flex: 1, padding: '14px', background: '#0c1222', overflow: 'hidden' }}>
          <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '12px' }}>
            Home · UAE Government Data
          </div>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '10px' }}>
            {[
              { label: 'ETL Jobs', value: '128', color: '#34d399' },
              { label: 'DQ Score', value: '94%', color: '#60a5fa' },
              { label: 'Data Assets', value: '4.2k', color: '#f59e0b' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                style={{
                  background: '#0f1a2e',
                  border: '1px solid #1e2d4a',
                  borderRadius: '6px',
                  padding: '8px',
                }}
              >
                <div style={{ fontSize: '9px', color: '#6b7280', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color }}>{value}</div>
              </div>
            ))}
          </div>
          {/* Pipelines */}
          <div
            style={{
              background: '#0f1a2e',
              border: '1px solid #1e2d4a',
              borderRadius: '6px',
              padding: '10px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                fontSize: '9px',
                color: '#4b5563',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '6px',
              }}
            >
              Recent Pipelines
            </div>
            {[
              { name: 'MOI → Central DWH', status: 'completed' },
              { name: 'ADGM → BigQuery', status: 'running' },
              { name: 'DXB Police → ADX', status: 'queued' },
            ].map(({ name, status }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '4px 0',
                  borderTop: '1px solid #1a2540',
                }}
              >
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>{name}</span>
                <span
                  style={{
                    fontSize: '9px',
                    padding: '2px 6px',
                    borderRadius: '10px',
                    background:
                      status === 'completed'
                        ? 'rgba(52,211,153,0.1)'
                        : status === 'running'
                          ? 'rgba(245,158,11,0.1)'
                          : '#1a2540',
                    color:
                      status === 'completed' ? '#34d399' : status === 'running' ? '#f59e0b' : '#6b7280',
                  }}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
          {/* NDMO compliance */}
          <div
            style={{
              background: '#0f1a2e',
              border: '1px solid #1e2d4a',
              borderRadius: '6px',
              padding: '10px',
            }}
          >
            <div
              style={{
                fontSize: '9px',
                color: '#4b5563',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '7px',
              }}
            >
              NDMO Compliance
            </div>
            {[
              { label: 'P1 Controls', score: 100, color: '#34d399' },
              { label: 'P2 Controls', score: 87, color: '#60a5fa' },
              { label: 'P3 Controls', score: 73, color: '#f59e0b' },
            ].map(({ label, score, color }) => (
              <div key={label} style={{ marginBottom: '6px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '9px',
                    color: '#6b7280',
                    marginBottom: '3px',
                  }}
                >
                  <span>{label}</span>
                  <span>{score}%</span>
                </div>
                <div style={{ background: '#1a2540', borderRadius: '2px', height: '3px' }}>
                  <div
                    style={{
                      background: color,
                      height: '3px',
                      borderRadius: '2px',
                      width: `${score}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ManarahFeature() {
  return (
    <section id="projects" className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-medium">
              Demo Live
            </span>
            <span className="text-xs text-muted border border-border px-2.5 py-0.5 rounded-full">NDMO P1–P3</span>
            <span className="text-xs text-muted border border-border px-2.5 py-0.5 rounded-full">UAE PDPL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Manarah Suite</h2>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            A four-component data platform covering the full management lifecycle — ETL (Wasit),
            Data Quality (Mizan), Governance (Amin), and an LLM agent (Manarah AI) that drives
            all three from a chat interface. Compliance controls are built into each layer, not
            added as a separate step.
          </p>
        </div>

        {/* Product preview + architecture */}
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          <ProductPreview />
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-[10px] text-accent uppercase tracking-widest mb-4 font-medium">
              System Architecture
            </p>
            <ArchDiagram />
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Each component runs as an independent gunicorn process and shares a single signed
              session cookie via a common{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">SECRET_KEY</code>. The
              portal reverse-proxies{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/wasit/*</code>,{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/mizan/*</code>, and{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/amin/*</code> to
              internal processes — one URL, four services.
            </p>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Claude API', 'SQLite'].map((s) => (
            <span key={s} className="text-xs text-muted bg-bg border border-border px-2.5 py-1 rounded">
              {s}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://manarah-portal.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dark transition-colors"
          >
            Try the Demo →
          </a>
          <a
            href="/projects/manarah"
            className="text-sm px-5 py-2.5 border border-border text-muted rounded-full hover:border-accent hover:text-primary transition-colors"
          >
            Architecture Deep Dive
          </a>
        </div>
      </div>
    </section>
  )
}
