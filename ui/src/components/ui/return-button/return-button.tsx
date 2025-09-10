"use client";

function ReturnButton() {
  return (
    <div
      className="cursor-pointer p-1 absolute top-0 left-0 m-4 size-10 flex justify-center items-center border-2 border-secondary bg-primary rounded-full"
      onClick={() => window.history.back()}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-secondary"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ReturnButton;
