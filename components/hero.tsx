export function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 max-w-4xl mx-auto">

      {/* Availability */}
      <div className="flex items-center gap-2.5 mb-10">
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            background: '#22c55e',
            animation: 'pulse-dot 2.4s ease-in-out infinite',
          }}
        />
        <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Available · Dubai, UAE
        </span>
      </div>

      {/* Name — light weight, large, tight tracking */}
      <h1
        className="font-light text-primary leading-none mb-5"
        style={{ fontSize: 'clamp(48px, 6.5vw, 76px)', letterSpacing: '-0.03em' }}
      >
        Mohammed<br />Al Sarraj
      </h1>

      {/* Role */}
      <p className="text-[12px] uppercase tracking-[0.16em] text-muted mb-8">
        Senior Data Governance Engineer · AI Systems
      </p>

      {/* Bio */}
      <p
        className="text-[16px] leading-[1.7] text-muted mb-10"
        style={{ maxWidth: '540px' }}
      >
        Five years at BBI Consultancy, deployed across GCC government and
        enterprise: Abu Dhabi Executive Office, Qatar Central Bank, Dubai
        Police, DCT, SCAD, and YBA Kanoo. Built Manarah and shipped 19+ AI
        tools, all publicly accessible.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mb-14">
        <a
          href="/cv"
          className="text-sm px-5 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
        >
          View CV
        </a>
        <a
          href="https://github.com/moealsarraj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-5 py-3 border border-border text-muted rounded-lg hover:border-accent/40 hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:moealsarraj@gmail.com"
          className="text-sm px-5 py-3 border border-border text-muted rounded-lg hover:border-accent/40 hover:text-primary transition-colors"
        >
          Email
        </a>
      </div>

      {/* Stats — ruled line, no card */}
      <div className="flex gap-10 border-t border-border pt-8">
        {[
          { value: '5y+',  label: 'Experience' },
          { value: '19+',  label: 'AI Tools Shipped' },
          { value: '6',    label: 'GCC Clients' },
        ].map(({ value, label }) => (
          <div key={label}>
            <div className="text-2xl font-semibold text-primary leading-none mb-1.5">
              {value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted">
              {label}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
