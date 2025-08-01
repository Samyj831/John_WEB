import fs from "fs/promises"
import path from "path"

const portfolioData = {
  designer: {
    name: "Jim Halpert",
    title: "Graphic Designer",
    location: "Scranton, PA",
    email: "jim.halpert@dundermifflin.com",
    phone: "(570) 555-BEAR",
  },
  projects: [
    {
      id: 1,
      title: "Dunder Mifflin Rebrand",
      category: "Branding",
      description: "Complete rebrand for Scranton's premier paper company - making paper sexy again",
      year: 2024,
      client: "Dunder Mifflin Scranton",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    },
    {
      id: 2,
      title: "Dundie Awards Program",
      category: "Print Design",
      description: "Annual awards ceremony program celebrating Scranton's finest employees",
      year: 2023,
      client: "Michael Scott",
      technologies: ["InDesign", "Illustrator"],
    },
    {
      id: 3,
      title: "Finer Things Club App",
      category: "Digital Design",
      description: "Exclusive mobile app for sophisticated office culture enthusiasts",
      year: 2024,
      client: "Oscar Martinez",
      technologies: ["Figma", "Sketch", "Principle"],
    },
  ],
  skills: {
    software: ["Adobe Creative Suite", "Figma", "Sketch", "InDesign"],
    specializations: ["Brand Identity", "Print Design", "Digital Design", "UI/UX Design"],
    bonus: ["Prank Planning", "Camera Timing", "Bear Safety", "Beet Farming"],
  },
  testimonials: [
    {
      name: "Pam Beesley",
      role: "Receptionist & Art Enthusiast",
      quote:
        "Jim's designs are almost as good as his pranks. And that's saying something because his pranks are legendary.",
    },
    {
      name: "Dwight K. Schrute",
      role: "Assistant Regional Manager",
      quote: "FACT: Jim's graphic design skills are superior to his beet farming knowledge. But barely.",
    },
  ],
}

async function generatePortfolioJSON() {
  try {
    const dataDir = "./data"

    // Create data directory if it doesn't exist
    try {
      await fs.access(dataDir)
    } catch {
      await fs.mkdir(dataDir, { recursive: true })
    }

    // Write portfolio data to JSON file
    const filePath = path.join(dataDir, "portfolio.json")
    await fs.writeFile(filePath, JSON.stringify(portfolioData, null, 2))

    console.log("✅ Portfolio data generated successfully!")
    console.log(`📁 File saved to: ${filePath}`)
    console.log(`📊 Generated data for ${portfolioData.projects.length} projects`)

    return portfolioData
  } catch (error) {
    console.error("❌ Error generating portfolio data:", error)
    throw error
  }
}

async function validatePortfolioData() {
  try {
    const filePath = "./data/portfolio.json"
    const data = await fs.readFile(filePath, "utf8")
    const parsed = JSON.parse(data)

    console.log("🔍 Validating portfolio data...")

    // Validate required fields
    const requiredFields = ["designer", "projects", "skills", "testimonials"]
    const missingFields = requiredFields.filter((field) => !parsed[field])

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`)
    }

    console.log("✅ Portfolio data validation passed!")
    console.log(`👤 Designer: ${parsed.designer.name}`)
    console.log(`📁 Projects: ${parsed.projects.length}`)
    console.log(`💬 Testimonials: ${parsed.testimonials.length}`)

    return parsed
  } catch (error) {
    console.error("❌ Validation failed:", error)
    throw error
  }
}

// Main execution
async function main() {
  console.log("🚀 Starting portfolio data generation...")
  console.log(`📦 Node.js version: ${process.version}`)

  try {
    await generatePortfolioJSON()
    await validatePortfolioData()
    console.log("🎉 Portfolio data generation complete!")
  } catch (error) {
    console.error("💥 Process failed:", error)
    process.exit(1)
  }
}

// Run the script
main()
