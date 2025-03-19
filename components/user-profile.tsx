"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, School, Calendar, Edit } from "lucide-react"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // In a real app, you would submit the form data to your backend here
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-500 mt-1">View and manage your personal information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">John Smith</h2>
              <p className="text-sm text-gray-500">Student ID: ST12345</p>
              <Badge className="mt-2">Computer Science</Badge>

              <Separator className="my-4" />

              <div className="w-full space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">john.smith@college.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <School className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">3rd Year</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Joined: Aug 2021</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your personal details</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                <Edit className="mr-2 h-4 w-4" />
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-4">
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input id="full-name" defaultValue="John Smith" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="john.smith@college.edu" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 9876543210" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 College Road, Delhi" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue="2000-05-15" />
                    </div>

                    <Button type="submit">Save Changes</Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Full Name</p>
                        <p>John Smith</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p>john.smith@college.edu</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone Number</p>
                        <p>+91 9876543210</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p>123 College Road, Delhi</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                        <p>May 15, 2000</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Gender</p>
                        <p>Male</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="academic" className="mt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Student ID</p>
                      <p>ST12345</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Department</p>
                      <p>Computer Science</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Year</p>
                      <p>3rd Year</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Semester</p>
                      <p>6th Semester</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">CGPA</p>
                      <p>8.5/10</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Admission Year</p>
                      <p>2021</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emergency" className="mt-4">
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="emergency-name">Contact Name</Label>
                      <Input id="emergency-name" defaultValue="Robert Smith" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="emergency-relation">Relationship</Label>
                      <Input id="emergency-relation" defaultValue="Father" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="emergency-phone">Phone Number</Label>
                      <Input id="emergency-phone" defaultValue="+91 9876543211" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="emergency-address">Address</Label>
                      <Input id="emergency-address" defaultValue="123 College Road, Delhi" />
                    </div>

                    <Button type="submit">Save Changes</Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Contact Name</p>
                        <p>Robert Smith</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Relationship</p>
                        <p>Father</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone Number</p>
                        <p>+91 9876543211</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p>123 College Road, Delhi</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

