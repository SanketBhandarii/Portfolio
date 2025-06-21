"use client"

import { useEffect, useState } from "react"
import Hero from "@/sections/hero"
import About from "@/sections/about"
import Experience from "@/sections/experience"
import Projects from "@/sections/projects"
import Contact from "@/sections/contact"
import Navigation from "@/components/navigation"
import { useScrollSections } from "@/hooks/use-scroll-sections"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { currentSection } = useScrollSections()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-[#0f0f0f] text-white overflow-x-hidden">
      <Navigation currentSection={currentSection} />
      <main className="relative">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <Contact />
      </main>
    </div>
  )
}
