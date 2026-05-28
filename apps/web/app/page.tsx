"use client";

import { useState } from "react";

import { PillTabNav } from "@repo/ui/components/pill-navigation/pill-navigation";

import Me from "../features/me/me";
import Play from "../features/play/play";
import Work from "../features/work";

const tabs = [
  {
    id: "me",
    label: "Me",
  },
  {
    id: "work",
    label: "Work",
    subItems: [
      { id: "work", label: "Work" },
      { id: "play", label: "Play" },
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("me");

  return (
    <div className="bg-white">
      <main className="p-4">
        <div className="flex justify-center mb-8">
          <PillTabNav tabs={tabs} defaultTab="me" onChange={setActiveTab} />
        </div>
        {activeTab === "me" && <Me />}
        {activeTab === "work" && <Work />}
        {activeTab === "play" && <Play />}
      </main>
    </div>
  );
}
