"use client";
import { useRouter } from "next/navigation";
const GoBack = () => {
  const router = useRouter();
  return (
    <div className="p-5">
      <button
        className="btn font-semibold dark:text-white"
        type="button"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
        Go Back
      </button>
    </div>
  );
};

export default GoBack;
