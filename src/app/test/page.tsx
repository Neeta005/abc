"use client";

import { useState } from 'react';
import { login } from '@/lib/actions/auth';
import { sendOtpEmail } from '@/lib/send-mail';

export default function TestPage() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testLinkedIn = async () => {
    try {
      setLoading(true);
      setResult({ message: "Attempting to sign in with LinkedIn..." });
      await login();
      setResult({ success: true, message: "LinkedIn login initiated" });
    } catch (error: any) {
      setResult({ 
        success: false, 
        message: "LinkedIn login failed", 
        error: error.message || String(error) 
      });
    } finally {
      setLoading(false);
    }
  };

  const testOtp = async () => {
    if (!email) {
      setResult({ success: false, message: "Please enter an email address" });
      return;
    }

    try {
      setLoading(true);
      setResult({ message: "Sending test OTP..." });
      
      // Generate a test OTP
      const testOtp = "123456";
      
      // Send the test OTP
      const response = await sendOtpEmail(email, testOtp);
      
      setResult({
        success: response.success,
        message: response.message,
        details: "Check the server logs for more information"
      });
    } catch (error: any) {
      setResult({
        success: false,
        message: "Failed to send OTP",
        error: error.message || String(error)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Authentication Test Page</h1>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Test LinkedIn Authentication</h2>
        <button 
          onClick={testLinkedIn}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Test LinkedIn Login
        </button>
      </div>

      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Test OTP Email</h2>
        <div className="mb-4">
          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <button
          onClick={testOtp}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          Send Test OTP
        </button>
      </div>

      {result && (
        <div className={`p-4 rounded ${result.success ? 'bg-green-100' : result.success === false ? 'bg-red-100' : 'bg-yellow-100'}`}>
          <h3 className="font-semibold">{result.success ? 'Success' : result.success === false ? 'Error' : 'Processing'}</h3>
          <p>{result.message}</p>
          {result.error && <p className="text-red-600 mt-2">{result.error}</p>}
          {result.details && <p className="text-gray-600 mt-2 text-sm">{result.details}</p>}
        </div>
      )}
    </div>
  );
}
