import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { FEATURED_PROJECT, DATA_TOOLS, OTHER_PROJECTS } from '@/lib/projects'

const ALL_PROJECTS = [FEATURED_PROJECT, ...DATA_TOOLS, ...OTHER_PROJECTS]

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = ALL_PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <>
      <Nav />
      <main className="pt-28 px-6 max-w-3xl mx-auto pb-20">
        <a href="/" className="text-muted text-sm hover:text-primary transition-colors mb-8 block">
          ← Back
        </a>
        <span className="text-xs text-accent font-medium uppercase tracking-wide">{project.category}</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-4">{project.name}</h1>
        <p className="text-muted text-lg leading-relaxed mb-8">{project.description}</p>

        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xs text-accent uppercase tracking-wide mb-3 font-medium">Architecture</h2>
          <p className="text-muted leading-relaxed">{project.architectureHighlight}</p>
        </div>

        <h2 className="text-xs text-muted uppercase tracking-wide mb-4">Stack</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((s) => (
            <span key={s} className="text-sm text-muted bg-card border border-border px-3 py-1 rounded">
              {s}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dark transition-colors"
          >
            Try it →
          </a>
        )}
      </main>
      <Footer />
    </>
  )
}
