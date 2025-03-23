"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Building2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function BookingForm() {
  const [bookingStatus, setBookingStatus] = useState<"success" | null>(null)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setBookingStatus("success")
    // In a real app, you would submit the form data to your backend here
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-gray-500 mt-1">Manage your room bookings and applications</p>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Booking</TabsTrigger>
          <TabsTrigger value="history">Booking History</TabsTrigger>
          <TabsTrigger value="new">New Booking</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>No Active Booking</CardTitle>
              <CardDescription>You don't have any active room booking at the moment</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>No room assigned</AlertTitle>
                <AlertDescription>
                  You haven't been assigned a room yet. Please make a new booking request.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {
                const newTab = document.querySelector('[data-value="new"]');
                if (newTab instanceof HTMLElement) newTab.click();
              }}>Make a New Booking</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>Your previous room bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Double Sharing Room</h3>
                        <p className="text-sm text-gray-500">Block B, Room 203</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Previous Semester</p>
                      <p className="text-sm text-gray-500">Jan 2023 - May 2023</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Single Occupancy Room</h3>
                        <p className="text-sm text-gray-500">Block A, Room 105</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Two Semesters Ago</p>
                      <p className="text-sm text-gray-500">Aug 2022 - Dec 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>New Booking Request</CardTitle>
              <CardDescription>Fill out the form to request a new room</CardDescription>
            </CardHeader>
            <CardContent>
              {bookingStatus === "success" ? (
                <div className="space-y-4">
                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <AlertTitle>Booking Request Submitted</AlertTitle>
                    <AlertDescription>
                      Your booking request has been submitted successfully. You will be notified once it is processed.
                    </AlertDescription>
                  </Alert>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <CalendarDays className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Request Details</h3>
                        <p className="text-sm text-gray-500">Submitted on {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2">
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Room Type:</p>
                        <p className="text-sm font-medium">Double Sharing</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Preferred Block:</p>
                        <p className="text-sm font-medium">Block B</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Semester:</p>
                        <p className="text-sm font-medium">Upcoming (Aug 2023 - Dec 2023)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="room-type">Room Type</Label>
                    <Select defaultValue="double">
                      <SelectTrigger id="room-type">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Occupancy</SelectItem>
                        <SelectItem value="double">Double Sharing</SelectItem>
                        <SelectItem value="triple">Triple Sharing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="block">Preferred Block</Label>
                    <Select defaultValue="b">
                      <SelectTrigger id="block">
                        <SelectValue placeholder="Select block" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Block A</SelectItem>
                        <SelectItem value="b">Block B</SelectItem>
                        <SelectItem value="c">Block C</SelectItem>
                        <SelectItem value="d">Block D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="semester">Semester</Label>
                    <Select defaultValue="upcoming">
                      <SelectTrigger id="semester">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming (Aug 2023 - Dec 2023)</SelectItem>
                        <SelectItem value="next">Next (Jan 2024 - May 2024)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="special-request">Special Requests (Optional)</Label>
                    <Input id="special-request" placeholder="Any specific requirements?" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="roommate">Preferred Roommate (Optional)</Label>
                    <Input id="roommate" placeholder="Enter student ID of preferred roommate" />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Booking Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

