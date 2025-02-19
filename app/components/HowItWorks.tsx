import { ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and build your detailed professional profile, highlighting your skills, experience, and goals.",
    icon: "👤",
  },
  {
    title: "Set Your Preferences",
    description: "Specify the type of connections you're looking for, whether it's mentors, partners, or team members.",
    icon: "🎯",
  },
  {
    title: "Get Matched",
    description: "Our AI algorithm finds the best matches based on your profile and preferences.",
    icon: "🤝",
  },
  {
    title: "Connect and Collaborate",
    description: "Schedule meetings, exchange ideas, and start building meaningful professional relationships.",
    icon: "🚀",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-display">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 shadow-lg mb-4">
                <span className="text-4xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden lg:block text-shabbek-blue-500 mt-4 transform rotate-0 lg:rotate-90"
                  size={24}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

