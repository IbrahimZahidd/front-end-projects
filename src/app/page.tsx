"use client";

import Footer1 from "@/components/layout/Footer1";
import Header1 from "@/components/layout/Header1";
import HeroSection1 from "@/components/layout/HeroSection1";
import VideoSection1 from "@/components/layout/VideoSection1";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <HeroSection1 />
      <VideoSection1 />
      <Footer1 />
    </div>
  );
}
