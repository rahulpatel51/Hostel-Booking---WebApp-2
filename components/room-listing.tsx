"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, Wifi, Tv, Coffee } from "lucide-react"

// Sample room data
const rooms = [
  {
    id: 1,
    name: "Single Occupancy",
    type: "single",
    price: 15000,
    available: 12,
    total: 20,
    amenities: ["Wi-Fi", "Attached Bathroom", "Study Table", "Cupboard"],
    image: "/placeholder.svg?height=200&width=300",
    block: "A",
  },
  {
    id: 2,
    name: "Double Sharing",
    type: "double",
    price: 10000,
    available: 8,
    total: 30,
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
    image: "/placeholder.svg?height=200&width=300",
    block: "B",
  },
  {
    id: 3,
    name: "Triple Sharing",
    type: "triple",
    price: 8000,
    available: 15,
    total: 25,
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
    image: "/placeholder.svg?height=200&width=300",
    block: "C",
  },
  {
    id: 4,
    name: "Deluxe Single",
    type: "single",
    price: 20000,
    available: 5,
    total: 10,
    amenities: ["Wi-Fi", "AC", "TV", "Attached Bathroom", "Mini Fridge"],
    image: "/placeholder.svg?height=200&width=300",
    block: "D",
  },
  {
    id: 5,
    name: "Premium Double",
    type: "double",
    price: 12000,
    available: 6,
    total: 15,
    amenities: ["Wi-Fi", "AC", "Attached Bathroom", "Study Table", "Cupboard"],
    image: "/placeholder.svg?height=200&width=300",
    block: "A",
  },
  {
    id: 6,
    name: "Economy Triple",
    type: "triple",
    price: 7000,
    available: 10,
    total: 20,
    amenities: ["Wi-Fi", "Shared Bathroom", "Study Table", "Cupboard"],
    image: "/placeholder.svg?height=200&width=300",
    block: "B",
  },
]

export default function RoomListing() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Available Rooms</h1>
          <p className="text-gray-500 mt-1">Book your hostel room for the upcoming semester</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Rooms</TabsTrigger>
              <TabsTrigger value="single">Single</TabsTrigger>
              <TabsTrigger value="double">Double</TabsTrigger>
              <TabsTrigger value="triple">Triple</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{room.name}</CardTitle>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Block {room.block}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{room.type.charAt(0).toUpperCase() + room.type.slice(1)} Occupancy</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {room.amenities.slice(0, 3).map((amenity, index) => (
                  <Badge key={index} variant="secondary" className="font-normal">
                    {amenity === "Wi-Fi" && <Wifi className="mr-1 h-3 w-3" />}
                    {amenity === "TV" && <Tv className="mr-1 h-3 w-3" />}
                    {amenity === "AC" && <Coffee className="mr-1 h-3 w-3" />}
                    {amenity}
                  </Badge>
                ))}
                {room.amenities.length > 3 && (
                  <Badge variant="secondary" className="font-normal">
                    +{room.amenities.length - 3} more
                  </Badge>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Price per semester</p>
                  <p className="text-xl font-bold">₹{room.price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="text-sm font-medium">
                    {room.available} of {room.total} rooms
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => setSelectedRoom(room)}>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Confirm Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You are about to book a <strong>{selectedRoom.name}</strong> in Block {selectedRoom.block}.
              </p>
              <p className="mt-2">Price: ₹{selectedRoom.price.toLocaleString()} per semester</p>
              <div className="mt-4">
                <p className="font-medium">Room Features:</p>
                <ul className="mt-2 list-inside list-disc">
                  {selectedRoom.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedRoom(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  alert("Room booked successfully!")
                  setSelectedRoom(null)
                }}
              >
                Confirm Booking
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

