"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setFormSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-hostel-bg/80">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 inline-block rounded-full bg-indigo-900/50 px-4 py-1 text-sm font-medium text-indigo-300"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-indigo-200"
          >
            Have questions about our hostel or room availability? Reach out to us and our team will get back to you as
            soon as possible.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <Card className="border-indigo-800/30 bg-hostel-card hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-indigo-500/20 p-3 text-indigo-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">Our Location</h3>
                      <p className="text-indigo-200">Goel Group Of Institutions</p>
                      <p className="text-indigo-200">Faizabad Road, Near Indira Canal</p>
                      <p className="text-indigo-200">Lucknow, 226028</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-800/30 bg-hostel-card hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-indigo-500/20 p-3 text-indigo-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">Email Us</h3>
                      <p className="text-slate-400">hostel@goelinstitutions.edu</p>
                      <p className="text-slate-400">info@goelinstitutions.edu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-800/30 bg-hostel-card hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-indigo-500/20 p-3 text-indigo-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">Call Us</h3>
                      <p className="text-slate-400">Bookings: +91 98765 43210</p>
                      <p className="text-slate-400">General Inquiries: +91 98765 43211</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-800/30 bg-hostel-card hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-indigo-500/20 p-3 text-indigo-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">Office Hours</h3>
                      <p className="text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-400">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-slate-400">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-indigo-800/30 bg-hostel-card hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-bold">Send us a Message</h3>

                {formSubmitted ? (
                  <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                    <div className="mb-4 rounded-full bg-green-500/20 p-3">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold">Message Sent Successfully!</h4>
                    <p className="mb-6 text-slate-400">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          className="border-indigo-800/50 bg-hostel-bg/80 text-white placeholder:text-slate-400 focus-visible:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          className="border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-type">Inquiry Type</Label>
                        <Select defaultValue="booking">
                          <SelectTrigger
                            id="inquiry-type"
                            className="border-slate-700 bg-slate-800/50 text-white focus:ring-indigo-500"
                          >
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="border-slate-700 bg-slate-900 text-white">
                            <SelectItem value="booking">Room Booking</SelectItem>
                            <SelectItem value="availability">Room Availability</SelectItem>
                            <SelectItem value="pricing">Pricing & Packages</SelectItem>
                            <SelectItem value="facilities">Facilities & Amenities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-32 border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16"
        >
          <div className="overflow-hidden rounded-xl border border-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4761957886146!2d80.99013937536798!3d26.88483917650398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f33c241ab1%3A0x91cf8c8b0e43b9e2!2sGoel%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1710254879484!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goel Group Of Institutions Location"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

