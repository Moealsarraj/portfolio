export function Footer() {
  return (
    <footer id="contact" className="px-6 py-12 max-w-5xl mx-auto border-t border-border">
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted mb-5">
        Mohammed Al Sarraj · Dubai, UAE
      </p>
      <div className="flex flex-wrap gap-6 text-sm">
        <a href="mailto:moealsarraj@gmail.com" className="text-muted hover:text-primary transition-colors">
          moealsarraj@gmail.com
        </a>
        <a href="tel:+971504944664" className="text-muted hover:text-primary transition-colors">
          +971 50 494 4664
        </a>
        <a
          href="https://github.com/moealsarraj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors"
        >
          github.com/moealsarraj
        </a>
        <a href="/cv" className="text-accent hover:text-accent-dark transition-colors">
          View CV
        </a>
        <a href="/cv.pdf" download className="text-muted hover:text-primary transition-colors">
          Download PDF
        </a>
      </div>
    </footer>
  )
}
