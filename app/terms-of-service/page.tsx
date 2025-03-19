import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-hostel-bg to-indigo-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-indigo-300 hover:bg-indigo-900/50 hover:text-indigo-200">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Terms of Service</h1>
          <p className="text-indigo-300">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none prose-invert">
          <p>
            Welcome to Goel Group of Institutions. These Terms of Service govern your use of our website and hostel
            services. By accessing our website or using our services, you agree to these terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms of Service and all
            applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using
            or accessing this site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Hostel Accommodation Terms</h2>
          <p>
            2.1. <strong>Booking and Reservations:</strong> All hostel room bookings are subject to availability and
            confirmation. A booking is only confirmed after receipt of the required deposit or payment and a
            confirmation from us.
          </p>
          <p>
            2.2. <strong>Check-in and Check-out:</strong> Standard check-in time is 2:00 PM, and check-out time is 12:00
            PM. Early check-in or late check-out may be available upon request and may incur additional charges.
          </p>
          <p>
            2.3. <strong>Cancellation Policy:</strong> Cancellations must be made at least 48 hours before the scheduled
            check-in date to receive a full refund. Cancellations made within 48 hours of check-in may be subject to a
            cancellation fee.
          </p>
          <p>
            2.4. <strong>Hostel Rules:</strong> Residents must comply with all hostel rules and regulations, which will
            be provided upon check-in. Failure to comply may result in termination of accommodation without refund.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
          <p>
            3.1. <strong>Account Creation:</strong> To access certain features of our website, you may be required to
            create an account. You are responsible for maintaining the confidentiality of your account information and
            for all activities that occur under your account.
          </p>
          <p>
            3.2. <strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information
            during the registration process and to update such information to keep it accurate, current, and complete.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
          <p>
            4.1. <strong>Fees:</strong> All fees are quoted in Indian Rupees (INR) and are subject to change without
            notice.
          </p>
          <p>
            4.2. <strong>Payment Methods:</strong> We accept various payment methods, including credit/debit cards, net
            banking, and other electronic payment methods. All payments are processed through secure payment gateways.
          </p>
          <p>
            4.3. <strong>Refunds:</strong> Refunds are processed according to our cancellation policy and may take 7-14
            business days to reflect in your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            The content on our website, including text, graphics, logos, images, and software, is the property of Goel
            Group of Institutions and is protected by copyright and other intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works from any content without our express written
            consent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Goel Group of Institutions shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting
            from your use of our website or services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Goel Group of Institutions and its officers, directors,
            employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs,
            expenses, or fees (including reasonable attorneys' fees) arising from your use of our website or services or
            your violation of these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India, without
            regard to its conflict of law principles. Any dispute arising under or relating to these Terms shall be
            subject to the exclusive jurisdiction of the courts located in Lucknow, Uttar Pradesh.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms of Service at any time. It is your responsibility to
            check these Terms periodically for changes. Your continued use of our website or services following the
            posting of any changes constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-4">
            Goel Group of Institutions
            <br />
            Faizabad Road, Near Indira Canal
            <br />
            Lucknow, 226028
            <br />
            Email: legal@goelinstitutions.edu
            <br />
            Phone: +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  )
}

