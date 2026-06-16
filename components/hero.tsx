export function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 max-w-3xl mx-auto">
      <p className="text-accent text-sm font-medium mb-4 tracking-wide uppercase">
        Dubai, UAE · Open to Abu Dhabi
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4">
        Senior Data Governance Engineer.{' '}
        <span className="text-muted font-normal">AI Builder.</span>
      </h1>
      <p className="text-muted text-lg max-w-2xl leading-relaxed mb-8">
        5 years across GCC government — Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police.
        Built Manarah: a four-component AI-native data platform as an alternative to Informatica,
        with UAE PDPL and NDMO controls built directly into ETL, DQ, and governance.
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
