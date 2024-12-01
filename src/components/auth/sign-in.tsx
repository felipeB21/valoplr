// Add the 'use client' directive to indicate this is a Client Component
"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function SignIn() {
  // Handle form submission with preventDefault to avoid page reload
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents default form submission behavior
    await signIn("google"); // Initiates sign-in with Google
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 w-full py-1.5 rounded-full"
      >
        Sign in with Google
      </button>
    </form>
  );
}
