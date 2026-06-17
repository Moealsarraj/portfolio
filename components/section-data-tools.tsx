import { DATA_TOOLS } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function SectionDataTools() {
  const [first, second, ...rest] = DATA_TOOLS
  return (
    <section className="px-6 pb-16 max-w-3xl mx-auto">
      <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Data & Governance Tools</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <ProjectCard project={first} />
        <ProjectCard project={second} />
        {rest.map((p) => (
          <div key={p.slug} className="sm:col-span-2">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
