"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import LaunchProgressBar from "./LaunchProgressBar"

type FormData = {
  email: string
  username: string
  lookingFor: string[]
  experienceLevel: string
}

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsLoading(false)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <LaunchProgressBar />
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="space-y-8 text-center lg:text-left fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 font-display leading-tight">
            Get Matched with the <span className="text-shabbek-blue-500">Right Person</span> in Minutes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            Shabbek connects you with the perfect professional match, saving you time and accelerating your success.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            {[
              { value: "5+ hours", label: "Searching" },
              { value: "15+ hrs", label: "Interviewing" },
              { value: "2 weeks", label: "Onboarding" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-200 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-2xl font-semibold text-shabbek-blue-600 font-display">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-shabbek-blue-300 focus:ring focus:ring-shabbek-blue-200 focus:ring-opacity-50 text-sm"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: "Username is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-shabbek-blue-300 focus:ring focus:ring-shabbek-blue-200 focus:ring-opacity-50 text-sm"
              />
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Finding Candidates",
                  "Looking for Investors",
                  "Business Partnership",
                  "Hiring Employees",
                  "Industry Advisor",
                  "Seeking Co-founder",
                ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      value={option}
                      {...register("lookingFor", { required: "Please select at least one option" })}
                      className="rounded border-gray-300 text-shabbek-blue-600 shadow-sm focus:border-shabbek-blue-300 focus:ring focus:ring-shabbek-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.lookingFor && <p className="mt-1 text-sm text-red-600">{errors.lookingFor.message}</p>}
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">Experience level</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {["Junior (0-2 years)", "Mid-Level (3-5 years)", "Senior (5-8 years)", "Expert (8+ years)"].map(
                  (level) => (
                    <label key={level} className="flex items-center">
                      <input
                        type="radio"
                        value={level}
                        {...register("experienceLevel", { required: "Please select your experience level" })}
                        className="border-gray-300 text-shabbek-blue-600 shadow-sm focus:border-shabbek-blue-300 focus:ring focus:ring-shabbek-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-sm text-gray-700">{level}</span>
                    </label>
                  ),
                )}
              </div>
              {errors.experienceLevel && <p className="mt-1 text-sm text-red-600">{errors.experienceLevel.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-shabbek-blue-600 hover:bg-shabbek-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shabbek-blue-500 disabled:opacity-50 transition duration-150 ease-in-out"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Processing...
                </>
              ) : (
                "Get Early Access"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

