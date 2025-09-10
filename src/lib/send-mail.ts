"use server";

import NodeFormData from "form-data"; // Rename the Node.js import
import Mailgun from "mailgun.js";

// Initialize Mailgun client
// @ts-ignore - Mailgun types are not properly defined
const mailgun = new Mailgun(NodeFormData); // Use the Node.js FormData for Mailgun
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
  url: "https://api.mailgun.net", // Use api.eu.mailgun.net for EU domains
  timeout: 60000, // Increase timeout to 60 seconds
  retry: 3 // Add retry logic
});

// Make sure we use the correct domain format
const DOMAIN = process.env.MAILGUN_DOMAIN || "mail.worldofinterns.com";
console.log("Mailgun Domain:", DOMAIN);
console.log("Mailgun API Key exists:", !!process.env.MAILGUN_API_KEY);

// Alternative direct API approach with retry logic
async function sendMailgunDirectAPI(to: string, subject: string, text: string, html: string) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = DOMAIN;
  const url = `https://api.mailgun.net/v3/${domain}/messages`;

  // Use Node.js FormData for server-side requests
  const formData = new NodeFormData();
  formData.append('from', `World of Interns <postmaster@${domain}>`);
  formData.append('to', to);
  formData.append('subject', subject);
  formData.append('text', text);
  formData.append('html', html);

  // Retry logic
  const maxRetries = 3;
  let retryCount = 0;
  let lastError = null;

  while (retryCount < maxRetries) {
    try {
      console.log(`Direct API attempt ${retryCount + 1} of ${maxRetries}`);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
          // Don't set Content-Type header, let Node.js FormData handle it
          ...formData.getHeaders(), // This adds the proper multipart headers
        },
        body: formData as any, // Type assertion for Node.js FormData
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Direct API HTTP error: ${response.status} ${response.statusText}`);
        console.error(`Response body: ${errorText}`);
        throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Direct API response:', data);
      return { success: true, data };
    } catch (error) {
      console.error(`Direct API error (attempt ${retryCount + 1}):`, error);
      lastError = error;
      retryCount++;

      if (retryCount < maxRetries) {
        const waitTime = Math.pow(2, retryCount) * 1000;
        console.log(`Waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }

  console.error(`Failed after ${maxRetries} attempts`);
  return { success: false, error: lastError };
}

/**
 * Send an email using Mailgun
 */
export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string
): Promise<{ success: boolean; message: string; data?: any }> {
  if (!to || !subject) {
    console.error("Missing required email parameters");
    return { success: false, message: "Missing required email parameters" };
  }

  console.log(`Attempting to send email to ${to} using domain ${DOMAIN}`);
  console.log(`Mailgun API Key exists: ${!!process.env.MAILGUN_API_KEY}`);
  console.log(`Mailgun Domain exists: ${!!process.env.MAILGUN_DOMAIN}`);

  if (!process.env.MAILGUN_API_KEY || !DOMAIN) {
    console.error("Missing Mailgun configuration");
    return { success: false, message: "Email service is not properly configured" };
  }

  try {
    console.log("Attempting to send via Mailgun client...");
    const data = await mg.messages.create(DOMAIN, {
      from: `World of Interns <postmaster@${DOMAIN}>`,
      to: [to],
      subject,
      text,
      html,
    });

    console.log('Email sent successfully via Mailgun client:', data.id);
    return { success: true, message: "Email sent successfully", data };
  } catch (error: any) {
    console.error("Error sending email via Mailgun client:", error);
    console.error("Error details:", JSON.stringify({
      statusCode: error.statusCode,
      message: error.message,
      details: error.details || 'No details available',
      stack: error.stack
    }, null, 2));

    console.log("Trying direct API approach...");
    try {
      const directResult = await sendMailgunDirectAPI(to, subject, text, html);
      if (directResult.success) {
        console.log('Email sent successfully via direct API');
        return { success: true, message: "Email sent successfully via alternative method", data: directResult.data };
      } else {
        throw new Error("Direct API method also failed");
      }
    } catch (directError: any) {
      console.error("Error sending email via direct API:", directError);
      return { success: false, message: `Failed to send email: ${error.message || 'Unknown error'}` };
    }
  }
}

/**
 * Send OTP email using Mailgun
 */
export async function sendOtpEmail(email: string, otp: string): Promise<{ success: boolean; message: string }> {
  try {
    const subject = "Your Verification Code";
    const text = `Your verification code is ${otp}. This code will expire in 5 minutes.`;
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Verify Your Email</h2>
        <p>Your verification code is:</p>
        <h1 style="color: #CD2A51; font-size: 32px; letter-spacing: 5px; margin: 20px 0;">${otp}</h1>
        <p style="color: #666;">This code will expire in 5 minutes.</p>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">If you didn't request this code, please ignore this email.</p>
      </div>
    `;

    const result = await sendEmail(email, subject, text, html);
    return { success: result.success, message: result.success ? "OTP sent successfully." : result.message };
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return { success: false, message: "Failed to send OTP. Please try again." };
  }
}