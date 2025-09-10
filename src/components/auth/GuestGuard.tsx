"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({ children }: GuestGuardProps) {
  const { data, status } = useSession();
  const router = useRouter();

  // Debug logging
  console.log("GuestGuard status:", status);
  console.log("GuestGuard session data:", data);

  React.useEffect(() => {
    // Only redirect authenticated users to dashboard
    if (status === "authenticated" && data?.user) {
      console.log("User is authenticated, redirecting to dashboard");
      router.replace("/dashboard");
    }
  }, [status, data, router]);

  // Show loading spinner while checking authentication
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // If user is authenticated, this component will immediately redirect
  // and we don't want to show the children (guest pages)
  if (status === "authenticated" && data?.user) {
    console.log("User is authenticated, not showing guest content");
    return null;
  }

  // If not authenticated or we're not sure yet, show guest content
  console.log("User is not authenticated, showing guest content");
  return <>{children}</>;
}
