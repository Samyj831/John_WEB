import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Samy The Office Designer | Graphic Design Portfolio",
  description:
    "Professional graphic design portfolio inspired by The Office. Specializing in branding, posters, and digital art with a touch of Scranton charm.",
  keywords: ["graphic design", "portfolio", "branding", "posters", "digital art", "the office"],
  authors: [{ name: "Samy The Office Designer" }],
  creator: "Samy The Office Designer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samytheoffice.design",
    title: "Samy The Office Designer | Graphic Design Portfolio",
    description: "Professional graphic design portfolio with a touch of Scranton charm.",
    siteName: "Samy The Office Designer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samy The Office Designer | Graphic Design Portfolio",
    description: "Professional graphic design portfolio with a touch of Scranton charm.",
    creator: "@samytheoffice",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  )
}
