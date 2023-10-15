import About from '@/components/about'
import Contact from '@/components/contact'
import Main from '@/components/main'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
