"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Star, Calendar, Tag } from "lucide-react"
import Image from "next/image"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  year: string
  featured: boolean
}

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))]

  const filteredItems = activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter)

  return (
    <div className="space-y-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
            className={`transition-all duration-300 hover:scale-105 ${
              activeFilter === category
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-primary/5 hover:border-primary"
            }`}
          >
            <Tag className="w-4 h-4 mr-2" />
            {category}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="w-full bg-white/90 text-gray-900 hover:bg-white"
                            onClick={() => setSelectedItem(item)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          {selectedItem && (
                            <div className="space-y-6">
                              <div className="aspect-video relative overflow-hidden rounded-lg">
                                <Image
                                  src={selectedItem.image || "/placeholder.svg"}
                                  alt={selectedItem.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                                  {selectedItem.featured && (
                                    <Badge className="bg-primary text-primary-foreground">
                                      <Star className="w-3 h-3 mr-1" />
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Tag className="w-4 h-4" />
                                    {selectedItem.category}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {selectedItem.year}
                                  </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{selectedItem.description}</p>
                                <div className="pt-4">
                                  <Button className="bg-primary hover:bg-primary/90">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Full Project
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found for "{activeFilter}".
            <br />
            <span className="text-sm italic">{"Even Dwight would be disappointed by this search result."}</span>
          </p>
        </motion.div>
      )}
    </div>
  )
}
