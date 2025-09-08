import { ReactNode } from "react";
import { InformationIcon, WarningIcon, ErrorIcon, SuccessIcon } from "./icons";

export interface AlertProps {
  variant?: "info" | "warning" | "error" | "success";
  title?: string;
  children: ReactNode;
  className?: string;
}

const variantStyles = {
  info: {
    container: "bg-blue-100 border-blue-500 text-blue-700",
    icon: "text-blue-500",
    description: "text-blue-600",
  },
  warning: {
    container: "bg-yellow-100 border-yellow-500 text-yellow-700",
    icon: "text-yellow-500",
    description: "text-yellow-600",
  },
  error: {
    container: "bg-red-100 border-red-500 text-red-700",
    icon: "text-red-500",
    description: "text-red-600",
  },
  success: {
    container: "bg-green-100 border-green-500 text-green-700",
    icon: "text-green-500",
    description: "text-green-600",
  },
};

const variantIcons = {
  info: <InformationIcon className="h-5 w-5" aria-hidden="true" />,
  warning: <WarningIcon className="h-5 w-5" aria-hidden="true" />,
  error: <ErrorIcon className="h-5 w-5" aria-hidden="true" />,
  success: <SuccessIcon className="h-5 w-5" aria-hidden="true" />,
};

export function Alert({
  variant = "warning",
  title,
  children,
  className = "",
}: AlertProps) {
  const styles = variantStyles[variant];
  const icon = variantIcons[variant];

  return (
    <div className={`border-l-4 p-4 my-6 ${styles.container} ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className="ml-3">
          {title && <p className="text-sm font-medium">{title}</p>}
          <div
            className={`text-sm ${styles.description} ${title ? "mt-1" : ""}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
