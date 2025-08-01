import express from "express"
import cors from "cors"
import fs from "fs/promises"

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files
app.use("/static", express.static("public"))

// API Routes
app.get("/api/portfolio", async (req, res) => {
  try {
    const data = await fs.readFile("./data/portfolio.json", "utf8")
    const portfolio = JSON.parse(data)

    res.json({
      success: true,
      data: portfolio,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error reading portfolio data:", error)
    res.status(500).json({
      success: false,
      error: "Failed to load portfolio data",
    })
  }
})

app.get("/api/projects", async (req, res) => {
  try {
    const data = await fs.readFile("./data/portfolio.json", "utf8")
    const portfolio = JSON.parse(data)

    const { category, year } = req.query
    let projects = portfolio.projects

    // Filter by category if provided
    if (category && category !== "All") {
      projects = projects.filter((project) => project.category.toLowerCase() === category.toLowerCase())
    }

    // Filter by year if provided
    if (year) {
      projects = projects.filter((project) => project.year === Number.parseInt(year))
    }

    res.json({
      success: true,
      data: projects,
      count: projects.length,
      filters: { category, year },
    })
  } catch (error) {
    console.error("Error filtering projects:", error)
    res.status(500).json({
      success: false,
      error: "Failed to filter projects",
    })
  }
})

app.get("/api/project/:id", async (req, res) => {
  try {
    const data = await fs.readFile("./data/portfolio.json", "utf8")
    const portfolio = JSON.parse(data)

    const projectId = Number.parseInt(req.params.id)
    const project = portfolio.projects.find((p) => p.id === projectId)

    if (!project) {
      return res.status(404).json({
        success: false,
        error: "Project not found",
      })
    }

    res.json({
      success: true,
      data: project,
    })
  } catch (error) {
    console.error("Error getting project:", error)
    res.status(500).json({
      success: false,
      error: "Failed to get project",
    })
  }
})

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      })
    }

    // In a real app, you'd save to database or send email
    console.log("📧 New contact form submission:")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    res.json({
      success: true,
      message: 'Thank you for your message! Jim will get back to you faster than Dwight can say "FACT!"',
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    res.status(500).json({
      success: false,
      error: "Failed to process contact form",
    })
  }
})

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    uptime: process.uptime(),
  })
})

// Start server
app.listen(PORT, () => {
  console.log("🚀 Portfolio API Server Started!")
  console.log(`📦 Node.js version: ${process.version}`)
  console.log(`🌐 Server running on http://localhost:${PORT}`)
  console.log(`🏥 Health check: http://localhost:${PORT}/health`)
  console.log(`📁 Portfolio API: http://localhost:${PORT}/api/portfolio`)
})

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("👋 Received SIGTERM, shutting down gracefully...")
  process.exit(0)
})

process.on("SIGINT", () => {
  console.log("👋 Received SIGINT, shutting down gracefully...")
  process.exit(0)
})
