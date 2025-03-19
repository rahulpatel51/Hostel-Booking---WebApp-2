"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  scrolled: boolean
  activeSection: string
  onLoginClick: () => void
  onSignupClick: () => void
}

export default function Navbar({ scrolled, activeSection, onLoginClick, onSignupClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "rooms", label: "Hostel Rooms" },
    { id: "features", label: "Features" },
    { id: "amenities", label: "Amenities" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
              <span className="text-xl font-bold">G</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">Goel Group</span>
              <span className="hidden text-xs text-slate-300 block md:block">Of Institutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.id ? "text-white" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden space-x-4 md:flex">
            <Button variant="ghost" onClick={onLoginClick} className="text-white hover:bg-slate-800">
              Login
            </Button>
            <Button
              onClick={onSignupClick}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="mb-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full py-2 text-left text-sm font-medium transition-colors ${
                          activeSection === item.id
                            ? "text-white bg-slate-900 rounded-md px-3"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onLoginClick()
                  }}
                  className="w-full border-slate-700 text-white hover:bg-slate-800"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onSignupClick()
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

