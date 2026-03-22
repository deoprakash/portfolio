import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleBackground from './components/ParticleBackground'
import MotionSection from './components/MotionSection'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  typingItems,
  heroSummary,
  aboutSummary,
  contactInfo,
  stats,
  education,
  publication,
  skills,
  experiences,
  projects,
} from './data/portfolioData'

export default function App() {
  const resumePdf = 'https://drive.google.com/uc?export=download&id=1pKipdzW1oxGs1GUTiH3uL16FoybX_3iE'
  const contact = useMemo(() => contactInfo, [])
  const { scrollY } = useScroll()
  const heroGlow = useTransform(scrollY, [0, 500], ['0%', '30%'])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04060f] text-white">
      <ParticleBackground />

      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="floating-node absolute left-[10%] top-[20%]" />
        <div className="floating-node absolute right-[12%] top-[25%]" />
        <div className="floating-node absolute left-[35%] bottom-[15%]" />
        <div className="floating-node absolute right-[30%] bottom-[25%]" />
      </div>

      <motion.div
        className="absolute -z-10 left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[120px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 opacity-70"
        style={{ translateY: heroGlow }}
      />

      <Header resumePdf={resumePdf} />

      <main className="container-max pb-24">
        <MotionSection id="hero" className="pt-20">
          <Hero typingItems={typingItems} summary={heroSummary} resumePdf={resumePdf} />
        </MotionSection>

        <MotionSection id="about" className="mt-20">
          <About summary={aboutSummary} stats={stats} education={education} publication={publication} />
        </MotionSection>

        <MotionSection id="skills" className="mt-20">
          <Skills skills={skills} />
        </MotionSection>

        <MotionSection id="experience" className="mt-20">
          <Experience experiences={experiences} />
        </MotionSection>

        <MotionSection id="projects" className="mt-20">
          <Projects projects={projects} />
        </MotionSection>

        <MotionSection id="contact" className="mt-20">
          <Contact contact={contact} />
        </MotionSection>
      </main>

      <Footer contact={contact} />
    </div>
  )
}
