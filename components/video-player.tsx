"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-4xl mx-auto"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          poster="/placeholder.svg?height=720&width=1280&text=Introduction+Video+Poster"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          <track kind="captions" src="/captions.vtt" srcLang="en" label="English captions" default />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={togglePlay}
                className="bg-white/90 hover:bg-white text-black"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={toggleMute}
                className="bg-white/90 hover:bg-white text-black"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Play Button Overlay for Initial State */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              onClick={togglePlay}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-20 h-20"
              aria-label="Play introduction video"
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          {"Watch my introduction (it's better than Michael's training videos)"}
        </p>
      </div>
    </motion.div>
  )
}
