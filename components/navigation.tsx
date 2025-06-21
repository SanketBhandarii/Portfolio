"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentSection: string
}

export default function Navigation({ currentSection }: NavigationProps) {
  const sections = [
    { id: "hero", label: "Start" },
    { id: "about", label: "Mind" },
    { id: "experience", label: "Journey" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Connect" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "contact") {
      const event = new CustomEvent("openContact")
      window.dispatchEvent(event)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 opacity-0 animate-fade-in">
      <div className="bg-[#111]/80 backdrop-blur-md border border-[#1a1a1a] rounded-full px-3 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center space-x-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`relative px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                currentSection === section.id
                  ? "text-white bg-[#1a1a1a] rounded-full"
                  : "text-gray-400 hover:text-white rounded-full"
              }`}
            >
              <span className="relative z-10">{section.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
