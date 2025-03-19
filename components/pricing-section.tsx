"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, GraduationCap, BookOpen, Code, Microscope, Briefcase, ChevronRight } from "lucide-react"

export default function PricingSection() {
  const programs = [
    {
      id: 1,
      name: "Engineering",
      icon: <Code className="h-6 w-6" />,
      description: "Bachelor of Technology programs in various specializations",
      price: "₹85,000",
      duration: "4 Years",
      features: [
        "Computer Science Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electronics & Communication",
        "Industry internships",
        "Modern labs and equipment",
        "Expert faculty",
      ],
      popular: true,
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 2,
      name: "Management",
      icon: <Briefcase className="h-6 w-6" />,
      description: "BBA and MBA programs with industry-focused curriculum",
      price: "₹65,000",
      duration: "3 Years (BBA) / 2 Years (MBA)",
      features: [
        "Marketing Management",
        "Finance Management",
        "Human Resources",
        "Operations Management",
        "International Business",
        "Industry connections",
        "Case study approach",
        "Placement assistance",
      ],
      popular: false,
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      name: "Science",
      icon: <Microscope className="h-6 w-6" />,
      description: "Undergraduate and postgraduate science programs",
      price: "₹55,000",
      duration: "3 Years (BSc) / 2 Years (MSc)",
      features: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Computer Science",
        "Research opportunities",
        "Well-equipped laboratories",
        "Field studies",
      ],
      popular: false,
      color: "from-teal-600 to-emerald-600",
    },
    {
      id: 4,
      name: "Arts & Humanities",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Liberal arts education with diverse specializations",
      price: "₹45,000",
      duration: "3 Years",
      features: [
        "English Literature",
        "History",
        "Political Science",
        "Psychology",
        "Sociology",
        "Cultural events",
        "Language labs",
        "Creative workshops",
      ],
      popular: false,
      color: "from-amber-600 to-orange-600",
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 inline-block rounded-full bg-indigo-900/50 px-4 py-1 text-sm font-medium text-indigo-300"
          >
            Academic Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Educational Programs
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-slate-300"
          >
            Explore our diverse range of undergraduate and postgraduate programs designed to prepare you for a
            successful career.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex"
            >
              <Card
                className={`relative flex w-full flex-col overflow-hidden border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-slate-700 hover:shadow-lg hover:shadow-indigo-900/20 ${
                  program.popular ? "border-indigo-500/50" : ""
                }`}
              >
                {program.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-1 text-xs font-medium text-white">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className={`rounded-full bg-gradient-to-r ${program.color} p-2 text-white`}>
                      {program.icon}
                    </div>
                    <CardTitle>{program.name}</CardTitle>
                  </div>
                  <p className="text-sm text-slate-400">{program.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <p className="text-sm text-slate-400">Annual fee starting from</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{program.price}</span>
                      <span className="ml-1 text-sm text-slate-400">per year</span>
                    </div>
                    <Badge variant="outline" className="mt-2 border-slate-700 text-slate-300">
                      <GraduationCap className="mr-1 h-3 w-3" /> {program.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="mr-2 h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full bg-gradient-to-r ${program.color} text-white hover:opacity-90`}
                    onClick={() => {
                      const element = document.getElementById("contact")
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center"
        >
          <h3 className="mb-2 text-2xl font-bold">Need More Information?</h3>
          <p className="mb-6 text-slate-300">
            Contact our admissions office for detailed information about programs, eligibility, and scholarships.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

