import React from "react";
import { Twitter, Github, Linkedin, Mail } from "../common/icons";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

function Socials({ className = "", size = "md" }: Props) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const iconSize = sizeClasses[size];

  return (
    <div className={`flex my-2 space-x-4 ${className}`}>
      <a
        href="https://x.com/dev_op"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Twitter className={iconSize} fill="currentColor" />
      </a>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github className={iconSize} fill="currentColor" />
      </a>

      <a
        href="https://www.linkedin.com/in/oliver-p-4b6bb4ba/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Linkedin className={iconSize} fill="currentColor" />
      </a>

      <a
        href="mailto:oliver@opdev.co.uk"
        className="text-gray-600 hover:text-accent transition-colors"
      >
        <Mail className={iconSize} fill="currentColor" />
      </a>
    </div>
  );
}

export default Socials;
