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
          max-width: 960px;
          margin: 0 auto;
          font-size: 11.5px;
          line-height: 1.45;
        }

        /* ── LEFT SIDEBAR ── */
        .sidebar {
          width: 230px;
          min-width: 230px;
          background: #0c0c0f;
          color: #d0d0d0;
          padding: 26px 20px;
        }

        .sidebar-name {
          font-size: 22px;
          font-weight: 700;
          color: #f0f0f0;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .sidebar-name em {
          font-style: italic;
          font-weight: 300;
          display: block;
        }

        .sidebar-title {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #f59e0b;
          text-transform: uppercase;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .sidebar-section {
          margin-bottom: 16px;
        }

        .sidebar-section-label {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
          border-bottom: 1px solid #2a2a30;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }

        .sidebar p {
          font-size: 10.5px;
          color: #c0c0c0;
          margin-bottom: 2px;
        }

        .sidebar a {
          color: #c0c0c0;
          text-decoration: none;
        }

        .sidebar a:hover { color: #f59e0b; }

        .stack-group {
          margin-bottom: 7px;
        }

        .stack-group-title {
          font-size: 9px;
          font-weight: 600;
          color: #f59e0b;
          margin-bottom: 2px;
        }

        .stack-group p {
          font-size: 10px;
          color: #aaa;
          line-height: 1.45;
        }

        .cert-item {
          font-size: 10px;
          color: #aaa;
          margin-bottom: 4px;
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
          font-size: 11px;
          margin-bottom: 3px;
        }

        .lang-name { font-weight: 600; color: #f0f0f0; }
        .lang-level { color: #888; }

        /* ── MAIN CONTENT ── */
        .main {
          flex: 1;
          padding: 26px 28px;
          background: #fff;
        }

        .summary {
          font-size: 11.5px;
          line-height: 1.6;
          color: #2a2a2a;
          margin-bottom: 16px;
        }

        .summary strong { font-weight: 600; }

        .section {
          margin-bottom: 14px;
        }

        .section-heading {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f59e0b;
          border-bottom: 1px solid #e8e8e8;
          padding-bottom: 3px;
          margin-bottom: 8px;
        }

        .edu-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .edu-degree { font-weight: 600; font-size: 11.5px; }
        .edu-school { color: #555; font-size: 11px; }
        .edu-years { color: #888; font-size: 11px; white-space: nowrap; }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }

        .job-title { font-weight: 700; font-size: 12px; }
        .job-title em { font-style: italic; font-weight: 400; color: #555; }
        .job-meta { font-size: 10px; color: #888; white-space: nowrap; }

        .job-subtitle {
          font-size: 10.5px;
          color: #555;
          font-style: italic;
          margin-bottom: 6px;
        }

        .client-name {
          font-weight: 600;
          font-size: 11px;
          color: #1a1a1a;
          margin-top: 7px;
          margin-bottom: 3px;
        }

        .bullets { list-style: none; padding: 0; }

        .bullets li {
          font-size: 11px;
          color: #333;
          padding-left: 12px;
          position: relative;
          margin-bottom: 3px;
          line-height: 1.45;
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
          font-size: 11.5px;
          margin-bottom: 1px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: #f59e0b;
          color: #0c0c0f;
          padding: 1px 5px;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .project-desc {
          font-size: 11px;
          color: #444;
          line-height: 1.5;
          margin-bottom: 3px;
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
          .cv-root { width: 100%; height: 100%; max-width: 100%; overflow: visible; }
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
              <p>Claude API, Claude Code, MCP, agentic workflows, RAG, prompt engineering</p>
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
              <div className="stack-group-title">Compliance</div>
              <p>DAMA-DMBOK, UAE PDPL, NDMO Controls, Abu Dhabi Digital Transformation Policy</p>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Certifications</div>
            <div className="cert-item">CDMP — Associate</div>
            <div className="cert-item">DAMA Data Management Fundamentals</div>
            <div className="cert-item">Informatica Data Privacy Governance</div>
            <div className="cert-item">Data Governance &amp; Privacy, Foundation</div>
            <div className="cert-item">Snowflake SPN: Sales &amp; Technical Sales</div>
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
            <strong>Senior Data Governance Engineer</strong> with five years at BBI Consultancy across GCC government clients:
            Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police, and DCT. Core tools are Informatica CDGC, EDC, and Axon.
            Outside client work, I&apos;ve built <strong>19+ AI tools</strong> across four product suites, plus <strong>Manarah</strong> — a four-part
            data platform with its own LLM agent, built as a practical alternative to Informatica for GCC regulatory environments.
          </p>

          {/* Education */}
          <div className="section">
            <div className="section-heading">Education</div>
            <div className="edu-row">
              <div>
                <span className="edu-degree">B.Sc. in Software Engineering</span>
                <span className="edu-school"> · Al Ain University, UAE</span>
              </div>
              <span className="edu-years">2017 – 2021</span>
            </div>
          </div>

          {/* Projects */}
          <div className="section">
            <div className="section-heading">Projects · 2025 to 2026</div>

            <div style={{ marginBottom: '9px' }}>
              <div className="project-name">
                Manarah Suite <span className="badge">Flagship</span>
              </div>
              <p className="project-desc">
                Four-part data platform: <strong>Wasit</strong> (ETL, 30+ connectors), <strong>Mizan</strong> (data quality scoring),{' '}
                <strong>Amin</strong> (governance &amp; catalog), <strong>Manarah AI</strong> (LLM chat interface). UAE PDPL compliance
                controls built into each pipeline step, not bolted on at the end.
              </p>
            </div>

            <div style={{ marginBottom: '9px' }}>
              <div className="project-name">
                Public AI Tools <span style={{ fontSize: '9.5px', color: '#888', fontWeight: 400 }}>19 Tools · 4 Suites</span>
              </div>
              <p className="project-desc">
                <strong style={{ color: '#f59e0b' }}>BizIntel</strong> (7) — Competitive Intel, Persona Studio, Meeting Distiller, Contract Lens, CSV Storyteller, Resume Match/Forge.{' '}
                <strong style={{ color: '#f59e0b' }}>DevKit</strong> (6) — Schema Detective, Test Forge, SQL Whisperer, Doc Forge, Changelog AI, Git Narrator.{' '}
                <strong style={{ color: '#f59e0b' }}>AI Lab</strong> (4) — Prompt Bench, Prompt Shield, Agent Builder, Arabic Bench.{' '}
                <strong style={{ color: '#f59e0b' }}>ContentForge</strong> (2) — Content Repurposer, AI Debate Arena.
              </p>
            </div>

            <div>
              <div className="project-name">UAE Legal Contract Analyzer &amp; Localisation CLIs</div>
              <p className="project-desc">
                LLM contract reviewer cross-referencing UAE law. Two CLIs: one converts LTR projects to full RTL Arabic builds; another transforms web projects to native mobile apps.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="section">
            <div className="section-heading">Experience</div>

            <div className="job-header">
              <span className="job-title">Senior Data Governance Engineer <em>at BBI Consultancy</em></span>
              <span className="job-meta">2021 – present · Dubai</span>
            </div>
            <div className="job-subtitle">Lead consultant on multi-year governance engagements for GCC government bodies and financial regulators.</div>

            <div className="client-name">Abu Dhabi Executive Office (ADEO) · 2021 – 2024</div>
            <ul className="bullets">
              <li>Built ADEO&apos;s full governance stack from zero: ETL pipelines, data quality rules, business glossary, data catalog, and a federal Data Marketplace used by <strong>30+ government entities</strong>. Cross-entity data visibility up <strong>60%</strong>.</li>
              <li>Led the CDGC rollout. Cut data access bottlenecks by <strong>40%</strong> and finished ahead of schedule.</li>
            </ul>

            <div className="client-name">Qatar Central Bank (QCB)</div>
            <ul className="bullets">
              <li>Built QCB&apos;s business glossary in Informatica Axon — ran stakeholder sessions to establish the line between organisation-wide business terms and attribute-level definitions. Integrated with Tableau so users can trace reports back to governing KPIs.</li>
            </ul>

            <div className="client-name">Dubai Police · DCT Abu Dhabi · SCAD</div>
            <ul className="bullets">
              <li>Dubai Police: mapped <strong>200+ critical data elements</strong>, unified 10+ legacy databases into a single catalog, reduced manual reconciliation by 30%.</li>
              <li>DCT: redesigned the governance operating model; trained 50+ stakeholders on Axon and EDC for the Abu Dhabi Digital Transformation Policy rollout. SCAD: lifted statistical data quality accuracy to 95%.</li>
            </ul>
          </div>
        </main>
      </div>

      <PrintButton />
    </>
  )
}
