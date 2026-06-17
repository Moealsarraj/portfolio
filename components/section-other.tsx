import { OTHER_PROJECTS } from '@/lib/projects'
import { ProjectCard } from './project-card'

export function SectionOther() {
  return (
    <section className="px-6 pb-16 max-w-3xl mx-auto">
      <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Other Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        {OTHER_PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
