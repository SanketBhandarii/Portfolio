"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `> Initializing developer profile...
> Loading experience: 3+ years
> Specialization: Full-stack architecture
> Current focus: Building scalable systems

I believe in the intersection of art and engineering. 
Every project is an opportunity to push boundaries, 
challenge conventions, and create something meaningful.

My approach is methodical yet creative. I start with 
understanding the problem deeply, then architect 
solutions that are both elegant and robust.

When I'm not coding, you'll find me exploring new 
technologies, playing cricket or drawing, or 
mentoring the next generation of developers.

> Profile loaded successfully
> Status: Available for collaboration`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-[#0f0f0f] to-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-20">
          <div className="lg:col-span-5 opacity-0 animate-slide-left">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About
                <br />
                <span className="text-gray-400">The Mind</span>
              </h2>

              <div className="w-16 sm:w-20 h-1 bg-white" />

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Code becomes invisible when it works in harmony with human
                intuition. Every thoughtful product begins with a mind that values clarity, craft, and purpose.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 opacity-0 animate-slide-right">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden">
              <div className="bg-[#111] px-4 py-3 border-b border-[#1a1a1a]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-4 text-xs sm:text-sm text-gray-400 font-mono">
                    terminal — about.sh
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed min-h-[300px] sm:min-h-[400px]">
                <pre className="whitespace-pre-wrap text-green-400">
                  {displayText}
                  {showCursor && <span className="text-white">█</span>}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
