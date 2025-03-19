"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Wifi, Tv, Coffee, Users, Bath, DoorClosed, X } from "lucide-react"

export default function RoomsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  const rooms = [
    {
      id: 1,
      name: "Single Occupancy",
      type: "single",
      price: 8000,
      available: 12,
      total: 20,
      amenities: ["Wi-Fi", "Attached Bathroom", "Study Table", "Cupboard"],
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      block: "A",
    },
    {
      id: 2,
      name: "Double Sharing",
      type: "double",
      price: 6000,
      available: 8,
      total: 30,
      amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      block: "B",
    },
    {
      id: 3,
      name: "Triple Sharing",
      type: "triple",
      price: 4500,
      available: 15,
      total: 25,
      amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
      image:
        "https://images.unsplash.com/photo-1626265774643-f1f9a5f75f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      block: "C",
    },
    {
      id: 4,
      name: "Deluxe Single",
      type: "single",
      price: 10000,
      available: 5,
      total: 10,
      amenities: ["Wi-Fi", "AC", "TV", "Attached Bathroom", "Mini Fridge"],
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      block: "D",
    },
    {
      id: 5,
      name: "Premium Double",
      type: "double",
      price: 7500,
      available: 6,
      total: 15,
      amenities: ["Wi-Fi", "AC", "Attached Bathroom", "Study Table", "Cupboard"],
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      block: "A",
    },
    {
      id: 6,
      name: "Economy Triple",
      type: "triple",
      price: 4000,
      available: 10,
      total: 20,
      amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
      image:
        "https://images.unsplash.com/photo-1626265774643-f1f9a5f75f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      block: "B",
    },
  ]

  const filteredRooms = activeTab === "all" ? rooms : rooms.filter((room) => room.type === activeTab)

  return (
    <section id="rooms" className="py-20 bg-hostel-bg/80">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 inline-block rounded-full bg-indigo-900/50 px-4 py-1 text-sm font-medium text-indigo-300"
          >
            Comfortable Accommodation
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
              Hostel Rooms
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-indigo-200"
          >
            Choose from our variety of room types designed to meet your needs and budget. All rooms come with essential
            amenities for a comfortable stay.
          </motion.p>
        </div>

        <div className="mb-10 flex flex-col items-center">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4 bg-indigo-800/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-indigo-600">
                All
              </TabsTrigger>
              <TabsTrigger value="single" className="data-[state=active]:bg-indigo-600">
                Single
              </TabsTrigger>
              <TabsTrigger value="double" className="data-[state=active]:bg-indigo-600">
                Double
              </TabsTrigger>
              <TabsTrigger value="triple" className="data-[state=active]:bg-indigo-600">
                Triple
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full overflow-hidden border-indigo-800/30 bg-hostel-card transition-all duration-300 hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-indigo-600 text-white hover:bg-indigo-700">
                      {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="rounded-full bg-indigo-500/20 p-2 text-indigo-400">
                      {room.type === "single" ? (
                        <DoorClosed className="h-5 w-5" />
                      ) : room.type === "double" ? (
                        <Users className="h-5 w-5" />
                      ) : (
                        <Users className="h-5 w-5" />
                      )}
                    </div>
                    <h3 className="text-lg font-bold">{room.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-indigo-300 mb-3">
                    <Bath className="h-4 w-4" />
                    <span>
                      {room.amenities.includes("Attached Bathroom") ? "Attached Bathroom" : "Shared Bathroom"}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="bg-indigo-700 font-normal text-white">
                        {amenity === "Wi-Fi" && <Wifi className="mr-1 h-3 w-3" />}
                        {amenity === "TV" && <Tv className="mr-1 h-3 w-3" />}
                        {amenity === "AC" && <Coffee className="mr-1 h-3 w-3" />}
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge variant="secondary" className="bg-indigo-600 font-normal text-white">
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-indigo-300">Price per month</p>
                      <p className="text-xl font-bold text-white">₹{room.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-indigo-300">Availability</p>
                      <p className="text-sm font-medium text-white">
                        {room.available} of {room.total} rooms
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="px-5 pb-5">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    onClick={() => setSelectedRoom(room)}
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/80 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md"
            >
              <Card className="border-indigo-700 bg-indigo-900 shadow-xl shadow-indigo-900/30">
                <div className="relative">
                  <img
                    src={selectedRoom.image || "/placeholder.svg"}
                    alt={selectedRoom.name}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-8 w-8 rounded-full bg-indigo-950/50 text-white hover:bg-indigo-800 hover:text-white"
                    onClick={() => setSelectedRoom(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-indigo-600 text-white">Block {selectedRoom.block}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">{selectedRoom.name}</h3>
                    <p className="text-indigo-300">
                      {selectedRoom.type.charAt(0).toUpperCase() + selectedRoom.type.slice(1)} Occupancy
                    </p>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-4 border-t border-indigo-800 pt-4">
                    <div>
                      <p className="text-sm text-indigo-300">Monthly Rent</p>
                      <p className="text-2xl font-bold">₹{selectedRoom.price.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-indigo-300">Availability</p>
                      <p className="text-lg font-medium">
                        <span className="text-green-400">{selectedRoom.available}</span> / {selectedRoom.total} rooms
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="mb-2 font-medium">Room Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline" className="border-indigo-700 bg-indigo-800/50">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-indigo-800/50 p-3">
                      <p className="text-sm text-indigo-200">
                        <span className="font-medium text-indigo-100">Note:</span> Booking requires a security deposit
                        of ₹5,000 which is refundable at the end of your stay.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-indigo-700 text-white hover:bg-indigo-800 hover:text-white"
                        onClick={() => setSelectedRoom(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        onClick={() => {
                          alert("Room booked successfully!")
                          setSelectedRoom(null)
                        }}
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

