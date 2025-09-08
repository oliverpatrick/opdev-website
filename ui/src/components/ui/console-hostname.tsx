"use client";

import { useEffect, useRef, useState } from "react";
import { TypeWriter } from "@/utils/helpers/typerwrite.helper";

const commands = ["npm run dev", "dotnet run", "go run main.go"];

export default function ConsoleHostname() {
  const [hostname, setHostname] = useState("localhost");
  const [mounted, setMounted] = useState(false);
  const commandRef = useRef<HTMLSpanElement>(null);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const typeWriterRef = useRef<TypeWriter>(new TypeWriter(100));

  useEffect(() => {
    setMounted(true);
    setHostname(window.location.hostname);
  }, []);

  useEffect(() => {
    if (!commandRef.current || !mounted) return;

    const startTyping = () => {
      if (currentCommandIndex < commands.length) {
        typeWriterRef.current.type(
          commandRef.current!,
          ` ${commands[currentCommandIndex]}`,
          () => {
            setTimeout(() => {
              setCurrentCommandIndex(prev => prev + 1);
            }, 2000);
          }
        );
      } else {
        setTimeout(() => {
          setCurrentCommandIndex(0);
        }, 3000);
      }
    };

    const timer = setTimeout(startTyping, 1000); // Initial delay
    return () => clearTimeout(timer);
  }, [currentCommandIndex, mounted]);

  return (
    <pre className="flex items-center font-mono">
      <span
        className="text-[9px] sm:text-xs md:text-sm"
        style={{ color: "black" }}
      >
        guest
      </span>
      <span
        className="text-[9px] sm:text-xs md:text-sm"
        style={{ color: "black" }}
      >
        @
      </span>
      <span
        className="text-[9px] sm:text-xs md:text-sm"
        style={{ color: "black" }}
      >
        {hostname}
      </span>
      <span
        className="text-[9px] sm:text-xs md:text-sm"
        style={{ color: "black" }}
      >
        ~ %
      </span>
      <span
        ref={commandRef}
        style={{ color: "black" }}
        className="ml-1 min-w-0 text-[9px] sm:text-xs md:text-sm"
      />
    </pre>
  );
}
