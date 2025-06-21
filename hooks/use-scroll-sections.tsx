"use client"

import { useState, useEffect } from "react"

export function useScrollSections() {
  const [currentSection, setCurrentSection] = useState("hero")

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects"]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return { currentSection }
}
