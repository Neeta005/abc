"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function AuthTestPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLinkedInLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      const result = await signIn("linkedin", { 
        redirect: false,
        callbackUrl: "/dashboard"
      });
      
      if (result?.error) {
        setError(`LinkedIn login failed: ${result.error}`);
      } else if (result?.url) {
        setSuccess("Redirecting to LinkedIn...");
        window.location.href = result.url;
      }
    } catch (err: any) {
      setError(`Error: ${err.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Authentication Test Page</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Session Status: {status}</h2>
        
        {status === "authenticated" && (
          <div className="bg-green-50 p-4 rounded-md mb-4">
            <h3 className="font-medium text-green-800">Authenticated as:</h3>
            <pre className="mt-2 text-sm bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        )}
        
        {status === "unauthenticated" && (
          <div className="flex flex-col gap-4">
            <button
              onClick={handleLinkedInLogin}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
              {loading ? "Connecting..." : "Sign in with LinkedIn"}
            </button>
          </div>
        )}
        
        {error && (
          <div className="mt-4 bg-red-50 p-4 rounded-md">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mt-4 bg-green-50 p-4 rounded-md">
            <p className="text-green-700">{success}</p>
          </div>
        )}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
        <div className="space-y-2">
          <p><strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : ''}</p>
          <p><strong>User Agent:</strong> {typeof navigator !== 'undefined' ? navigator.userAgent : ''}</p>
        </div>
      </div>
    </div>
  );
}
