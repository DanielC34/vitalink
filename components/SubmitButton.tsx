import React from 'react'
import { Button } from "@/components/ui/button";

interface ButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children}: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex gap-4 items-center">
          <svg
            className="mr-3 w-5 h-5 animate-spin text-white" // Correct Tailwind classes
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton