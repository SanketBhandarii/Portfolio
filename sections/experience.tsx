"use client"

import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "SDE Intern",
    company: "Renan",
    location: "Remote",
    duration: "Dec 2024 - April 2025",
    description:
      "Built the main website, and the products pages, worked on the data visualizations using echarts",
    technologies: ["React.js", "Next.js", "SQL", "TailwindCSS", "Echarts"],
  },
  {
    title: "SDE Intern",
    company: "Ecclestia Technologies",
    location: "Remote",
    duration: "April 2025 - June 2025",
    description:
      "Developer the in-browser processing ai tools, using hugginface transformer.js models",
    technologies: ["Next.js", "Huggingface", "TailwindCSS", "Turso.tech "],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111] to-[#0f0f0f] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional
            <br />
            <span className="text-gray-400">Journey</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white mb-6" />
          <p className="text-base sm:text-lg text-gray-300 max-w-md">
            A timeline of growth, learning, and building impactful solutions across different organizations.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="opacity-0 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="bg-[#0a0a0a] border-[#161a1e] p-6 sm:p-8 rounded-xl transition-all duration-500 hover:bg-zinc-900 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1 space-y-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-mono">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium">{exp.company}</p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-[#1a1a1a] text-xs sm:text-sm font-mono rounded-full text-gray-300 hover:bg-[#222] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
