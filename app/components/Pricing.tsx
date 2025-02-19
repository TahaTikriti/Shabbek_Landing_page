"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$19",
    features: ["5 Shabbek connections/month", "Basic profile customization", "Email support"],
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: "$49",
    features: [
      "Unlimited Shabbek connections",
      "Advanced profile customization",
      "Priority matching",
      "24/7 phone & email support",
    ],
    cta: "Get started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Pro features", "Dedicated account manager", "Custom integrations", "Advanced analytics"],
    cta: "Contact sales",
  },
]

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-display">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-8 shadow-lg border transition-all duration-300 ${
              hoveredIndex === index
                ? "border-shabbek-blue-500 ring-2 ring-shabbek-blue-500 scale-105"
                : "border-gray-200"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{plan.name}</h3>
            <p className="text-4xl font-bold text-gray-900 mb-6">
              {plan.price}
              <span className="text-lg font-normal text-gray-500">{plan.price !== "Custom" ? "/month" : ""}</span>
            </p>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-shabbek-accent-green mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium transition duration-150 ease-in-out ${
                hoveredIndex === index
                  ? "bg-shabbek-accent-orange text-white hover:bg-shabbek-accent-orange/90"
                  : "bg-white text-shabbek-blue-600 border border-shabbek-blue-600 hover:bg-shabbek-blue-50"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

