"use client";

import React from "react";

import AboutSection from "./components/about-section";
import { Terminal } from "@repo/ui/components/terminal/terminal";

function Me() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Terminal time={"xx:xx"} version={"1.0.0"} theme="dark" />
      <AboutSection />
    </div>
  );
}

export default Me;
