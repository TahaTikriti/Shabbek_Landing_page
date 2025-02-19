import "./globals.css"
import { inter, poppins } from "./fonts"
import type React from "react" // Import React

export const metadata = {
  title: "Shabbek - Connect with the Right Professionals",
  description:
    "Shabbek helps you connect with the right professionals in minutes, saving you time and accelerating your success.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'