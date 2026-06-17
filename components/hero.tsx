export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

        {/* Left: identity */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }}
            />
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted2">
              Available · Dubai, UAE
            </span>
          </div>

          <h1
            className="font-bold text-primary leading-[0.97] tracking-[-0.03em] mb-3"
            style={{ fontSize: 'clamp(44px, 6vw, 68px)' }}
          >
            Mohammed<br />Al Sarraj
          </h1>

          <p className="text-[11px] uppercase tracking-[0.18em] mb-8 font-medium text-accent">
            Senior Data Governance Engineer · AI Systems
          </p>

          <p className="text-[15px] leading-relaxed max-w-md mb-10 text-muted">
            Five years as a data governance engineer at BBI Consultancy, deployed
            across GCC government and enterprise: Abu Dhabi Executive Office, Qatar
            Central Bank, Dubai Police, DCT, SCAD, and YBA Kanoo. Outside that, I
            built Manarah, a four-part data platform, and shipped 19+ AI tools,
            all publicly accessible.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/cv"
              className="text-sm px-5 py-2.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              View CV
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
        <div className="bg-card rounded-xl border border-border overflow-hidden flex-shrink-0"
          style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.07)' }}
        >
          {/* Card header */}
          <div className="px-5 py-3 border-b border-border flex items-center justify-between bg-bg">
            <span className="text-[9px] uppercase tracking-[0.16em] text-muted2">
              engineer.profile
            </span>
            <span className="text-[9px] flex items-center gap-1.5 text-success">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-success" />
              active
            </span>
          </div>

          {/* Field rows */}
          <div className="p-5 space-y-3.5">
            {[
              { field: 'role',       value: 'Data Governance & AI Systems' },
              { field: 'stack',      value: 'Informatica CDGC · Claude API · Python' },
              { field: 'location',   value: 'Dubai, UAE' },
              { field: 'open_to',    value: 'Full-time' },
              { field: 'compliance', value: 'NDMO P1–P3 · UAE PDPL' },
              { field: 'languages',  value: 'Arabic (native) · English (fluent)' },
            ].map(({ field, value }) => (
              <div key={field} className="flex gap-4 text-[12px]">
                <span className="font-mono min-w-[88px] shrink-0 text-muted2">
                  {field}
                </span>
                <span className="text-muted">{value}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 border-t border-border">
            {[
              { label: 'Experience', value: '5y+' },
              { label: 'AI Tools Shipped', value: '19+' },
              { label: 'GCC Clients', value: '6+' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`px-4 py-3.5 bg-bg ${i < 2 ? 'border-r border-border' : ''}`}
              >
                <div className="text-[9px] uppercase tracking-[0.1em] mb-1.5 text-muted2">
                  {label}
                </div>
                <div className="text-xl font-semibold leading-none text-accent">
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
