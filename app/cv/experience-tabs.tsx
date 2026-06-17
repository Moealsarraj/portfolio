'use client'
import { useState } from 'react'

const TABS = [
  {
    id: 'adeo',
    label: 'ADEO',
    subtitle: 'Abu Dhabi Executive Office · UAE Federal · 2021 – 2024',
    bullets: [
      <>Inherited a blank slate — ADEO had no data governance framework, no catalog, no quality controls, nothing. Over three years, designed and delivered the full stack in production: ETL pipelines, a data quality rules engine, a business glossary, an enterprise data catalog, and end-to-end metadata lineage covering every asset from ingestion to consumption.</>,
      <>Architected the UAE Federal Data Marketplace — the first cross-entity data sharing platform across Abu Dhabi government. Classified and onboarded assets from <strong>30+ entities</strong> clustered by operational mandate. Cross-entity data visibility improved by <strong>60%</strong>. The platform was structured around the UAE National Data Strategy and reviewed by federal digital authority stakeholders.</>,
      <>Led the full Informatica CDGC rollout — the most technically complex deployment on the engagement. Coordinated a cross-functional team across IT, legal, and business units. Cut data access request turnaround by <strong>40%</strong> and delivered ahead of the contractual deadline.</>,
    ],
  },
  {
    id: 'qcb',
    label: 'QCB',
    subtitle: 'Qatar Central Bank',
    bullets: [
      <>Took on one of the hardest parts of any governance programme — getting business stakeholders to agree on what their data actually means. Ran a series of working sessions with QCB business leads and data owners to establish a clear, enforceable distinction between organisation-wide business terms (definitions that apply across the bank regardless of system) and attribute-level definitions (documentation tied to a specific column or field). Without that distinction, glossaries become noise; getting it right is what makes them usable.</>,
      <>Built QCB&apos;s full enterprise business glossary in Informatica Axon from those sessions — hundreds of governed terms, ownership assigned, review cycles set. Integrated the finished glossary into QCB&apos;s Tableau environment so analysts and report consumers could trace any figure back through to its governing term and the KPI definition it sits under.</>,
    ],
  },
  {
    id: 'dp',
    label: 'Dubai Police',
    subtitle: 'Dubai Police — General Headquarters',
    bullets: [
      <>Undertook one of the most complex data mapping exercises in UAE law enforcement. Dubai Police operates across multiple specialised departments — each with its own systems, data standards, and no shared language for what critical data elements are. Mapped <strong>200+ CDEs</strong> across departments, many undocumented, rationalised into a governed catalog with ownership, classification, and sensitivity labels applied.</>,
      <>Consolidated <strong>10+ legacy databases</strong> — many siloed with no lineage documentation — into a single unified catalog with cross-system traceability. Manual data reconciliation across departments dropped by <strong>30%</strong> within the first six months post-implementation.</>,
    ],
  },
  {
    id: 'dct',
    label: 'DCT Abu Dhabi',
    subtitle: 'Department of Culture & Tourism — Abu Dhabi',
    bullets: [
      <>Redesigned DCT&apos;s data governance operating model end-to-end — not just policies on paper, but roles, responsibilities, decision rights, escalation paths, and the processes that make governance actually run day to day. Mapped the model to the Abu Dhabi Digital Transformation Policy requirements so DCT could demonstrate compliance at the framework level, not just in individual data assets.</>,
      <>Immediately followed the model design with hands-on delivery: ran intensive Axon and Informatica EDC training sessions for <strong>50+ stakeholders</strong> across business and IT — translating governance concepts into the practical day-to-day workflows each team would own. The training was timed directly to the policy rollout deadline.</>,
    ],
  },
  {
    id: 'scad',
    label: 'SCAD',
    subtitle: 'Statistics Centre — Abu Dhabi',
    bullets: [
      <>Statistical outputs published by SCAD feed into government planning, policy decisions, and public reporting — accuracy is non-negotiable. Audited and tightened the data quality controls across SCAD&apos;s statistical production pipeline, implementing validation rules at each stage of the process rather than as a final check before publication.</>,
      <>Lifted overall data accuracy to <strong>95%</strong> across monitored outputs. Brought SCAD&apos;s data handling practices into alignment with GDPR-equivalent requirements, giving the centre a defensible governance posture for its statistical operations.</>,
    ],
  },
  {
    id: 'kanoo',
    label: 'Kanoo Bahrain',
    subtitle: 'Yusuf Bin Ahmed Kanoo Group — Bahrain',
    bullets: [
      <>Delivered a data governance and catalog implementation for one of the oldest and largest family conglomerates in the Gulf. Kanoo operates across shipping, travel, industrial, and real estate — each vertical with its own data landscape, systems, and terminology. The challenge was establishing shared governance standards across business units that had never been asked to operate under a common data framework.</>,
      <>Designed and deployed an enterprise data catalog covering critical data across key business lines, with data classification, ownership assignment, and lineage documentation. Established the governance operating model and ran stakeholder sessions to get business owners across verticals aligned on definitions and accountability.</>,
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
