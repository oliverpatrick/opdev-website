"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../utils/cn";

export type TabItem = {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
};

export type PillTabNavProps = {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  trackBg?: string;
  indicatorBg?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
};

export const PillTabNav: React.FC<PillTabNavProps> = ({
  tabs,
  defaultTab,
  onChange,
  className,
  trackBg = "bg-gray-200",
  indicatorBg = "bg-white",
  activeTextColor = "text-gray-900",
  inactiveTextColor = "text-gray-500 hover:text-gray-700",
}) => {
  const firstId = tabs[0]?.subItems?.[0]?.id ?? tabs[0]?.id ?? "";
  const [selectedTab, setSelectedTab] = useState(defaultTab ?? firstId);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const track = trackRef.current;
    const el = tabRefs.current.get(selectedTab);
    if (!track || !el) return;

    // Find the parent tab that owns this selection
    const parentTab = tabs.find(
      (t) =>
        t.id === selectedTab || t.subItems?.some((s) => s.id === selectedTab),
    );
    const isSubItem = parentTab?.subItems?.some((s) => s.id === selectedTab);

    if (isSubItem && parentTab?.subItems) {
      // For sub-items, the indicator covers the entire group
      const groupEls = parentTab.subItems
        .map((s) => tabRefs.current.get(s.id))
        .filter(Boolean) as HTMLButtonElement[];
      if (groupEls.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const firstRect = groupEls[0]!.getBoundingClientRect();
      const lastRect = groupEls[groupEls.length - 1]!.getBoundingClientRect();
      const left = firstRect.left - trackRect.left;
      const width = lastRect.right - firstRect.left;
      setIndicator({ left: left - 2, width: width + 4 });
    } else {
      const trackRect = track.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({
        left: elRect.left - trackRect.left,
        width: elRect.width,
      });
    }
  }, [selectedTab, tabs]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
    onChange?.(tabId);
  };

  const setRef = (id: string) => (el: HTMLButtonElement | null) => {
    if (el) {
      tabRefs.current.set(id, el);
    } else {
      tabRefs.current.delete(id);
    }
  };

  return (
    <div className={cn("inline-flex", className)}>
      <div
        ref={trackRef}
        className={cn(
          "relative inline-flex items-center rounded-full p-1",
          trackBg,
        )}
      >
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute top-1 bottom-1 rounded-full shadow-sm transition-all duration-300 ease-in-out",
            indicatorBg,
          )}
          style={{ left: indicator.left, width: indicator.width }}
        />

        {tabs.map((tab) => {
          if (tab.subItems && tab.subItems.length > 0) {
            const groupActive = tab.subItems.some((s) => s.id === selectedTab);

            if (!groupActive) {
              // Collapsed: show single button with parent label
              return (
                <button
                  key={tab.id}
                  ref={setRef(tab.id)}
                  type="button"
                  role="tab"
                  aria-selected={false}
                  onClick={() => handleTabChange(tab.subItems![0]!.id)}
                  className={cn(
                    "relative z-10 cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300",
                    inactiveTextColor,
                  )}
                >
                  {tab.label}
                </button>
              );
            }

            // Expanded: show sub-item buttons
            return (
              <div key={tab.id} className="relative flex items-center">
                {/* <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 text-[10px] font-semibold text-gray-900">
                  {tab.label}
                </span> */}

                {tab.subItems.map((sub) => (
                  <button
                    key={sub.id}
                    ref={setRef(sub.id)}
                    type="button"
                    role="tab"
                    aria-selected={selectedTab === sub.id}
                    onClick={() => handleTabChange(sub.id)}
                    className={cn(
                      "relative z-10 cursor-pointer rounded-full px-2 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300",
                      selectedTab === sub.id
                        ? activeTextColor
                        : inactiveTextColor,
                    )}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            );
          }

          return (
            <button
              key={tab.id}
              ref={setRef(tab.id)}
              type="button"
              role="tab"
              aria-selected={selectedTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "relative z-10 cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-300",
                selectedTab === tab.id ? activeTextColor : inactiveTextColor,
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
