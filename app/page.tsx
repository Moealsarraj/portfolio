import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { ManarahFeature } from '@/components/manarah-feature'
import { SectionDataTools } from '@/components/section-data-tools'
import { SectionAiTools } from '@/components/section-ai-tools'
import { SectionOther } from '@/components/section-other'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ManarahFeature />
        <SectionDataTools />
        <SectionAiTools />
        <SectionOther />
      </main>
      <Footer />
    </>
  )
}
