"use client";

import React from "react";
import { useTabsContext } from "./tabs";

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  index,
  className = "",
}) => {
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;

  return (
    <div role="tabpanel" hidden={!isSelected} className={className}>
      {isSelected ? children : null}
    </div>
  );
};
