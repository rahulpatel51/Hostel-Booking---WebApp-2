import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Hostel Rooms", url: "/#rooms" },
        { name: "Features", url: "/#features" },
        { name: "Amenities", url: "/#amenities" },
        { name: "Contact Us", url: "/#contact" },
      ],
    },
    {
      title: "User Account",
      links: [
        { name: "Login", url: "#" },
        { name: "Sign Up", url: "#" },
        { name: "Dashboard", url: "/dashboard" },
        { name: "My Bookings", url: "#" },
        { name: "Profile", url: "#" },
      ],
    },
    {
      title: "Hostel Information",
      links: [
        { name: "Room Types", url: "/#rooms" },
        { name: "Pricing", url: "/#rooms" },
        { name: "Facilities", url: "/#amenities" },
        { name: "Rules & Regulations", url: "/terms-of-service" },
        { name: "FAQ", url: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Cookie Policy", url: "/cookie-policy" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "About Goel Group", url: "#" },
        { name: "Our Campus", url: "#" },
        { name: "Testimonials", url: "#" },
        { name: "News & Events", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-hostel-bg to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-indigo-300 hover:bg-indigo-900/50 hover:text-indigo-200">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Sitemap</h1>
          <p className="text-indigo-300">Find all pages on our website</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sitemapSections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-indigo-800/30 bg-indigo-900/30 p-6 hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-900/20"
            >
              <h2 className="mb-4 text-xl font-bold">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="text-indigo-300 hover:text-indigo-200 hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-indigo-800/30 bg-indigo-900/30 p-6">
          <h2 className="mb-4 text-xl font-bold">XML Sitemap</h2>
          <p className="mb-4">
            For search engines, we provide an XML sitemap that lists all pages on our website. This helps search engines
            discover and index our content more efficiently.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">View XML Sitemap</Button>
        </div>
      </div>
    </div>
  )
}

