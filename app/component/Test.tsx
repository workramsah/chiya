"use client";

import toast from "react-hot-toast";

export default function Test() {
  return (
    <button
      onClick={() => toast.success("Successfully saved!")}
      className="px-4 py-2 bg-green-600 text-white rounded"
    >
      Show Toast
    </button>
  );
}
