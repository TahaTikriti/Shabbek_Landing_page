import Navbar from "@/app/components/Navbar"
import LaunchProgressBar from "@/app/components/LaunchProgressBar"
import Hero from "@/app/components/Hero"
import Features from "@/app/components/Features"
import WorldMap from "@/app/components/WorldMap"
import HowItWorks from "@/app/components/HowItWorks"
import Pricing from "@/app/components/Pricing"
import FAQ from "@/app/components/FAQ"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
       
        <Hero />
        <Features />
        <HowItWorks />
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-display">Global Connections</h2>
            <WorldMap />
            <p className="mt-8 text-center text-gray-600 text-lg">
              Connect with professionals from around the world and expand your network globally.
            </p>
          </div>
        </section>
        <Pricing />
        <FAQ />
      </main>
      <footer className="bg-gray-100 py-8 text-center">
        <p className="text-gray-600">&copy; 2025 Shabbek. All rights reserved.</p>
      </footer>
    </>
  )
}

