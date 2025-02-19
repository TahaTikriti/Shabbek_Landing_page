"use client"

import { useState, useEffect } from "react"
import { Rocket } from "lucide-react"

const LaunchProgressBar = () => {
  const [progress, setProgress] = useState(0)
  const targetUsers = 10000
  const currentUsers = 7500 // This would be fetched from an API in a real scenario

  useEffect(() => {
    const animateProgress = () => {
      const targetProgress = (currentUsers / targetUsers) * 100
      let currentProgress = 0
      const interval = setInterval(() => {
        if (currentProgress >= targetProgress) {
          clearInterval(interval)
        } else {
          currentProgress += 1
          setProgress(currentProgress)
        }
      }, 20)
    }

    animateProgress()
  }, [])

  return (
    <div className="bg-white shadow-md py-3 px-4 rounded-lg mx-auto w-3/4 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Rocket className="text-shabbek-blue-500" size={20} />
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {currentUsers.toLocaleString()} / {targetUsers.toLocaleString()} users joined
          </span>
        </div>
        <div className="w-1/3 sm:w-1/2 bg-gray-200 rounded-full h-2">
          <div
            className="bg-shabbek-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">
          {progress >= 100 ? "Launching soon!" : `${Math.round((currentUsers / targetUsers) * 100)}% to launch`}
        </span>
      </div>
    </div>
  )
}

export default LaunchProgressBar

