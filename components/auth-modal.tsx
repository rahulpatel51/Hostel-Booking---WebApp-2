"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Calendar, Phone } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView: "login" | "signup"
}

export default function AuthModal({ isOpen, onClose, initialView }: AuthModalProps) {
  const [view, setView] = useState<"login" | "signup">(initialView)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md border-indigo-800/30 bg-hostel-bg p-0 text-white sm:rounded-2xl">
        <div className="relative overflow-hidden sm:rounded-2xl">
          {/* Background gradients */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"></div>
          </div>

          <div className="relative z-10 p-6">
            <div className="mb-6 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-xl font-bold">G</span>
                </div>
                <div>
                  <span className="text-xl font-bold">Goel Group</span>
                  <span className="text-xs text-slate-400 block">Of Institutions</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue={view} onValueChange={(v) => setView(v as "login" | "signup")}>
              <TabsList className="mb-6 grid w-full grid-cols-2 bg-hostel-card">
                <TabsTrigger value="login" className="data-[state=active]:bg-hostel-accent">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-hostel-accent">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="login" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 text-center">
                      <h2 className="mb-2 text-2xl font-bold">Welcome Back</h2>
                      <p className="text-slate-400">Login to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="border-indigo-800/50 bg-hostel-card pl-10 text-white placeholder:text-slate-400 focus-visible:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <a href="#" className="text-xs text-purple-400 hover:text-purple-300">
                            Forgot password?
                          </a>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="border-slate-800 bg-slate-900 pl-10 pr-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-slate-400 hover:text-slate-300"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Logging in...
                          </div>
                        ) : (
                          <>
                            Login <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-slate-700"></span>
                        </div>
                        <div className="relative flex justify-center text-xs">
                          <span className="bg-slate-950 px-2 text-slate-400">Or continue with</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="border-slate-800 bg-slate-900 text-white hover:bg-slate-800"
                        >
                          Google
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-800 bg-slate-900 text-white hover:bg-slate-800"
                        >
                          Facebook
                        </Button>
                      </div>

                      <p className="mt-4 text-center text-sm text-slate-400">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          className="text-purple-400 hover:text-purple-300"
                          onClick={() => setView("signup")}
                        >
                          Sign up
                        </button>
                      </p>
                    </form>
                  </motion.div>
                </TabsContent>

                <TabsContent value="signup" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 text-center">
                      <h2 className="mb-2 text-2xl font-bold">Create Account</h2>
                      <p className="text-slate-400">Sign up to book your hostel room</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            className="border-slate-800 bg-slate-900 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="Enter your email"
                            className="border-slate-800 bg-slate-900 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Your phone number"
                              className="border-slate-800 bg-slate-900 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                              id="dob"
                              type="date"
                              className="border-slate-800 bg-slate-900 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Create Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="border-slate-800 bg-slate-900 pl-10 pr-10 text-white placeholder:text-slate-500 focus-visible:ring-purple-500"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-slate-400 hover:text-slate-300"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <a href="#" className="text-purple-400 hover:text-purple-300">
                            terms and conditions
                          </a>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Creating account...
                          </div>
                        ) : (
                          <>
                            Create Account <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="mt-4 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <button
                          type="button"
                          className="text-purple-400 hover:text-purple-300"
                          onClick={() => setView("login")}
                        >
                          Login
                        </button>
                      </p>
                    </form>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

