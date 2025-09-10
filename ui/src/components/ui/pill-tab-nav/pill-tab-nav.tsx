"use client";

import React, { useState } from "react";
import { useTabsContext } from "../tabs/tabs";

export const PillTabNav: React.FC = () => {
  const { setSelectedIndex } = useTabsContext();
  const [selectedTab, setSelectedTab] = useState("me");

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="control">
      <div className="control__track">
        <div className="indicator"></div>
        <label htmlFor="me" tabIndex={0} onClick={() => setSelectedIndex(0)}>
          Me
        </label>
        <input
          className="sr-only"
          type="radio"
          name="me"
          id="me"
          checked={selectedTab === "me"}
          onChange={() => handleTabChange("me")}
        />
        <div className="premium">
          <div className="indicator"></div>
          <label
            htmlFor="work"
            tabIndex={1}
            onClick={() => setSelectedIndex(1)}
          >
            <span>Work</span>
            <span className="sr-only">Career Work</span>
          </label>
          <input
            className="sr-only"
            type="radio"
            name="tier"
            id="work"
            checked={selectedTab === "work"}
            onChange={() => handleTabChange("work")}
          />
          <label
            htmlFor="play"
            tabIndex={2}
            onClick={() => setSelectedIndex(2)}
          >
            <span>Play</span>
            <span className="sr-only">Career Play</span>
          </label>
          <input
            className="sr-only"
            type="radio"
            name="play"
            id="play"
            checked={selectedTab === "play"}
            onChange={() => handleTabChange("play")}
          />
        </div>
      </div>
    </div>
  );
};
