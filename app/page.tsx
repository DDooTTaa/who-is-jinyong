import SiteShell from '@/components/SiteShell'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Community from '@/components/Community'
import { Education, Patent } from '@/components/PatentEducation'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <SiteShell>
      <About />
      <Skills />
      <Projects />
      <Patent />
      <Education />
      <Community />
      <Contact />
    </SiteShell>
  )
}
