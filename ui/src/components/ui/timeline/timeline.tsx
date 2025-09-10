import { cn } from "@/utils/cn";
import React from "react";

export type TimelineEvent = {
  id?: string | number;
  date: string;
  title: string | React.ReactNode;
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

/**
 * A timeline component that displays a series of events in chronological order.
 *
 * @param events - Array of timeline events to display
 * @param className - Additional CSS classes to apply to the timeline container
 * @param variant - Visual variant of the timeline, either "default" or "compact"
 * @param showConnector - Whether to show the connecting line and status indicators
 *
 * @example
 * ```tsx
 * const events = [
 *   {
 *     id: "1",
 *     title: "Project Started",
 *     description: "Initial planning phase",
 *     date: "Jan 2024",
 *     status: "completed",
 *     icon: "🚀"
 *   },
 *   {
 *     id: "2",
 *     title: "Development",
 *     description: "Building the application",
 *     date: "Feb 2024",
 *     status: "current"
 *   }
 * ];
 *
 * <Timeline
 *   events={events}
 *   variant="default"
 *   showConnector={true}
 * />
 * ```
 */
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
        return "bg-accent border-accent text-white animate-pulse";
      case "upcoming":
        return "bg-gray-200 border-gray-300 text-gray-500";
      default:
        return "bg-accent border-accent text-white";
    }
  };

  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "relative",
        showConnector && "border-l border-gray-200 ml-2 sm:border-l-2 sm:ml-6",
        className
      )}
    >
      {events.map((event, idx) => (
        <div
          key={event.id ?? idx}
          className={cn(
            "relative",
            isCompact ? "mb-3" : "mb-4 sm:mb-8",
            idx === events.length - 1 ? "mb-0" : ""
          )}
        >
          {showConnector && (
            <div
              className={cn(
                "absolute -left-3 top-0 rounded-full flex items-center justify-center border sm:border-2",
                isCompact ? "w-3 h-3" : "w-4 h-4 sm:w-6 sm:h-6",
                getStatusStyles(event.status)
              )}
            >
              {event.icon ? (
                <span
                  className={cn(
                    isCompact ? "text-[10px]" : "text-xs sm:text-sm"
                  )}
                >
                  {event.icon}
                </span>
              ) : (
                <div
                  className={cn(
                    "rounded-full bg-current",
                    isCompact ? "w-1 h-1" : "w-1.5 h-1.5 sm:w-2 sm:h-2"
                  )}
                />
              )}
            </div>
          )}

          <div className={cn(showConnector ? "ml-2 sm:ml-6" : "ml-0")}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h3
                  className={cn(
                    "font-semibold text-gray-900",
                    isCompact ? "text-xs" : "text-sm sm:text-base"
                  )}
                >
                  {event.title}
                </h3>
                {event.description &&
                  (React.isValidElement(event.description) ? (
                    <div className="mt-0.5">{event.description}</div>
                  ) : (
                    <p
                      className={cn(
                        "text-gray-600 mt-0.5",
                        isCompact ? "text-[11px]" : "text-xs sm:text-sm"
                      )}
                    >
                      {event.description}
                    </p>
                  ))}
              </div>
              <time
                className={cn(
                  "text-gray-500 font-medium sm:ml-4 flex-shrink-0 mt-0.5 sm:mt-0",
                  isCompact ? "text-[10px]" : "text-xs sm:text-sm"
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
