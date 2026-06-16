'use client'

export function PrintButton() {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: '#f59e0b',
        color: '#0c0c0f',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '999px',
        fontSize: '13px',
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'inherit',
        boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
      }}
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  )
}
