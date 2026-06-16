export function Hero() {
  return (
    <section className="pt-36 pb-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-5">
        Senior Data & AI Engineer.
      </h1>
      <p className="text-muted text-lg max-w-2xl leading-relaxed mb-3">
        5 years across GCC government — Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police.
        Based in Dubai, open to Abu Dhabi.
      </p>
      <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
        Built Manarah: a four-component data platform covering ETL, data quality, and governance —
        with UAE PDPL and NDMO controls embedded into each layer, not bolted on separately.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="/cv.pdf"
          download
          className="text-sm px-5 py-2.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dark transition-colors"
        >
          Download CV
        </a>
        <a
          href="https://github.com/moealsarraj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-5 py-2.5 border border-border text-muted rounded-full hover:border-accent hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:moealsarraj@gmail.com"
          className="text-sm px-5 py-2.5 border border-border text-muted rounded-full hover:border-accent hover:text-primary transition-colors"
        >
          moealsarraj@gmail.com
        </a>
      </div>
    </section>
  )
}
