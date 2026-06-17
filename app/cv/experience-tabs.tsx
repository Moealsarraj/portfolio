'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'adeo',
    label: 'ADEO',
    subtitle: 'Abu Dhabi Executive Office · UAE Federal · 2021 – 2024',
    bullets: [
      <>Inherited a blank slate — ADEO had no DG framework at all. Over three years, delivered the full stack in production: ETL pipelines, data quality rules engine, business glossary, enterprise data catalog, and end-to-end metadata lineage. Aligned to the UAE National Data Strategy.</>,
      <>Architected the UAE Federal Data Marketplace, enabling secure data sharing across government entities and improving cross-entity data visibility by <strong>60%</strong>.</>,
      <>Led a cross-functional team to redesign and deploy the full CDGC solution. Cut data access bottlenecks by <strong>40%</strong> and delivered <strong>100%</strong> of ADEO&apos;s requirements ahead of schedule.</>,
      <>Ran <strong>15+ executive enablement sessions</strong> to drive adoption of governance tools across leadership — covering everything from data ownership concepts to hands-on platform walkthroughs. Built the data-driven culture from the top down.</>,
    ],
  },
  {
    id: 'qcb',
    label: 'QCB',
    subtitle: 'Qatar Central Bank',
    bullets: [
      <>Ran working sessions with QCB business leads to establish a clear line between organisation-wide business terms and attribute-level definitions — the distinction that separates a usable glossary from one that becomes noise. Built the full enterprise glossary in Informatica Axon: hundreds of governed terms, ownership assigned, review cycles set.</>,
      <>Integrated the finished glossary into QCB&apos;s Tableau environment so analysts could trace any figure back to its governing term and underlying KPI definition.</>,
    ],
  },
  {
    id: 'dp',
    label: 'Dubai Police',
    subtitle: 'Dubai Police — General Headquarters',
    bullets: [
      <>Pioneered a scalable DG framework across Dubai Police — an organisation with multiple specialised departments, siloed systems, and no shared data language. Mapped <strong>200+ critical data elements</strong> that had never been formally defined, classified, or owned.</>,
      <>Integrated <strong>10+ legacy databases</strong> into a single unified catalog with cross-system traceability and ownership assigned at the field level. Demonstrated tangible ROI through governance use cases, resulting in a <strong>30%</strong> reduction in manual data reconciliation efforts across departments.</>,
    ],
  },
  {
    id: 'dct',
    label: 'DCT Abu Dhabi',
    subtitle: 'Department of Culture & Tourism — Abu Dhabi',
    bullets: [
      <>Re-engineered DCT&apos;s DG structure from the ground up — roles, decision rights, escalation paths, and the operating processes that make governance actually run. Mapped the model to Abu Dhabi&apos;s Digital Transformation Policy so DCT could demonstrate framework-level compliance.</>,
      <>Orchestrated an enterprise-wide training programme on Informatica Axon and EDC, empowering <strong>50+ stakeholders</strong> across business and IT to leverage metadata for day-to-day decision-making.</>,
    ],
  },
  {
    id: 'scad',
    label: 'SCAD',
    subtitle: 'Statistics Centre — Abu Dhabi',
    bullets: [
      <>SCAD&apos;s statistical outputs feed directly into government planning, policy decisions, and public reporting — accuracy is non-negotiable. Audited the full statistical production pipeline and optimised data quality controls at each stage of the process, replacing end-of-line checks with validation embedded throughout.</>,
      <>Achieved <strong>95% accuracy</strong> in statistical reporting and brought SCAD&apos;s data handling practices into full GDPR compliance — giving the centre a defensible governance posture for its published statistical operations.</>,
    ],
  },
  {
    id: 'kanoo',
    label: 'YBA Kanoo',
    subtitle: 'Yusuf Bin Ahmed Kanoo Group — Bahrain',
    bullets: [
      <>Deployed a tailored Informatica EDC environment for YBA Kanoo — one of the oldest conglomerates in the Gulf, spanning shipping, travel, industrial, and real estate, each with its own fragmented data landscape. The engagement came in with persistent unresolved scanning issues blocking the project.</>,
      <>Diagnosed and resolved <strong>100%</strong> of the outstanding scanning issues, stabilised the EDC environment, and met <strong>100%</strong> of client SLA requirements — delivered within <strong>3 months</strong>.</>,
    ],
  },
]

export function ExperienceTabs() {
  const [active, setActive] = useState('adeo')

  return (
    <div>
      <div style={{ display: 'flex', gap: '3px', marginBottom: '10px', flexWrap: 'wrap' }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="no-print"
            style={{
              padding: '5px 11px',
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'inherit',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '4px',
              background: active === tab.id ? '#2d5a8e' : '#edf2f7',
              color: active === tab.id ? '#fff' : '#4a5568',
              transition: 'background 0.15s, color 0.15s',
              whiteSpace: 'nowrap',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`exp-panel exp-panel-${tab.id}`}
          style={{ display: active === tab.id ? 'block' : 'none' }}
        >
          <div style={{ fontWeight: 600, fontSize: '11px', color: '#2d5a8e', marginBottom: '5px' }}>
            {tab.subtitle}
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tab.bullets.map((bullet, i) => (
              <li key={i} style={{ fontSize: '11px', color: '#333', paddingLeft: '12px', position: 'relative', marginBottom: '5px', lineHeight: 1.6 }}>
                <span style={{ position: 'absolute', left: 0, color: '#2d5a8e', fontWeight: 700 }}>›</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <style>{`
        @media print {
          .exp-panel { display: block !important; margin-bottom: 8px; }
        }
      `}</style>
    </div>
  )
}
