"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  return (
    <section className="w-full relative bg-black">
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleVideoClick}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted
          loop
          playsInline
          poster="/video-thumbnail-adobe.png"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-white text-lg">Video not supported</p>
          </div>
        </video>

        {/* Custom Play/Pause Button - Bottom Left Corner */}
        <div className="absolute bottom-6 left-6">
          <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="sm"
            className="bg-black/50 hover:bg-black/70 text-white border-none rounded-full p-3 backdrop-blur-sm transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-0.5" />
            )}
          </Button>
        </div>

        {/* Optional: Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Optional: Loading state */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="text-center text-white">
              <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <p className="text-lg font-medium">Click to play</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
