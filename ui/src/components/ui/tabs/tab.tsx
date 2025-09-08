"use client";

import React from "react";
import { useTabsContext } from "./tabs";

export interface TabProps {
  tabName?: string;
  children: React.ReactNode;
  index: number;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  tabName = "Tab",
  children,
  index,
  className = "",
}) => {
  const { selectedIndex, setSelectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;

  return (
    <label
      htmlFor={tabName}
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={className}
      onClick={() => setSelectedIndex(index)}
    >
      {children}
    </label>
  );
};
