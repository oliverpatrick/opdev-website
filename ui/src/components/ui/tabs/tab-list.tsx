"use client";

import React from "react";

export interface TabListProps {
  children: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return <div role="tablist">{children}</div>;
};
