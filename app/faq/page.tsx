import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqCategories = [
    {
      category: "Hostel Booking",
      questions: [
        {
          question: "How do I book a hostel room?",
          answer:
            "You can book a hostel room by creating an account on our website, browsing available rooms, selecting your preferred room type, and completing the booking process. Alternatively, you can contact our hostel administration office directly.",
        },
        {
          question: "What is the booking confirmation process?",
          answer:
            "Once you submit a booking request, you will receive an email confirmation within 24 hours. This confirmation will include your booking details, payment information, and check-in instructions.",
        },
        {
          question: "Can I cancel my booking?",
          answer:
            "Yes, you can cancel your booking. Cancellations made at least 48 hours before check-in are eligible for a full refund. Cancellations made within 48 hours of check-in may be subject to a cancellation fee.",
        },
        {
          question: "Is there a security deposit?",
          answer:
            "Yes, we require a security deposit of ₹5,000 at the time of check-in. This deposit is refundable at the end of your stay, subject to room inspection and adherence to hostel rules.",
        },
      ],
    },
    {
      category: "Room & Facilities",
      questions: [
        {
          question: "What types of rooms are available?",
          answer:
            "We offer various room types including single occupancy, double sharing, triple sharing, deluxe single, and premium double rooms. Each room type has different amenities and price points to suit different preferences and budgets.",
        },
        {
          question: "What amenities are included in the hostel?",
          answer:
            "Our hostel provides amenities such as high-speed Wi-Fi, dining area, fitness center, common room with TV, clean bathrooms, 24/7 security, laundry service, power backup, air conditioning in premium rooms, and common refrigerators.",
        },
        {
          question: "Is Wi-Fi available in the hostel?",
          answer: "Yes, high-speed Wi-Fi is available throughout the hostel premises at no additional cost.",
        },
        {
          question: "Are meals included in the hostel fee?",
          answer:
            "Basic meal plans are available at an additional cost. You can choose from various meal plans according to your preference during the booking process.",
        },
      ],
    },
    {
      category: "Payment & Fees",
      questions: [
        {
          question: "What are the payment options?",
          answer:
            "We accept various payment methods including credit/debit cards, net banking, UPI, and other electronic payment methods. All payments are processed through secure payment gateways.",
        },
        {
          question: "Is there an option for installment payments?",
          answer:
            "Yes, we offer installment payment options for long-term stays. You can pay your hostel fee in quarterly installments. Please contact our administration office for more details.",
        },
        {
          question: "Are there any additional fees?",
          answer:
            "Additional fees may apply for services such as laundry, meal plans, air conditioning usage in certain rooms, and special events or activities. These will be clearly communicated during the booking process.",
        },
        {
          question: "How do refunds work?",
          answer:
            "Refunds are processed according to our cancellation policy and may take 7-14 business days to reflect in your account. Refunds are issued to the original payment method used for the booking.",
        },
      ],
    },
    {
      category: "Check-in & Check-out",
      questions: [
        {
          question: "What are the check-in and check-out times?",
          answer:
            "Standard check-in time is 2:00 PM, and check-out time is 12:00 PM. Early check-in or late check-out may be available upon request and may incur additional charges.",
        },
        {
          question: "What documents do I need for check-in?",
          answer:
            "For check-in, you need to provide a valid government-issued ID (Aadhar Card, Passport, Driving License), proof of admission or employment (for students or working professionals), and the booking confirmation.",
        },
        {
          question: "Can I extend my stay?",
          answer:
            "Yes, you can extend your stay subject to room availability. Please inform the hostel administration at least 3 days before your scheduled check-out date to check availability and process the extension.",
        },
        {
          question: "Is early check-in possible?",
          answer:
            "Early check-in is possible subject to room availability. Please contact us in advance to request early check-in. Additional charges may apply.",
        },
      ],
    },
    {
      category: "Rules & Policies",
      questions: [
        {
          question: "What are the hostel rules?",
          answer:
            "Our hostel rules include maintaining cleanliness, respecting quiet hours (10:00 PM to 6:00 AM), no smoking or alcohol consumption on premises, no unauthorized guests, and proper use of common facilities. A complete list of rules will be provided upon check-in.",
        },
        {
          question: "Are visitors allowed in the hostel?",
          answer:
            "Visitors are allowed in designated common areas during visiting hours (10:00 AM to 8:00 PM). Visitors are not permitted in residential areas or rooms without prior permission from the hostel administration.",
        },
        {
          question: "Is there a curfew?",
          answer:
            "Yes, there is a curfew time of 10:00 PM for all residents. Late entry is permitted with prior permission from the hostel warden for valid reasons.",
        },
        {
          question: "What is the policy on noise levels?",
          answer:
            "We maintain quiet hours from 10:00 PM to 6:00 AM to ensure a peaceful environment for all residents. Excessive noise at any time that disturbs other residents is not permitted.",
        },
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
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h1>
          <p className="text-indigo-300">Find answers to common questions about our hostel services</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-indigo-800/30 bg-indigo-900/30 p-6">
            <h2 className="mb-4 text-xl font-bold">Can't Find Your Question?</h2>
            <p className="mb-6 text-indigo-200">
              If you can't find the answer to your question, please feel free to contact us. Our team is always ready to
              help you with any inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-indigo-500/20 p-2 text-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-indigo-300">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="rounded-full bg-indigo-500/20 p-2 text-indigo-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-indigo-300">info@goelinstitutions.edu</p>
                </div>
              </div>
            </div>
            <Button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700">Contact Support</Button>
          </div>

          <div className="space-y-6">
            {faqCategories.map((category, index) => (
              <div key={index} className="rounded-xl border border-indigo-800/30 bg-indigo-900/30 p-6">
                <h2 className="mb-4 text-xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border-indigo-800/30">
                      <AccordionTrigger className="text-left hover:text-indigo-300">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-indigo-200">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

