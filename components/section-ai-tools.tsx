import { AI_SUITES } from '@/lib/projects'

export function SectionAiTools() {
  return (
    <section className="px-6 pb-16 max-w-3xl mx-auto">
      <h2 className="text-xs text-muted uppercase tracking-widest mb-2">AI Tools Portfolio</h2>
      <p className="text-muted text-sm mb-8">19 tools across 4 suites — all built with Claude API + Python Flask.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {AI_SUITES.map((suite) => (
          <div key={suite.name} className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-accent font-semibold">{suite.name}</span>
              <span className="text-xs text-muted bg-bg border border-border px-2 py-0.5 rounded-full">
                {suite.count} tools
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {suite.tools.map((t) => (
                <span key={t} className="text-xs text-muted bg-bg border border-border px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {suite.liveUrl && (
                <a href={suite.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                  Open suite →
                </a>
              )}
              {suite.githubUrl && (
                <a href={suite.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
