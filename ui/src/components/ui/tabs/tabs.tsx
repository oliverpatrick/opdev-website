"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";

type TabsContextType = {
  selectedIndex: number;
  setSelectedIndex: (i: number) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  defaultIndex = 0,
  className = "",
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  return (
    <TabsContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabsContext must be used within <Tabs>");
  return ctx;
};
