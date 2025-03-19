"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle2, Star, MapPin, Clock, Wifi, Coffee, Tv } from "lucide-react"
import AuthModal from "@/components/auth-modal"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import RoomsSection from "@/components/rooms-section"
import AmenitiesSection from "@/components/amenities-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authType, setAuthType] = useState<"login" | "signup">("login")
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openLoginModal = () => {
    setAuthType("login")
    setShowAuthModal(true)
  }

  const openSignupModal = () => {
    setAuthType("signup")
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-hostel-bg to-indigo-950 text-white">
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onLoginClick={openLoginModal}
        onSignupClick={openSignupModal}
      />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2 inline-block rounded-full bg-gradient-to-r from-purple-500 to-teal-400 px-4 py-1 text-sm font-medium"
              >
                Premium Hostel Accommodation
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              >
                <span className="block">Goel Group</span>
                <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Hostel Accommodation
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-8 text-lg text-indigo-200 md:pr-12"
              >
                Comfortable, affordable, and well-maintained hostel rooms with modern amenities. Book your ideal room
                today and enjoy a hassle-free stay.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById("rooms")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Browse Rooms <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openLoginModal}
                  className="border-slate-700 text-white hover:bg-slate-800"
                >
                  Login to Book
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative mx-auto max-w-md"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl backdrop-blur-sm">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-teal-500/30 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                  alt="Luxury Hostel Room"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="rounded-full bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-300">
                      Premium Room
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  <h3 className="mb-1 text-xl font-bold">Deluxe Single Room</h3>
                  <p className="mb-4 text-sm text-slate-300">Spacious and comfortable</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Price per month</p>
                      <p className="text-xl font-bold text-white">₹8,000</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={openSignupModal}
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -left-16 top-20 hidden rounded-lg border border-slate-800 bg-slate-900/90 p-3 backdrop-blur-sm md:block"
              >
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-500/20 p-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Instant Booking</p>
                    <p className="text-xs text-slate-400">No waiting time</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-12 bottom-24 hidden rounded-lg border border-slate-800 bg-slate-900/90 p-3 backdrop-blur-sm md:block"
              >
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-purple-500/20 p-2">
                    <Wifi className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Free Wi-Fi</p>
                    <p className="text-xs text-slate-400">High-speed internet</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Our Hostel
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-indigo-200"
            >
              We provide comfortable accommodation with modern amenities to make your stay enjoyable and hassle-free.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Wifi className="h-6 w-6" />}
              title="High-Speed Wi-Fi"
              description="Stay connected with our high-speed internet access available throughout the hostel."
              delay={0.1}
              gradient="from-purple-500 to-indigo-500"
            />
            <FeatureCard
              icon={<Coffee className="h-6 w-6" />}
              title="Modern Amenities"
              description="Enjoy modern facilities including air conditioning, hot water, and comfortable furniture."
              delay={0.2}
              gradient="from-teal-500 to-emerald-500"
            />
            <FeatureCard
              icon={<Tv className="h-6 w-6" />}
              title="Entertainment"
              description="Access to common rooms with TV, games, and recreational activities."
              delay={0.3}
              gradient="from-pink-500 to-rose-500"
            />
            <FeatureCard
              icon={<MapPin className="h-6 w-6" />}
              title="Prime Location"
              description="Conveniently located near shopping centers, restaurants, and public transportation."
              delay={0.4}
              gradient="from-amber-500 to-orange-500"
            />
            <FeatureCard
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="24/7 Security"
              description="Round-the-clock security with CCTV surveillance for your safety and peace of mind."
              delay={0.5}
              gradient="from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Flexible Booking"
              description="Choose from various booking options - daily, weekly, monthly, or long-term stays."
              delay={0.6}
              gradient="from-violet-500 to-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <RoomsSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} initialView={authType} />
    </div>
  )
}

