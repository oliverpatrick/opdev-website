import React from 'react';

type ProgressBarProps = {
  progressPercentage: number;
};

const ProgressBar = ({ progressPercentage }: ProgressBarProps) => {
  return (
    <div className="h-4 max-w-80 bg-gray-300">
      <div
        style={{ width: `${progressPercentage.toString()}%` }}
        className={`h-full ${
          progressPercentage < 40 ? 'bg-red-600' : 'bg-green-600'
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
