"use client"

import { useEffect, useRef } from "react"
import { Users, Coffee, Building, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Shabbek with the Right Person",
    description: "Connect with professionals who match your needs and goals.",
    bullets: ["AI-powered matching algorithm", "Detailed profile customization", "Industry-specific networking"],
    color: "shabbek-blue-500",
  },
  {
    icon: Coffee,
    title: "Shabbek Over Coffee",
    description: "Schedule and manage in-person or virtual meetings effortlessly.",
    bullets: [
      "Integrated calendar system",
      "Virtual meeting room support",
      "Location suggestions for in-person meetings",
    ],
    color: "shabbek-accent-green",
  },
  {
    icon: Building,
    title: "Shabbek Within Your Organization",
    description: "Enhance internal networking and collaboration.",
    bullets: [
      "Private organizational networks",
      "Cross-department connections",
      "Skill and knowledge sharing platform",
    ],
    color: "shabbek-accent-purple",
  },
]

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const featureElements = featuresRef.current?.children
    if (featureElements) {
      Array.from(featureElements).forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-display">Our Features</h2>
      <div ref={featuresRef} className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 opacity-0"
          >
            <div className={`bg-${feature.color} rounded-full p-3 inline-block mb-6`}>
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{feature.title}</h3>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <ul className="space-y-2">
              {feature.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start text-gray-700">
                  <CheckCircle className={`h-5 w-5 mr-2 mt-1 flex-shrink-0 text-${feature.color}`} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

