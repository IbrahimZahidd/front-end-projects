"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection1() {
  return (
    <section className="w-full bg-slate-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Everything you need to make anything.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Bring any idea to life with products for creators, businesses, and
          beyond.
        </p>

        {/* CTA Button */}
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-full transition-colors duration-200"
          size="lg"
        >
          View all products
        </Button>
      </div>
    </section>
  );
}
