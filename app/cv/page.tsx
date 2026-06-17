import type { Metadata } from 'next'
import { PrintButton } from './print-button'
import { ExperienceTabs } from './experience-tabs'

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

        body { font-family: 'Inter', sans-serif; background: #edf0f4; color: #1a1a1a; }

        .cv-root {
          display: flex;
          max-width: 960px;
          margin: 0 auto;
          font-size: 11.5px;
          line-height: 1.5;
        }

        /* ── LEFT SIDEBAR ── */
        .sidebar {
          width: 230px;
          min-width: 230px;
          background: #1e2a38;
          color: #c8d4de;
          padding: 28px 20px;
        }

        .sidebar-name {
          font-size: 22px;
          font-weight: 700;
          color: #f0f4f8;
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
          letter-spacing: 0.13em;
          color: #7eb3d8;
          text-transform: uppercase;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .portfolio-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #2d5a8e;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          padding: 9px 14px;
          border-radius: 6px;
          margin-bottom: 20px;
          letter-spacing: 0.01em;
          transition: background 0.15s;
        }

        .portfolio-btn:hover { background: #3a6fa5; }

        .sidebar-section {
          margin-bottom: 16px;
        }

        .sidebar-section-label {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6a8aaa;
          border-bottom: 1px solid #2d3f52;
          padding-bottom: 4px;
          margin-bottom: 8px;
        }

        .sidebar p {
          font-size: 10.5px;
          color: #b0c4d4;
          margin-bottom: 2px;
        }

        .sidebar a {
          color: #b0c4d4;
          text-decoration: none;
        }

        .sidebar a:hover { color: #a8d4f0; }

        .stack-group {
          margin-bottom: 7px;
        }

        .stack-group-title {
          font-size: 9px;
          font-weight: 600;
          color: #7eb3d8;
          margin-bottom: 2px;
        }

        .stack-group p {
          font-size: 10px;
          color: #8aabbd;
          line-height: 1.45;
        }

        .cert-item {
          font-size: 10px;
          color: #9ab4c8;
          margin-bottom: 4px;
          padding-left: 10px;
          position: relative;
        }

        .cert-item::before {
          content: '·';
          position: absolute;
          left: 0;
          color: #7eb3d8;
          font-weight: 700;
        }

        .lang-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .lang-name { font-weight: 600; color: #e0eaf4; }
        .lang-level { color: #6a8aaa; }

        /* ── MAIN CONTENT ── */
        .main {
          flex: 1;
          padding: 28px 30px;
          background: #fff;
        }

        .summary {
          font-size: 11.5px;
          line-height: 1.65;
          color: #2a2a2a;
          margin-bottom: 18px;
        }

        .summary strong { font-weight: 600; }

        .section {
          margin-bottom: 16px;
        }

        .section-heading {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2d5a8e;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 3px;
          margin-bottom: 9px;
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
          margin-bottom: 10px;
        }

        .project-name {
          font-weight: 700;
          font-size: 11.5px;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: #2d5a8e;
          color: #fff;
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
        .suite-label { font-weight: 600; color: #2d5a8e; }

        @media print {
          .no-print { display: none !important; }
          .cv-root { max-width: 100%; }
          body { background: #fff; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          @page { margin: 0; size: A4; }
        }
      `}</style>

      <div className="cv-root">
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="sidebar-name">
            Mohammed<em>Al Sarraj</em>
          </div>
          <div className="sidebar-title">Data Governance &amp; AI Engineering</div>

          <a className="portfolio-btn" href="https://moealsarraj.com" target="_blank" rel="noopener noreferrer">
            🌐 View Portfolio
          </a>

          <div className="sidebar-section">
            <div className="sidebar-section-label">Contact</div>
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
            <div className="cert-item">Data Governance &amp; Privacy: Governance for Analytics</div>
            <div className="cert-item">Data Governance &amp; Privacy: Data Democratization</div>
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
          <p className="summary">
            <strong>Senior Data Governance Engineer</strong> with five years at BBI Consultancy across GCC government clients:
            Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police, and DCT. Core tools are Informatica CDGC, EDC, and Axon,
            plus Python for anything custom. Outside client work, I&apos;ve built <strong>19+ AI tools</strong> across four product
            suites, plus <strong>Manarah</strong> — a four-part data platform with its own LLM agent, built as a practical alternative
            to Informatica for GCC regulatory environments. Bilingual in Arabic and English, with most of my work touching Arabic NLP,
            RTL interfaces, and local compliance requirements.
          </p>

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

          <div className="section">
            <div className="section-heading">Personal Projects · 2025 to 2026</div>

            <div style={{ marginBottom: '9px' }}>
              <div className="project-name">
                Manarah Suite <span className="badge">Flagship</span>
              </div>
              <p className="project-desc">
                A four-part data platform built as a practical alternative to Informatica.{' '}
                <strong>Wasit</strong> handles ETL with 30+ connectors, <strong>Mizan</strong> runs data quality scoring,{' '}
                <strong>Amin</strong> manages governance and catalog, and <strong>Manarah AI</strong> is a chat interface into all three.
                UAE PDPL compliance controls sit inside each pipeline step. Live at moealsarraj.com — demo / demo123.
              </p>
            </div>

            <div>
              <div className="project-name">
                Public AI Tools <span style={{ fontSize: '9.5px', color: '#888', fontWeight: 400 }}>19 Tools · 4 Suites</span>
              </div>
              <p className="project-desc">
                <span className="suite-label">BizIntel</span> (7) — Competitive Intel, Persona Studio, Meeting Distiller, Contract Lens, CSV Storyteller, Resume Match, Resume Forge.{' '}
                <span className="suite-label">DevKit</span> (6) — Schema Detective, Test Forge, SQL Whisperer, Doc Forge, Changelog AI, Git Narrator.{' '}
                <span className="suite-label">AI Lab</span> (4) — Prompt Bench, Prompt Shield, Agent Builder, Arabic Bench.{' '}
                <span className="suite-label">ContentForge</span> (2) — Content Repurposer, AI Debate Arena.{' '}
                All four suites are live and publicly accessible. Source on GitHub.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-heading">Experience</div>

            <div className="job-header">
              <span className="job-title">Senior Data Governance Engineer <em>at BBI Consultancy</em></span>
              <span className="job-meta">2021 – present · Dubai</span>
            </div>
            <div className="job-subtitle">BBI is a boutique GCC data governance consultancy. As lead technical consultant, I was the primary delivery resource on all six engagements below — from architecture through implementation and enablement.</div>

            <ExperienceTabs />
          </div>
        </main>
      </div>

      <PrintButton />
    </>
  )
}
