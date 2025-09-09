"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { TypeWriter } from "@/utils/helpers/typerwrite.helper";

/**
 * List of commands to cycle through in the terminal animation
 */
const COMMANDS = ["npm run dev", "dotnet run", "go run main.go"] as const;

/**
 * Configuration constants for the terminal animation
 */
const ANIMATION_CONFIG = {
  typeSpeed: 100,
  initialDelay: 1000,
  commandDelay: 2000,
  cycleDelay: 3000,
} as const;

/**
 * Terminal hostname component that simulates a command-line interface
 * with animated typing of different development commands.
 *
 * Features:
 * - Shows current hostname (defaults to localhost on server)
 * - Cycles through common development commands with typewriter effect
 * - Responsive text sizing
 */
export default function ConsoleHostname() {
  const [hostname, setHostname] = useState("localhost");
  const [mounted, setMounted] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const commandRef = useRef<HTMLSpanElement>(null);
  const typeWriterRef = useRef<TypeWriter>(
    new TypeWriter(ANIMATION_CONFIG.typeSpeed)
  );
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  /**
   * Initialize hostname from browser window location
   */
  useEffect(() => {
    setMounted(true);
    setHostname(window.location.hostname || "localhost");
  }, []);

  /**
   * Handles the typing animation for the current command
   */
  const startTypingAnimation = useCallback(() => {
    if (!commandRef.current) return;

    const isLastCommand = currentCommandIndex >= COMMANDS.length;

    if (isLastCommand) {
      // Reset to first command after showing all commands
      timeoutRef.current = setTimeout(() => {
        setCurrentCommandIndex(0);
      }, ANIMATION_CONFIG.cycleDelay);
    } else {
      // Type the current command
      const command = COMMANDS[currentCommandIndex];
      typeWriterRef.current.type(commandRef.current, ` ${command}`, () => {
        timeoutRef.current = setTimeout(() => {
          setCurrentCommandIndex(prev => prev + 1);
        }, ANIMATION_CONFIG.commandDelay);
      });
    }
  }, [currentCommandIndex]);

  /**
   * Main animation effect - triggers typing when component mounts or command index changes
   */
  useEffect(() => {
    if (!mounted) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      startTypingAnimation,
      ANIMATION_CONFIG.initialDelay
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentCommandIndex, mounted, startTypingAnimation]);

  /**
   * Cleanup timeout on unmount
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <pre
      className="flex items-center font-mono"
      aria-label="Terminal console showing development commands"
    >
      <span className="text-[9px] sm:text-xs md:text-sm text-primary">
        guest
      </span>
      <span className="text-[9px] sm:text-xs md:text-sm text-primary">@</span>
      <span className="text-[9px] sm:text-xs md:text-sm text-primary">
        {hostname}
      </span>
      <span className="text-[9px] sm:text-xs md:text-sm text-primary">~ %</span>
      <span
        ref={commandRef}
        className="ml-1 min-w-0 text-[9px] sm:text-xs md:text-sm text-primary"
        aria-live="polite"
      />
    </pre>
  );
}
