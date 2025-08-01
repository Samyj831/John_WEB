"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  User,
  Briefcase,
  Award,
  Coffee,
} from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { VideoPlayer } from "@/components/video-player"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")

  const portfolioItems = [
    {
      id: 1,
      title: "Dunder Mifflin Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600&text=Dunder+Mifflin+Rebrand",
      description: "Complete visual identity overhaul for Scranton's premier paper company",
      year: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "Dundie Awards Poster Series",
      category: "Posters",
      image: "/placeholder.svg?height=400&width=600&text=Dundie+Awards+Posters",
      description: "Annual awards ceremony promotional materials",
      year: "2023",
      featured: true,
    },
    {
      id: 3,
      title: "Finer Things Club Digital Campaign",
      category: "Digital Art",
      image: "/placeholder.svg?height=400&width=600&text=Finer+Things+Digital",
      description: "Sophisticated digital marketing materials for exclusive club",
      year: "2024",
      featured: false,
    },
    {
      id: 4,
      title: "Schrute Farms Package Design",
      category: "Branding",
      image: "/placeholder.svg?height=400&width=600&text=Schrute+Farms+Package",
      description: "Organic beet product packaging and brand identity",
      year: "2023",
      featured: true,
    },
    {
      id: 5,
      title: "Michael Scott Paper Company Ads",
      category: "Posters",
      image: "/placeholder.svg?height=400&width=600&text=MSPC+Advertisements",
      description: "Revolutionary advertising campaign for innovative paper solutions",
      year: "2024",
      featured: false,
    },
    {
      id: 6,
      title: "Threat Level Midnight Movie Poster",
      category: "Posters",
      image: "/placeholder.svg?height=400&width=600&text=Threat+Level+Midnight",
      description: "Blockbuster action thriller promotional materials",
      year: "2023",
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Hero Section with Video */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <VideoPlayer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Samy The Office Designer</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Creating designs that are more professional than Michael's management style
                <br />
                <span className="text-lg italic">{"(and that's saying something)"}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => setActiveSection("portfolio")}
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 px-8 bg-transparent"
                  onClick={() => setActiveSection("about")}
                >
                  <User className="w-5 h-5 mr-2" />
                  Meet The Designer
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce-subtle" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that would make even Dwight admit they're "not terrible"
              <br />
              <span className="text-sm italic">{"(which is basically a 5-star review from him)"}</span>
            </p>
          </motion.div>

          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Employee Bio Sheet</h2>
            <p className="text-lg text-muted-foreground">{"As required by corporate (and Toby from HR)"}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="office-paper border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Image
                      src="/placeholder.svg?height=200&width=200&text=Employee+Photo"
                      alt="Samy The Office Designer"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4 border-4 border-primary/20"
                    />
                    <h3 className="text-2xl font-bold mb-2">Samy Henderson</h3>
                    <Badge className="bg-primary text-primary-foreground">Senior Graphic Designer</Badge>
                  </div>

                  <div className="space-y-6 office-memo">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Employee ID: DM-2024-GD
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Department: Creative Services (Annex Building, Desk 3)
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Core Strengths
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline">Strategic Thinking</Badge>
                        <Badge variant="outline">Creative Problem Solving</Badge>
                        <Badge variant="outline">Brand Development</Badge>
                        <Badge variant="outline">Visual Storytelling</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-primary" />
                        Fun Facts
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Survived 3 years of Michael's management</li>
                        <li>• Never fell for Jim's pranks (mostly)</li>
                        <li>• Prefers Finer Things Club over Party Planning</li>
                        <li>• Can identify paper quality by touch</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Former Dunder Mifflin Scranton branch employee turned professional graphic designer. After years of
                  witnessing questionable design choices in corporate America (looking at you, Michael's "World's Best
                  Boss" mug), I decided to take matters into my own hands.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My design philosophy is simple: create work that's more polished than Dwight's beet farm, more
                  reliable than the office printer, and more engaging than mandatory safety meetings. I specialize in
                  brand identity, poster design, and digital art that actually makes sense.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not designing, you can find me at Poor Richard's, avoiding Toby in the hallway, or explaining
                  to people why Comic Sans isn't always the answer (despite what Michael thinks).
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">samy@dundermifflin.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(570) 555-DESIGN</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border sm:col-span-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Scranton, PA (The Electric City)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Office Memo</h2>
            <p className="text-lg text-muted-foreground">
              {"Let's discuss your next project (no pranks involved, I promise)"}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="office-paper border-2 border-primary/20">
                <CardContent className="p-6 office-memo">
                  <h3 className="text-xl font-bold mb-4">Quick Contact Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>samy@dundermifflin.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>(570) 555-DESIGN</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Scranton, PA</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary/10 bg-transparent">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary/10 bg-transparent">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary/10 bg-transparent">
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Faster than Jim can say "Bears. Beets. Battlestar Galactica."
                    <br />
                    <span className="italic">(Usually within 24 hours)</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© 2024 Samy The Office Designer. All rights reserved.</p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Proudly serving clients from Scranton to the world
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
