"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 opacity-0 animate-slide-up">
            <div className="space-y-4">
              <div className="font-mono text-xs sm:text-sm text-gray-400 tracking-wider">
                FULL STACK DEVELOPER • OFF SPINNER 
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
                Sanket P.
                <br />
                <span className="text-gray-400">Bhandari</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">Building Digital Experiences</p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
            I try to build efficient, scalable web and 
            mobile applications with clean,
            reusable code.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-white rounded-[3px] text-black hover:bg-gray-200 font-medium px-6 sm:px-8 w-full sm:w-auto"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Work
              </Button>

              <div className="flex items-center space-x-4">
               <Link href="https://github.com/SanketBhandarii" target="_blank">
                  <Button variant="ghost" size="icon" className="text-gray-400 rounded-full hover:text-white">
                    <Github className="w-4 h-4 sm:w-5 sm:h-6" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/sanketbhandari/" target="_blank">
                  <Button variant="ghost" size="icon" className="text-gray-400 rounded-full hover:text-white">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 opacity-0 animate-slide-up-delay">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-[#111] rounded-2xl transform rotate-3" />
              <div className="relative bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                <div className="font-mono text-xs sm:text-sm space-y-2">
                  <div className="text-gray-400">$ whoami</div>
                  <div className="text-white">sanket_bhandari</div>
                  <div className="text-gray-400">$ skills.txt</div>
                  <div className="text-white space-y-1">
                    <div>React • Next.js • TypeScript</div>
                    <div>Node.js • SQL • MongoDB</div>
                    <div>Supabase • TailwindCSS • C++</div>
                  </div>
                  <div className="text-gray-400">$ echo $PHILOSOPHY</div>
                  <div className="text-white">"Full-Stack"</div>
                  <div className="text-green-400 animate-pulse">█</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-slow">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
      </div>
    </div>
  )
}
