"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  X,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactInfo = {
    phone: "+91 8779304629",
    email: "bhandarisanketp@gmail.com",
    social: {
      github: "https://github.com/SanketBhandarii",
      linkedin: "https://www.linkedin.com/in/sanketbhandari",
    },
  };

  useEffect(() => {
    const handleOpenContact = () => {
      setIsOpen(true);
      setIsClosing(false);
      // Small delay to ensure DOM is ready, then start opening animation
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    };

    window.addEventListener("openContact", handleOpenContact);
    return () => window.removeEventListener("openContact", handleOpenContact);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setIsClosing(false);
    // Small delay to ensure DOM is ready, then start opening animation
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
        <div className="opacity-0 animate-scale-in-delayed">
          <Button
            onClick={handleOpen}
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isVisible && !isClosing ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-sm sm:max-w-lg transition-all duration-300 ease-out ${
              isVisible && !isClosing
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 translate-y-4"
            }`}
          >
            <Card className="bg-[#0a0a0a] border-[#1a1a1a] p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Get In Touch
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors duration-200 w-8 h-8 sm:w-10 sm:h-10"
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Ready to collaborate on your next project? Let's discuss how
                    we can build something amazing together.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-[#111] rounded-lg border border-[#1a1a1a] hover:border-gray-600 transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Phone
                        </p>
                        <p className="text-sm sm:text-base text-white font-mono">
                          {contactInfo.phone}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        copyToClipboard(contactInfo.phone, "phone")
                      }
                      className="text-gray-400 hover:text-white transition-colors duration-200 w-8 h-8"
                    >
                      {copiedItem === "phone" ? (
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-[#111] rounded-lg border border-[#1a1a1a] hover:border-gray-600 transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Email
                        </p>
                        <p className="text-sm sm:text-base text-white font-mono break-all">
                          {contactInfo.email}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        copyToClipboard(contactInfo.email, "email")
                      }
                      className="text-gray-400 hover:text-white transition-colors duration-200 w-8 h-8"
                    >
                      {copiedItem === "email" ? (
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-[#1a1a1a]">
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 text-center">
                    Connect on social platforms
                  </p>
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white hover:bg-[#1a1a1a] w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200"
                      onClick={() =>
                        window.open(contactInfo.social.github, "_blank")
                      }
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white hover:bg-[#1a1a1a] w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200"
                      onClick={() =>
                        window.open(contactInfo.social.linkedin, "_blank")
                      }
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
