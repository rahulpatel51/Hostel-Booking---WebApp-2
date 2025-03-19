"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Utensils, Dumbbell, Tv, Bath, ShieldCheck, Shirt, Plug, Fan, Refrigerator } from "lucide-react"

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Wifi className="h-10 w-10" />,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the hostel",
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Dining Area",
      description: "Common dining space with basic kitchen facilities",
    },
    {
      icon: <Dumbbell className="h-10 w-10" />,
      title: "Fitness Center",
      description: "Well-equipped gym for residents",
    },
    {
      icon: <Tv className="h-10 w-10" />,
      title: "Common Room",
      description: "TV lounge and recreational area",
    },
    {
      icon: <Bath className="h-10 w-10" />,
      title: "Clean Bathrooms",
      description: "Well-maintained and hygienic bathroom facilities",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance",
    },
    {
      icon: <Shirt className="h-10 w-10" />,
      title: "Laundry Service",
      description: "Washing machines and dryers available",
    },
    {
      icon: <Plug className="h-10 w-10" />,
      title: "Power Backup",
      description: "Uninterrupted power supply with generators",
    },
    {
      icon: <Fan className="h-10 w-10" />,
      title: "Air Conditioning",
      description: "Climate control in premium rooms",
    },
    {
      icon: <Refrigerator className="h-10 w-10" />,
      title: "Refrigerator",
      description: "Common refrigerators for food storage",
    },
  ]

  return (
    <section id="amenities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 inline-block rounded-full bg-indigo-900/50 px-4 py-1 text-sm font-medium text-indigo-300"
          >
            Comfort & Convenience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Hostel{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Amenities
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-indigo-200"
          >
            Enjoy a range of facilities and services designed to make your stay comfortable and convenient.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full border-indigo-800/30 bg-hostel-card transition-all duration-300 hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-indigo-500/10 p-3 text-indigo-400">{amenity.icon}</div>
                  <h3 className="mb-2 text-lg font-bold">{amenity.title}</h3>
                  <p className="text-sm text-indigo-200">{amenity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

