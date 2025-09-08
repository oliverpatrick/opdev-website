"use client";

import Link from "next/dist/client/link";
import React, { useState } from "react";
import {
  LuGamepad2,
  LuGithub,
  LuHouse,
  LuLinkedin,
  LuMail,
  LuNotebookPen,
  LuNotepadText,
} from "react-icons/lu";

function MobileNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      href: "/",
      id: "home",
      icon: LuHouse,
      label: "Home",
      external: true,
      backgroundColour: "#7AE582",
    },
    {
      href: "/app/work-experience",
      id: "work-experience",
      icon: LuNotepadText,
      label: "Work Experience",
      external: true,
      backgroundColour: "#FFBC42",
    },
    {
      href: "/app/projects",
      id: "projects",
      icon: LuNotebookPen,
      label: "Projects",
      external: true,
      backgroundColour: "#D81159",
    },
    {
      href: "/app/games",
      id: "games",
      icon: LuGamepad2,
      label: "Games",
      external: true,
      backgroundColour: "#8F2D56",
    },
    {
      href: "https://github.com/oliverpatrick",
      id: "github",
      icon: LuGithub,
      label: "GitHub",
      external: true,
      backgroundColour: "#218380",
    },
    {
      href: "https://linkedin.com",
      id: "linkedin",
      icon: LuLinkedin,
      label: "LinkedIn",
      external: true,
      backgroundColour: "#73D2DE",
    },
    {
      href: "mailto:oliver@opdev.co.uk",
      id: "email",
      icon: LuMail,
      label: "Email",
      external: false,
      backgroundColour: "#A288E3",
    },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 px-2 py-2 sm:px-4 sm:py-3 max-w-[90vw] overflow-x-auto">
      <div className="flex items-center space-x-1 sm:space-x-2 min-w-max">
        {navItems.map(item => {
          const Icon = item.icon;
          const isHovered = hoveredItem === item.id;

          return (
            <Link href={item.href} key={item.id}>
              <div
                className={`rounded-xl shadow-xl ${
                  isHovered ? "transform scale-110" : ""
                }`}
                style={{ background: item.backgroundColour }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="p-2 sm:p-3 rounded-xl transition-all duration-200">
                  <Icon
                    size={20}
                    className="text-white sm:w-6 sm:h-6 shadow-xl"
                  />
                </button>

                {/* Tooltip */}
                {isHovered && (
                  <div className="font-sans absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs sm:text-sm px-2 py-1 rounded-lg whitespace-nowrap z-10">
                    {item.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNav;
