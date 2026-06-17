'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'adeo',
    label: 'ADEO',
    subtitle: 'Abu Dhabi Executive Office · 2021 – 2024',
    bullets: [
      <>Came in when ADEO had no DG framework at all. Over three years, built out the full stack in production: ETL pipelines, data quality rules, a business glossary, a data catalog, and a metadata lineage model covering the full asset lifecycle.</>,
      <>Designed the federal Data Marketplace, used by <strong>30+ government entities</strong> clustered by operational mandate. Cross-entity data visibility up <strong>60%</strong>. Structured around the UAE National Data Strategy.</>,
      <>Led the CDGC rollout with a cross-functional team. Cut data access bottlenecks by <strong>40%</strong> and finished ahead of schedule.</>,
    ],
  },
  {
    id: 'qcb',
    label: 'QCB',
    subtitle: 'Qatar Central Bank',
    bullets: [
      <>Built QCB&apos;s business glossary from scratch in Informatica Axon. The core work was running stakeholder sessions to draw a clear line between organisation-wide business terms and attribute-level definitions — getting that distinction right is what keeps a glossary usable over time.</>,
      <>Integrated the finished glossary into QCB&apos;s Tableau environment so analysts could trace reports back to their governing KPIs and business terms.</>,
    ],
  },
  {
    id: 'dp',
    label: 'Dubai Police · DCT · SCAD',
    subtitle: 'Multiple GCC entities',
    bullets: [
      <>Dubai Police: mapped <strong>200+ critical data elements</strong> and pulled 10+ legacy databases into a unified catalog. Manual data reconciliation dropped by 30%.</>,
      <>DCT: redesigned the governance operating model and delivered hands-on Axon and EDC training for 50+ stakeholders, timed to the Abu Dhabi Digital Transformation Policy rollout.</>,
      <>SCAD: tightened data quality controls on statistical outputs, reaching 95% accuracy and bringing data handling practices in line with GDPR requirements.</>,
    ],
  },
]

export function ExperienceTabs() {
  const [active, setActive] = useState('adeo')

  return (
    <div>
      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '10px', flexWrap: 'wrap' }}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="no-print"
            style={{
              padding: '5px 12px',
              fontSize: '10.5px',
              fontWeight: 600,
              fontFamily: 'inherit',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '4px',
              background: active === tab.id ? '#2d5a8e' : '#edf2f7',
              color: active === tab.id ? '#fff' : '#4a5568',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panels — all visible on print, only active visible on screen */}
      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={`exp-panel exp-panel-${tab.id}`}
          style={{ display: active === tab.id ? 'block' : 'none' }}
        >
          <div style={{ fontWeight: 600, fontSize: '11px', color: '#1a1a1a', marginBottom: '4px' }}>
            {tab.subtitle}
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tab.bullets.map((bullet, i) => (
              <li key={i} style={{ fontSize: '11px', color: '#333', paddingLeft: '12px', position: 'relative', marginBottom: '4px', lineHeight: 1.55 }}>
                <span style={{ position: 'absolute', left: 0, color: '#2d5a8e', fontWeight: 700 }}>›</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Print-only: show all panels */}
      <style>{`
        @media print {
          .exp-panel { display: block !important; margin-bottom: 8px; }
          .exp-panel .print-client-label { display: block; }
        }
      `}</style>
    </div>
  )
}
