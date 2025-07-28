"use client";

import { useState } from "react";
import { ChevronDown, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header1() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "Creativity & Design",
      items: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Premiere Pro",
        "After Effects",
        "Lightroom",
      ],
    },
    {
      title: "PDF & E-signatures",
      items: [
        "Acrobat Pro",
        "Acrobat Standard",
        "Acrobat Reader",
        "Adobe Sign",
        "Document Cloud",
      ],
    },
    {
      title: "Marketing & Commerce",
      items: [
        "Experience Cloud",
        "Analytics",
        "Target",
        "Campaign",
        "Commerce",
      ],
    },
    {
      title: "Learn & Support",
      items: [
        "Help Center",
        "Tutorials",
        "Community",
        "Contact Support",
        "System Requirements",
      ],
    },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left side: Adobe Logo + Navigation */}
        <div className="flex items-center space-x-8">
          {/* Adobe Logo */}
          <div className="flex items-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="text-red-600"
              fill="currentColor"
            >
              <path d="M13.5 0L0 36h9l2.25-6.75h9L22.5 36h9L18 0h-4.5zM12.75 22.5L18 9l5.25 13.5h-10.5z" />
            </svg>
            <span className="ml-2 text-xl font-bold text-red-600">Adobe</span>
          </div>

          {/* Navigation Menu - directly after logo */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-normal transition-colors duration-200"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-gray-100"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem} className="cursor-pointer">
                      {subItem}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Apps Grid Icon */}
          <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
            <Grid3X3 className="h-5 w-5 text-gray-600" />
          </Button>

          {/* Sign In Button */}
          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent px-4 py-1.5 text-sm"
          >
            Sign in
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" className="p-2">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
