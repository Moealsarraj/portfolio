import { FEATURED_PROJECT } from '@/lib/projects'

export function ManarahFeature() {
  const p = FEATURED_PROJECT
  return (
    <section id="projects" className="px-6 pb-16 max-w-3xl mx-auto">
      <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Featured Project</h2>
      <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-accent font-medium uppercase tracking-wide">{p.category}</span>
          <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">Demo Live</span>
          <span className="text-xs text-muted bg-[#1a1a1f] px-2 py-0.5 rounded-full">NDMO-Aligned</span>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">{p.name}</h3>
        <p className="text-muted text-base leading-relaxed mb-6">{p.description}</p>

        <div className="bg-bg rounded-xl p-5 mb-6 border border-border">
          <p className="text-xs text-accent uppercase tracking-wide mb-2 font-medium">Architecture</p>
          <p className="text-sm text-muted leading-relaxed">{p.architectureHighlight}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {['Wasit (ETL)', 'Mizan (DQ)', 'Amin (Governance)', 'Manarah AI (LLM)'].map((component) => (
            <div key={component} className="bg-bg border border-border rounded-lg p-3 text-center">
              <span className="text-xs text-muted">{component}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {p.stack.map((s) => (
            <span key={s} className="text-xs text-muted bg-bg border border-border px-2.5 py-1 rounded">
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-5 py-2.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Try the Demo →
            </a>
          )}
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
