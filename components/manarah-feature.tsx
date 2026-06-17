function ArchDiagram() {
  return (
    <svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Portal */}
      <rect x="140" y="8" width="300" height="46" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      <text x="290" y="28" textAnchor="middle" fill="#111827" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
        Manarah Portal
      </text>
      <text x="290" y="44" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter, sans-serif">
        Auth · Session · Reverse Proxy
      </text>

      {/* Lines portal → components */}
      <line x1="195" y1="54" x2="70" y2="100" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="250" y1="54" x2="205" y2="100" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="330" y1="54" x2="375" y2="100" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="385" y1="54" x2="510" y2="100" stroke="#d1d5db" strokeWidth="1.5" />

      {/* Wasit */}
      <rect x="10" y="100" width="120" height="56" rx="6" fill="#ffffff" stroke="#2d3548" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="70" y="122" textAnchor="middle" fill="#2d3548" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Wasit</text>
      <text x="70" y="136" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter, sans-serif">ETL · 30+ Connectors</text>
      <text x="70" y="149" textAnchor="middle" fill="#d1d5db" fontSize="7.5" fontFamily="Inter, sans-serif">port 5004</text>

      {/* Mizan */}
      <rect x="145" y="100" width="120" height="56" rx="6" fill="#ffffff" stroke="#2d3548" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="205" y="122" textAnchor="middle" fill="#2d3548" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Mizan</text>
      <text x="205" y="136" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter, sans-serif">Data Quality · Scoring</text>
      <text x="205" y="149" textAnchor="middle" fill="#d1d5db" fontSize="7.5" fontFamily="Inter, sans-serif">port 5002</text>

      {/* Amin */}
      <rect x="315" y="100" width="120" height="56" rx="6" fill="#ffffff" stroke="#2d3548" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="375" y="122" textAnchor="middle" fill="#2d3548" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Amin</text>
      <text x="375" y="136" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter, sans-serif">Governance · NDMO</text>
      <text x="375" y="149" textAnchor="middle" fill="#d1d5db" fontSize="7.5" fontFamily="Inter, sans-serif">port 5001</text>

      {/* Manarah AI */}
      <rect x="450" y="100" width="120" height="56" rx="6" fill="#ffffff" stroke="#2d3548" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="510" y="122" textAnchor="middle" fill="#2d3548" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Manarah AI</text>
      <text x="510" y="136" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="Inter, sans-serif">LLM Agent · Chat</text>
      <text x="510" y="149" textAnchor="middle" fill="#d1d5db" fontSize="7.5" fontFamily="Inter, sans-serif">Claude API</text>

      {/* Lines components → shared (dashed) */}
      <line x1="70" y1="156" x2="120" y2="193" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="205" y1="156" x2="235" y2="193" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="375" y1="156" x2="350" y2="193" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="510" y1="156" x2="460" y2="193" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3,3" />

      {/* Shared packages */}
      <rect x="10" y="193" width="560" height="40" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      <text x="290" y="210" textAnchor="middle" fill="#6b7280" fontSize="9.5" fontWeight="500" fontFamily="Inter, sans-serif">
        Shared Packages
      </text>
      <text x="290" y="225" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">
        shared_auth · shared_i18n · shared_connectors · shared_core
      </text>
    </svg>
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
            Four services behind a single portal. Wasit moves data, Mizan checks it, Amin governs
            it, and Manarah AI gives you a chat interface into all three. Compliance rules for NDMO
            and UAE PDPL run inside each pipeline step, not at the end.
          </p>
        </div>

        {/* Screenshot + architecture */}
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          {/* Real Manarah screenshot */}
          <div className="rounded-xl overflow-hidden border border-border bg-card"
            style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}
          >
            <img
              src="/manarah-screenshot.png"
              alt="Manarah portal — Manarah AI, Wasit, Mizan, and Amin"
              className="w-full"
            />
          </div>

          {/* Architecture diagram */}
          <div className="bg-card border border-border rounded-xl p-5"
            style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}
          >
            <p className="text-[10px] text-accent uppercase tracking-widest mb-4 font-medium">
              System Architecture
            </p>
            <ArchDiagram />
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Each component runs as an independent gunicorn process. They share a single signed
              session cookie via a common{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">SECRET_KEY</code>. The
              portal reverse-proxies{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/wasit/*</code>,{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/mizan/*</code>, and{' '}
              <code className="text-[#888] bg-bg px-1 rounded text-[11px]">/amin/*</code> to
              internal processes. One URL, four services.
            </p>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Claude API', 'SQLite'].map((s) => (
            <span key={s} className="text-xs text-muted bg-card border border-border px-2.5 py-1 rounded">
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
            className="text-sm px-5 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
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
