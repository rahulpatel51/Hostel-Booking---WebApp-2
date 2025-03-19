"use client"

import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar" // [^1]
import { Home, Building2, CalendarDays, User, Settings, LogOut } from "lucide-react"
import RoomListing from "@/components/room-listing"
import BookingForm from "@/components/booking-form"
import UserProfile from "@/components/user-profile"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("rooms")

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-3">
              <Building2 className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Hostel Portal</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")}>
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "rooms"} onClick={() => setActiveTab("rooms")}>
                  <Building2 className="h-5 w-5" />
                  <span>Rooms</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "bookings"} onClick={() => setActiveTab("bookings")}>
                  <CalendarDays className="h-5 w-5" />
                  <span>My Bookings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")}>
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "settings"} onClick={() => setActiveTab("settings")}>
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto p-6">
          {activeTab === "rooms" && <RoomListing />}
          {activeTab === "bookings" && <BookingForm />}
          {activeTab === "profile" && <UserProfile />}
          {activeTab === "dashboard" && (
            <div className="grid gap-6">
              <h1 className="text-3xl font-bold">Welcome back, Student</h1>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DashboardCard title="Current Room" value="Not Assigned" icon={<Building2 className="h-8 w-8" />} />
                <DashboardCard title="Booking Status" value="Not Booked" icon={<CalendarDays className="h-8 w-8" />} />
                <DashboardCard
                  title="Payment Status"
                  value="No Pending Payments"
                  icon={<Building2 className="h-8 w-8" />}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  )
}

function DashboardCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="rounded-full bg-primary/10 p-3 text-primary">{icon}</div>
      </div>
    </div>
  )
}

