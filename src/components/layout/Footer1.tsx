"use client";

import { ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Footer1() {
  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" },
  ];

  const footerLinks = [
    { text: "Privacy", href: "#" },
    { text: "Terms of Use", href: "#" },
    { text: "Cookie preferences", href: "#" },
    { text: "Do not sell or share my personal information", href: "#" },
    { text: "AdChoices", href: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4">
      <div className="flex items-center justify-between px-6">
        {/* Left region */}
        <div className="flex items-center gap-6">
          {/* Globe & dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-0 h-auto font-normal"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">Change region</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-100">
              <DropdownMenuItem>United States</DropdownMenuItem>
              <DropdownMenuItem>United Kingdom</DropdownMenuItem>
              <DropdownMenuItem>Canada</DropdownMenuItem>
              <DropdownMenuItem>Australia</DropdownMenuItem>
              <DropdownMenuItem>Germany</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Adobe Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 36"
              className="text-red-600"
              fill="currentColor"
            >
              <path d="M13.5 0L0 36h9l2.25-6.75h9L22.5 36h9L18 0h-4.5zM12.75 22.5L18 9l5.25 13.5h-10.5z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Adobe</span>
          </div>
        </div>

        {/* Right region - Copyright and links */}
        <div className="flex items-center text-xs text-gray-600">
          <span>Copyright © 2025 Adobe. All rights reserved.</span>
          <span className="mx-2">/</span>
          {footerLinks.map((link, index) => (
            <span key={link.text} className="flex items-center">
              <a
                href={link.href}
                className="hover:text-gray-800 transition-colors"
              >
                {link.text}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
