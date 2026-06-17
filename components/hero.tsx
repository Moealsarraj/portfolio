export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

        {/* Left: identity */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#34d399', boxShadow: '0 0 7px #34d399' }}
            />
            <span
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: '#6b7280' }}
            >
              Available · Dubai, UAE
            </span>
          </div>

          <h1
            className="font-bold text-primary leading-[0.97] tracking-[-0.03em] mb-3"
            style={{ fontSize: 'clamp(46px, 6.5vw, 70px)' }}
          >
            Mohammed<br />Al Sarraj
          </h1>

          <p
            className="text-[11px] uppercase tracking-[0.18em] mb-8 font-medium"
            style={{ color: '#f59e0b' }}
          >
            Senior Data Governance Engineer · AI Systems
          </p>

          <p
            className="text-[15px] leading-relaxed max-w-md mb-10"
            style={{ color: '#9ca3af' }}
          >
            5 years across GCC government — Qatar Central Bank, Abu Dhabi
            Executive Office, Dubai Police. Built Manarah: an AI-native
            alternative to the Informatica stack, NDMO P1–P3 aligned.
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
              Email
            </a>
          </div>
        </div>

        {/* Right: profile record card */}
        <div
          className="rounded-xl overflow-hidden border border-border flex-shrink-0"
          style={{ background: '#0f1a2e' }}
        >
          {/* Card header */}
          <div
            className="px-5 py-3 border-b border-border flex items-center justify-between"
            style={{ background: '#0f1624' }}
          >
            <span
              className="text-[9px] uppercase tracking-[0.16em]"
              style={{ color: '#4b5563' }}
            >
              engineer.profile
            </span>
            <span
              className="text-[9px] flex items-center gap-1.5"
              style={{ color: '#34d399' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#34d399' }}
              />
              active
            </span>
          </div>

          {/* Field rows */}
          <div className="p-5 space-y-3.5">
            {[
              { field: 'role',       value: 'Data Governance & AI Systems' },
              { field: 'stack',      value: 'Informatica CDGC · Claude API · Python' },
              { field: 'location',   value: 'Dubai, UAE' },
              { field: 'open_to',    value: 'Abu Dhabi · Full-time' },
              { field: 'compliance', value: 'NDMO P1–P3 · UAE PDPL' },
              { field: 'languages',  value: 'Arabic (native) · English (fluent)' },
            ].map(({ field, value }) => (
              <div key={field} className="flex gap-4 text-[12px]">
                <span
                  className="font-mono min-w-[88px] shrink-0"
                  style={{ color: '#4b5563' }}
                >
                  {field}
                </span>
                <span style={{ color: '#9ca3af' }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-t border-border">
            {[
              { label: 'Experience', value: '5y' },
              { label: 'AI Tools',   value: '19' },
              { label: 'GCC Clients', value: '4+' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`px-4 py-3.5 ${i < 2 ? 'border-r border-border' : ''}`}
              >
                <div
                  className="text-[9px] uppercase tracking-[0.1em] mb-1.5"
                  style={{ color: '#4b5563' }}
                >
                  {label}
                </div>
                <div
                  className="text-xl font-semibold leading-none"
                  style={{ color: '#f59e0b' }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
