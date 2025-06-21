"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "CrickZone",
    description:
      "CrickZone is the app for tracking the cricket score bewteen 2 teams.  ",
    tech: ["React", "Express", "Mongodb", "Tailwind"],
    image: "/crickzone.png",
    github: "https://github.com/SanketBhandarii/CrickZone",
    live: "https://crick-zone.vercel.app",
    featured: true,
    stats: { stars: 234, forks: 45 },
  },

  {
    title: "Toolkit",
    description: "It contains various tools, build using ml models.",
    tech: ["TypeScript", "Next.js", "HuggingFace", "Web workers"],
    image: "/toolkit.png",
    github: "https://github.com/SanketBhandarii/Toolkit",
    live: "https://toolkit-dun.vercel.app",
    featured: true,
    stats: { stars: 156, forks: 28 },
  },
  {
    title: "ChatBoty",
    description:
      "ChatBot using React.js and Google Gemini API, provides code aswell",
    tech: ["React.js", "GeminiAPI", "CSS"],
    image: "/gpt.png",
    github: "https://github.com/SanketBhandarii/ChatBoty",
    live: "https://chatboty.netlify.app",
    featured: true,
  },
 
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#111] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Project
            <br />
            <span className="text-gray-400">Work</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-white mb-6" />
          <p className="text-base sm:text-lg text-gray-300 max-w-md">
            A collection of my projects till now.
          </p>
        </div>

        <div className="mb-16 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-300">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="opacity-0 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="bg-[#0a0a0a] border-[#1a1a1a] overflow-hidden rounded-xl transition-all duration-300 h-full group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      { project.featured &&
                        <span className="bg-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      }
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 bg-black/60 text-white text-sm font-medium transition-colors hover:bg-white hover:text-black hover:border-white"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Link>

                      <Link
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 bg-black/50 text-white text-sm font-medium transition-colors hover:bg-white hover:text-black hover:border-white"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-[#1a1a1a] text-xs sm:text-sm font-mono rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
