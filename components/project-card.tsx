import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  const { name, category, description, architectureHighlight, stack, status, liveUrl } = project
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors flex flex-col" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-accent font-medium uppercase tracking-wide">{category}</span>
        {status === 'live' && (
          <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Live</span>
        )}
        {status === 'demo' && (
          <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">Demo</span>
        )}
      </div>
      <h3 className="text-primary font-semibold text-lg mb-2">{name}</h3>
      <p className="text-muted text-sm leading-relaxed mb-3 flex-1">{description}</p>
      <p className="text-xs text-[#555] italic mb-4 leading-relaxed">
        <span className="text-[#666] not-italic">Architecture: </span>
        {architectureHighlight}
      </p>
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
          className="text-sm text-accent hover:underline mt-auto"
        >
          Try it →
        </a>
      )}
    </div>
  )
}
