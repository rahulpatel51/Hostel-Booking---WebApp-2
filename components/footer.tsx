"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-indigo-950 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-xl font-bold">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Goel Group</h3>
                <p className="text-xs text-indigo-300">Of Institutions</p>
              </div>
            </div>
            <p className="text-indigo-200">
              Providing comfortable and affordable hostel accommodation with modern amenities. Your home away from home
              at Goel Group Of Institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-indigo-800 p-2 text-indigo-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-indigo-800 p-2 text-indigo-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-indigo-800 p-2 text-indigo-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-indigo-800 p-2 text-indigo-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-indigo-800 p-2 text-indigo-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Rooms", href: "#rooms" },
                { name: "Features", href: "#features" },
                { name: "Amenities", href: "#amenities" },
                { name: "Contact Us", href: "#contact" },
                { name: "Terms & Conditions", href: "/terms-of-service" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center text-indigo-200 transition-colors hover:text-indigo-400"
                  >
                    <ArrowRight className="mr-2 h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">
                  Goel Group of Institutions
                  <br />
                  Faizabad Road, Near Indira Canal
                  <br />
                  Lucknow, 226028
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-indigo-400" />
                <span className="text-indigo-200">info@goelinstitutions.edu</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-indigo-200">
              Subscribe to our newsletter to receive updates on room availability, special offers, and promotions.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input
                  placeholder="Enter your email"
                  className="rounded-r-none border-indigo-700 bg-indigo-800 text-white placeholder:text-indigo-400 focus-visible:ring-indigo-500"
                />
                <Button className="rounded-l-none bg-indigo-600 hover:bg-indigo-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-indigo-400">
                By subscribing, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-indigo-300">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our hostel.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-indigo-800 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-indigo-400">
              © {new Date().getFullYear()} Goel Group Of Institutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-indigo-400">
              <Link href="/privacy-policy" className="hover:text-indigo-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-indigo-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-indigo-300">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="hover:text-indigo-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

