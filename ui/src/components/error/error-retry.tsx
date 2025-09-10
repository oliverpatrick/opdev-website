import { Button } from "../ui/button/button";

export interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorRetry: React.FC<ErrorStateProps> = ({
  message,
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-8 ${className}`}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ef4444"
          strokeWidth="2"
          fill="#fee2e2"
        />
        <line x1="15" y1="9" x2="9" y2="15" stroke="#ef4444" strokeWidth="2" />
        <line x1="9" y1="9" x2="15" y2="15" stroke="#ef4444" strokeWidth="2" />
      </svg>
      <h1 className="text-red-500 text-lg mb-4">⚠️ Error</h1>
      <p className="text-gray-600 mb-4 text-center">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} className="mt-4">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorRetry;
