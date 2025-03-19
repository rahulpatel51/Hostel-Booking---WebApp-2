"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
  gradient?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  gradient = "from-purple-500 to-indigo-500",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card className="group h-full overflow-hidden border-indigo-800/30 bg-hostel-card transition-all duration-300 hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
        <CardContent className="p-6">
          <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${gradient} p-3 text-white`}>{icon}</div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="text-slate-400">{description}</p>

          <div className="mt-6 h-1.5 w-12 rounded-full bg-gradient-to-r from-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500 group-hover:transition-all group-hover:duration-500"></div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

