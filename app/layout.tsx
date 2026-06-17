import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Mohammed Al Sarraj — Data Governance & AI',
  description:
    'Senior Data Governance Engineer with 5 years across GCC government bodies. Builder of Manarah — an AI-native alternative to the Informatica stack.',
  openGraph: {
    title: 'Mohammed Al Sarraj — Data Governance & AI',
    description:
      'Senior Data Governance Engineer. 5 years across Qatar Central Bank, Abu Dhabi Executive Office, Dubai Police. Builder of Manarah.',
    url: 'https://moealsarraj.com',
    siteName: 'Mohammed Al Sarraj',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Al Sarraj — Data Governance & AI',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
