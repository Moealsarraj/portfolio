import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV — Mohammed Al Sarraj',
  description: 'Senior Data Governance Engineer — Mohammed Al Sarraj',
}

export default function CVPage() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a2e', display: 'flex', flexDirection: 'column' }}>
      <embed
        src="/cv.pdf"
        type="application/pdf"
        style={{ flex: 1, width: '100%', border: 'none' }}
      />
    </div>
  )
}
