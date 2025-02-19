"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does Shabbek match me with the right people?",
    answer:
      "Shabbek uses advanced AI algorithms to analyze your profile, preferences, and goals. We then match you with individuals who have complementary skills, experiences, and objectives.",
  },
  {
    question: "Is my data safe with Shabbek?",
    answer:
      "Absolutely. We take data privacy very seriously. All your information is encrypted and stored securely. We never share your personal data without your explicit consent.",
  },
  {
    question: "Can I use Shabbek for both personal and professional networking?",
    answer:
      "Yes! Shabbek is designed to facilitate both personal and professional connections. You can specify your networking goals in your profile to ensure you're matched with the right people.",
  },
  {
    question: "How do I schedule a meeting with my Shabbek match?",
    answer:
      "Once you're matched, you can use our integrated scheduling tool to find a mutually convenient time. You can choose between virtual meetings or in-person meetups at suggested locations.",
  },
  {
    question: "What if I'm not satisfied with my Shabbek experience?",
    answer:
      "We're committed to your satisfaction. If you're not happy with your experience, please contact our support team. We offer a 30-day money-back guarantee for our paid plans.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-display">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 slide-down">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

