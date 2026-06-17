import type { Metadata } from 'next'
import { PrintButton } from './print-button'

export const metadata: Metadata = {
  title: 'CV — Mohammed Al Sarraj',
  description: 'Senior Data Governance Engineer — Mohammed Al Sarraj',
}

export default function CVPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Inter', sans-serif; background: #fff; color: #1a1a1a; }

        .cv-root {
          display: flex;
          min-height: 100vh;
          max-width: 960px;
          margin: 0 auto;
          font-size: 13px;
          line-height: 1.55;
        }

        /* ── LEFT SIDEBAR ── */
        .sidebar {
          width: 260px;
          min-width: 260px;
          background: #0c0c0f;
          color: #d0d0d0;
          padding: 40px 28px;
        }

        .sidebar-name {
          font-size: 30px;
          font-weight: 700;
          color: #f0f0f0;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .sidebar-name em {
          font-style: italic;
          font-weight: 300;
          display: block;
        }

        .sidebar-title {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #f59e0b;
          text-transform: uppercase;
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .sidebar-section {
          margin-bottom: 24px;
        }

        .sidebar-section-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          border-bottom: 1px solid #2a2a30;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }

        .sidebar p {
          font-size: 12px;
          color: #c0c0c0;
          margin-bottom: 3px;
        }

        .sidebar a {
          color: #c0c0c0;
          text-decoration: none;
        }

        .sidebar a:hover { color: #f59e0b; }

        .stack-group {
          margin-bottom: 10px;
        }

        .stack-group-title {
          font-size: 10px;
          font-weight: 600;
          color: #f59e0b;
          margin-bottom: 3px;
        }

        .stack-group p {
          font-size: 11px;
          color: #aaa;
          line-height: 1.5;
        }

        .cert-item {
          font-size: 11px;
          color: #aaa;
          margin-bottom: 6px;
          padding-left: 10px;
          position: relative;
        }

        .cert-item::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #f59e0b;
        }

        .lang-row {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .lang-name { font-weight: 600; color: #f0f0f0; }
        .lang-level { color: #888; }

        /* ── MAIN CONTENT ── */
        .main {
          flex: 1;
          padding: 40px 36px;
          background: #fff;
        }

        .summary {
          font-size: 13px;
          line-height: 1.65;
          color: #2a2a2a;
          margin-bottom: 28px;
          text-align: justify;
        }

        .summary strong { font-weight: 600; }

        .section {
          margin-bottom: 26px;
        }

        .section-heading {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f59e0b;
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: 4px;
          margin-bottom: 12px;
        }

        .edu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .edu-degree { font-weight: 600; font-size: 13px; }
        .edu-school { color: #555; font-size: 12px; }
        .edu-years { color: #888; font-size: 12px; white-space: nowrap; }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 3px;
        }

        .job-title { font-weight: 700; font-size: 13px; }
        .job-title em { font-style: italic; font-weight: 400; color: #555; }
        .job-meta { font-size: 11px; color: #888; white-space: nowrap; }

        .job-subtitle {
          font-size: 12px;
          color: #555;
          font-style: italic;
          margin-bottom: 8px;
        }

        .client-name {
          font-weight: 600;
          font-size: 12.5px;
          color: #1a1a1a;
          margin-top: 10px;
          margin-bottom: 5px;
        }

        .bullets { list-style: none; padding: 0; }

        .bullets li {
          font-size: 12px;
          color: #333;
          padding-left: 14px;
          position: relative;
          margin-bottom: 4px;
          line-height: 1.5;
        }

        .bullets li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #f59e0b;
          font-weight: 700;
        }

        .project-name {
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: #f59e0b;
          color: #0c0c0f;
          padding: 2px 6px;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .project-desc {
          font-size: 12px;
          color: #444;
          line-height: 1.55;
          margin-bottom: 4px;
        }

        .project-desc strong { font-weight: 600; color: #1a1a1a; }

        .print-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #f59e0b;
          color: #0c0c0f;
          border: none;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 4px 16px rgba(245,158,11,0.4);
        }

        @media print {
          .print-btn { display: none; }
          .cv-root { max-width: 100%; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          @page { margin: 0; size: A4; }
        }
      `}</style>

      <div className="cv-root">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="sidebar-name">
            Mohammed<em>Al Sarraj</em>
          </div>
          <div className="sidebar-title">Data Governance &amp; AI</div>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Contact</div>
            <p><a href="https://moealsarraj.com" target="_blank" rel="noopener noreferrer">moealsarraj.com ↗</a></p>
            <p><a href="https://github.com/moealsarraj" target="_blank" rel="noopener noreferrer">github.com/moealsarraj ↗</a></p>
            <p><a href="mailto:moealsarraj@gmail.com">moealsarraj@gmail.com</a></p>
            <p>+971 50 494 4664</p>
            <p>Dubai, UAE</p>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Core Stack</div>

            <div className="stack-group">
              <div className="stack-group-title">Governance</div>
              <p>Informatica CDGC, EDC, Axon, Analyst; MIMB / MITI bridges</p>
            </div>

            <div className="stack-group">
              <div className="stack-group-title">AI &amp; LLM</div>
              <p>Anthropic Claude API, Claude Code, MCP, agentic workflows, RAG, prompt engineering, LLM evaluation</p>
            </div>

            <div className="stack-group">
              <div className="stack-group-title">Languages</div>
              <p>Python, SQL, JavaScript / TypeScript, HTML / CSS, Bash</p>
            </div>

            <div className="stack-group">
              <div className="stack-group-title">Data &amp; BI</div>
              <p>Oracle, Hive, Tableau, Power BI metadata, Snowflake</p>
            </div>

            <div className="stack-group">
              <div className="stack-group-title">Security</div>
              <p>Kerberos (krb5.conf, keytab), JVM args, SSL/TLS, Hadoop principal auth</p>
            </div>

            <div className="stack-group">
              <div className="stack-group-title">Compliance</div>
              <p>DAMA-DMBOK, UAE PDPL, NDMO Controls (P1 to P3), Abu Dhabi Digital Transformation Policy</p>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Certifications</div>
            <div className="cert-item">CDMP Certified Data Management Professional, Associate</div>
            <div className="cert-item">DAMA Data Management Fundamentals, Practitioner</div>
            <div className="cert-item">Informatica Data Privacy Governance</div>
            <div className="cert-item">Data Governance &amp; Privacy, Foundation</div>
            <div className="cert-item">Snowflake SPN: Sales and Technical Sales</div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Languages</div>
            <div className="lang-row">
              <span className="lang-name">English</span>
              <span className="lang-level">Fluent</span>
            </div>
            <div className="lang-row">
              <span className="lang-name">Arabic</span>
              <span className="lang-level">Native</span>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="main">
          {/* Summary */}
          <p className="summary">
            <strong>Senior Data Governance Engineer</strong> with five years at BBI Consultancy, working across
            GCC government clients: Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police, and
            DCT. Core tools are Informatica CDGC, EDC, and Axon, plus Python for anything custom.
            Outside client work, I&apos;ve built <strong>19+ AI tools</strong> across four product suites, plus Manarah, a
            four-part data platform with its own LLM agent, written as a practical alternative to
            Informatica for GCC regulatory environments. Bilingual in Arabic and English, with most
            of my work touching Arabic NLP, RTL interfaces, and local compliance requirements.
          </p>

          {/* Education */}
          <div className="section">
            <div className="section-heading">Education</div>
            <div className="edu-row">
              <div>
                <span className="edu-degree">B.Sc. in Software Engineering</span>
                <span className="edu-school"> · Al Ain University, UAE</span>
              </div>
              <span className="edu-years">2017 to 2021</span>
            </div>
          </div>

          {/* Projects — moved above Experience */}
          <div className="section">
            <div className="section-heading">Projects · 2025 to 2026</div>

            <div style={{ marginBottom: '14px' }}>
              <div className="project-name">
                Manarah Suite <span className="badge">Flagship</span>
              </div>
              <p className="project-desc">
                A four-part data platform I built as a practical alternative to Informatica. <strong>Wasit</strong> handles ETL with 30+ connectors,{' '}
                <strong>Mizan</strong> runs data quality scoring, <strong>Amin</strong> manages governance and catalog, and <strong>Manarah AI</strong> is a chat
                interface into all three. Compliance controls for UAE PDPL and local data regulations sit inside each pipeline step, not layered on at the end.
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div className="project-name">
                Public AI Tools Portfolio <span style={{ fontSize: '10px', color: '#888', fontWeight: 400 }}>19 Tools · 4 Suites</span>
              </div>
              <p className="project-desc">
                <strong style={{ color: '#f59e0b' }}>BizIntel</strong> (7): Competitive Intel, Persona Studio, Meeting Distiller, Contract Lens, CSV Storyteller, Resume Match, Resume Forge.
              </p>
              <p className="project-desc">
                <strong style={{ color: '#f59e0b' }}>DevKit</strong> (6): Schema Detective, Test Forge, SQL Whisperer, Doc Forge, Changelog AI, Git Narrator.
              </p>
              <p className="project-desc">
                <strong style={{ color: '#f59e0b' }}>AI Lab</strong> (4): Prompt Bench, Prompt Shield (red-team for injection), Agent Builder, Arabic Bench.
              </p>
              <p className="project-desc">
                <strong style={{ color: '#f59e0b' }}>ContentForge</strong> (2): Content Repurposer, AI Debate Arena.
              </p>
            </div>

            <div>
              <div className="project-name">UAE Legal Contract Analyzer &amp; Localisation CLIs</div>
              <p className="project-desc">
                LLM contract reviewer that cross-references UAE federal and emirate law, flags gaps, and
                proposes corrected language. Plus two CLIs: one converts any LTR project into a fully functional
                RTL Arabic build; another transforms web projects into native mobile apps.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="section">
            <div className="section-heading">Experience</div>

            <div className="job-header">
              <span className="job-title">Senior Data Governance Engineer <em>at BBI Consultancy</em></span>
              <span className="job-meta">2021 to present · Dubai</span>
            </div>
            <div className="job-subtitle">Lead consultant on multi-year governance engagements for GCC government bodies and financial regulators.</div>

            {/* ADEO first */}
            <div className="client-name">Abu Dhabi Executive Office (ADEO), UAE Federal · 2021 to 2024</div>
            <ul className="bullets">
              <li>Came in when ADEO had no DG framework at all. Over three years, built out the full stack in production: ETL pipelines, data quality rules, a business glossary, a data catalog, and a marketplace for cross-entity sharing. DQ scoring runs on live data.</li>
              <li>Designed the federal Data Marketplace, used by <strong>30+ government entities</strong> clustered by operational mandate. Cross-entity data visibility went up <strong>60%</strong>. Structured around the UAE National Data Strategy.</li>
              <li>Led the CDGC rollout with a cross-functional team. Cut data access bottlenecks by <strong>40%</strong> and finished ahead of schedule.</li>
            </ul>

            <div className="client-name">Qatar Central Bank (QCB)</div>
            <ul className="bullets">
              <li>Built QCB&apos;s business glossary from scratch in Informatica Axon. The foundational work was running sessions with stakeholders to establish the line between a business glossary term (meaning that applies across the organisation, independent of any system) and an attribute-level definition (documentation tied to a specific column or field). Getting that distinction right is what keeps a glossary usable over time. Integrated the finished glossary into QCB&apos;s Tableau environment so users could trace reports back to their underlying KPIs and governing terms.</li>
            </ul>

            <div className="client-name">Dubai Police · Department of Culture &amp; Tourism Abu Dhabi · SCAD</div>
            <ul className="bullets">
              <li>Dubai Police: mapped <strong>200+ critical data elements</strong> and pulled 10+ legacy databases into a single catalog. Manual data reconciliation dropped by 30%.</li>
              <li>DCT: redesigned the governance operating model, then ran hands-on Axon and EDC training for 50+ stakeholders, timed to support the Abu Dhabi Digital Transformation Policy rollout.</li>
              <li>SCAD: tightened data quality controls on statistical outputs, reaching 95% accuracy and bringing data handling practices in line with GDPR requirements.</li>
            </ul>
          </div>
        </main>
      </div>

      <PrintButton />
    </>
  )
}
