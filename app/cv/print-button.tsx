'use client'

export function PrintButton() {
  return (
    <button
      className="no-print"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: '#2d5a8e',
        color: '#fff',
        border: 'none',
        padding: '10px 22px',
        borderRadius: '999px',
        fontSize: '13px',
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'inherit',
        boxShadow: '0 4px 16px rgba(45,90,142,0.35)',
        letterSpacing: '0.02em',
      }}
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  )
}
