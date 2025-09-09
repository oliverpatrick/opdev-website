"use client";

import { useState } from "react";
import "./xbox-notification.css";

function XboxNotification() {
  const [key, setKey] = useState(0);

  const handleClick = () => setKey(prev => prev + 1);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <button
        onClick={handleClick}
        className="mb-8 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
      >
        Trigger Animation
      </button>

      <div key={key} className="achievement-banner animated">
        {/* Loaders */}
        <div className="achievement-loader"></div>
        <div className="achievement-loader"></div>
        <div className="achievement-loader"></div>
        <div className="achievement-loader"></div>
        <div className="achievement-loader"></div>

        {/* Trophy */}
        <div className="achievement-trophy">🏆</div>

        {/* Text */}
        <div className="achievement-text">
          <p className="achievement-notification text-2xl font-bold">
            Achievement Unlocked
          </p>
          <p className="achievement-name">
            <span className="inline-block mr-2">🏅</span>
            1,000 – CSS Achievement Banner
          </p>
        </div>
      </div>
    </div>
  );
}

export default XboxNotification;
