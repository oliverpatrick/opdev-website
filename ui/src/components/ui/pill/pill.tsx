"use client";

import React, { useEffect } from "react";
import "./pill.css";

type Props = {
  test: string;
};

const Pill: React.FC<Props> = ({ test }) => {
  console.log("Pill component rendered with test prop:", test);
  useEffect(() => {
    // Move the Pane initialization and other logic here if needed
    // or remove if not actually used in this component
  }, []);

  return (
    <div className="control">
      <div className="control__track">
        <div className="indicator"></div>
        <label htmlFor="free">Me</label>
        <input
          className="sr-only"
          type="radio"
          name="tier"
          id="free"
          defaultChecked
        />
        <div className="premium">
          <div className="indicator"></div>
          <label htmlFor="solo">
            <span>Work</span>
            <span className="sr-only">Career Work</span>
          </label>
          <input className="sr-only" type="radio" name="tier" id="solo" />
          <label htmlFor="team">
            <span>Play</span>
            <span className="sr-only">Career Play</span>
          </label>
          <input className="sr-only" type="radio" name="tier" id="team" />
        </div>
      </div>
    </div>
  );
};

export default Pill;
