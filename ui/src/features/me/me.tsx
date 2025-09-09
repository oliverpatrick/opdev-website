"use client";

import React from "react";
import MacTerminal from "../../components/ui/terminal/mac-terminal";
import Socials from "@/components/ui/socials/socials";
import AboutSection from "./ components/about-section";

function Me() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <MacTerminal />
      <Socials />
      <AboutSection />
    </div>
  );
}

export default Me;
