import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const { name, category, description, architectureHighlight, stack, status, liveUrl } = project
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex flex-col" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-accent font-medium uppercase tracking-wide">{category}</span>
        {status === 'live' && (
          <span className="text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded">Live</span>
        )}
        {status === 'demo' && (
          <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">Demo</span>
        )}
      </div>
      <h3 className="text-primary font-semibold text-lg mb-2">{name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-3">{description}</p>
      <p className="text-xs text-muted2 italic mb-4 leading-relaxed">
        <span className="not-italic text-muted">Architecture: </span>
        {architectureHighlight}
      </p>
      {/* spacer pushes tags + link to bottom */}
      <div className="flex-1" />
      <div className="flex flex-wrap gap-1.5 mb-4">
        {stack.map((s) => (
          <span key={s} className="text-xs text-muted bg-bg border border-border px-2 py-0.5 rounded">
            {s}
          </span>
        ))}
      </div>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          Try it →
        </a>
      )}
    </div>
  )
}
