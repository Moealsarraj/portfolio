import { DATA_TOOLS } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function SectionDataTools() {
  return (
    <section className="px-6 pb-16 max-w-3xl mx-auto">
      <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Data & Governance Tools</h2>
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        {DATA_TOOLS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
