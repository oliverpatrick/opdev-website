"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";
import { InformationIcon, WarningIcon, ErrorIcon, SuccessIcon } from "./icons";

export interface AlertProps {
  variant?: "info" | "warning" | "error" | "success";
  position?: "default" | "top" | "bottom";
  title?: string;
  children: ReactNode;
  className?: string;
}

const variantIcons = {
  info: <InformationIcon className="h-5 w-5" aria-hidden="true" />,
  warning: <WarningIcon className="h-5 w-5" aria-hidden="true" />,
  error: <ErrorIcon className="h-5 w-5" aria-hidden="true" />,
  success: <SuccessIcon className="h-5 w-5" aria-hidden="true" />,
};

export const Alert: React.FC<AlertProps> = ({
  variant = "warning",
  position = "default",
  title,
  children,
  className,
}: AlertProps) => {
  const icon = variantIcons[variant];

  const [isVisible, setIsVisible] = useState(true);

  const onClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        "border-l-4 p-4",
        {
          // Variant styles
          "bg-blue-100 border-blue-500 text-blue-700": variant === "info",
          "bg-yellow-100 border-yellow-500 text-yellow-700":
            variant === "warning",
          "bg-red-100 border-red-500 text-red-700": variant === "error",
          "bg-green-100 border-green-500 text-green-700": variant === "success",

          // Position styles
          "my-6 relative w-full max-w-3xl": position === "default",
          "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto":
            position === "top",
          "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl mx-auto":
            position === "bottom",
        },
        className
      )}
    >
      {onClose && (
        <button
          onClick={onClose}
          className={clsx(
            "absolute top-2 right-2 p-1 rounded-full hover:bg-opacity-20 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2",
            {
              "text-blue-600 focus:ring-blue-500": variant === "info",
              "text-yellow-600 focus:ring-yellow-500": variant === "warning",
              "text-red-600 focus:ring-red-500": variant === "error",
              "text-green-600 focus:ring-green-500": variant === "success",
            }
          )}
          aria-label="Close alert"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="flex">
        <div className="flex-shrink-0">
          <div
            className={clsx({
              "text-blue-500": variant === "info",
              "text-yellow-500": variant === "warning",
              "text-red-500": variant === "error",
              "text-green-500": variant === "success",
            })}
          >
            {icon}
          </div>
        </div>
        <div className="ml-3">
          {title && <p className="text-sm font-medium">{title}</p>}
          <div
            className={clsx("text-sm", {
              "text-blue-600": variant === "info",
              "text-yellow-600": variant === "warning",
              "text-red-600": variant === "error",
              "text-green-600": variant === "success",
              "mt-1": !!title,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
