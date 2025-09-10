"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
  redirectTo?: string;
}

export function AuthGuard({ children, redirectTo = "/home" }: AuthGuardProps) {
  const { data, status } = useSession();
  const router = useRouter();

  // Debug logging
  console.log("AuthGuard status:", status);
  console.log("AuthGuard session data:", data);

  useEffect(() => {
    // Only redirect if definitely unauthenticated
    if (status === "unauthenticated") {
      console.log("User is unauthenticated, redirecting to", redirectTo);
      router.replace(redirectTo);
    }
  }, [status, redirectTo, router]);

  // Show loading spinner while checking authentication
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // If definitely unauthenticated, don't render children
  if (status === "unauthenticated") {
    return null;
  }

  // If authenticated or we're not sure yet, render children
  console.log("User is authenticated, rendering protected content");
  return <>{children}</>;
}
