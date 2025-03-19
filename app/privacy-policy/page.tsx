import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hostel-bg to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-indigo-300 hover:bg-indigo-900/50 hover:text-indigo-200">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
          <p className="text-indigo-300">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none prose-invert">
          <p>
            At Goel Group of Institutions, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website or use our hostel services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Register for an account</li>
            <li>Book a hostel room</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us with inquiries</li>
            <li>Participate in surveys or promotions</li>
          </ul>
          <p className="mt-4">The personal information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Name, email address, phone number, and contact details</li>
            <li>Billing and payment information</li>
            <li>Academic information relevant to hostel accommodation</li>
            <li>Preferences and feedback related to our services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Processing and managing hostel bookings</li>
            <li>Providing customer support and responding to inquiries</li>
            <li>Sending administrative information and updates</li>
            <li>Sending marketing and promotional communications (with your consent)</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
            except as described in this Privacy Policy. This does not include trusted third parties who assist us in
            operating our website, conducting our business, or servicing you, so long as those parties agree to keep
            this information confidential.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal
            information. However, please note that no method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to withdraw consent for processing your data</li>
            <li>The right to object to processing of your personal information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date at the top of this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-4">
            Goel Group of Institutions
            <br />
            Faizabad Road, Near Indira Canal
            <br />
            Lucknow, 226028
            <br />
            Email: privacy@goelinstitutions.edu
            <br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  )
}

