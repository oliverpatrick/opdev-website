import { cn } from "@/utils/cn";
import React from "react";

export type TimelineEvent = {
  id?: string | number;
  date: string;
  title: string;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  status?: "completed" | "current" | "upcoming";
};

export interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
  variant?: "default" | "compact";
  showConnector?: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({
  events,
  className,
  variant = "default",
  showConnector = true,
}) => {
  const getStatusStyles = (status?: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500 border-green-500 text-white";
      case "current":
        return "bg-blue-500 border-blue-500 text-white animate-pulse";
      case "upcoming":
        return "bg-gray-200 border-gray-300 text-gray-500";
      default:
        return "bg-blue-500 border-blue-500 text-white";
    }
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "relative",
        showConnector && "border-l-2 border-gray-200 ml-6",
        className
      )}
    >
      {events.map((event, idx) => (
        <div
          key={event.id ?? idx}
          className={cn(
            "relative",
            isCompact ? "mb-4" : "mb-8",
            idx === events.length - 1 ? "mb-0" : ""
          )}
        >
          {showConnector && (
            <div
              className={cn(
                "absolute -left-3 top-0 rounded-full flex items-center justify-center border-2",
                isCompact ? "w-4 h-4" : "w-6 h-6",
                getStatusStyles(event.status)
              )}
            >
              {event.icon ? (
                <span className={cn(isCompact ? "text-xs" : "text-sm")}>
                  {event.icon}
                </span>
              ) : (
                <div
                  className={cn(
                    "rounded-full bg-current",
                    isCompact ? "w-1.5 h-1.5" : "w-2 h-2"
                  )}
                />
              )}
            </div>
          )}

          <div className={cn(showConnector ? "ml-6" : "ml-0")}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3
                  className={cn(
                    "font-semibold text-gray-900",
                    isCompact ? "text-sm" : "text-base"
                  )}
                >
                  {event.title}
                </h3>
                {event.description &&
                  (React.isValidElement(event.description) ? (
                    <div className="mt-1">{event.description}</div>
                  ) : (
                    <p
                      className={cn(
                        "text-gray-600 mt-1",
                        isCompact ? "text-xs" : "text-sm"
                      )}
                    >
                      {event.description}
                    </p>
                  ))}
              </div>
              <time
                className={cn(
                  "text-gray-500 font-medium ml-4 flex-shrink-0",
                  isCompact ? "text-xs" : "text-sm"
                )}
              >
                {event.date}
              </time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
