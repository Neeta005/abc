// Comprehensive environment variable checker
require('dotenv').config();

console.log('\n===== AUTHENTICATION VARIABLES =====');
console.log('NEXTAUTH_SECRET exists:', !!process.env.NEXTAUTH_SECRET);
console.log('AUTH_SECRET exists:', !!process.env.AUTH_SECRET);
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
console.log('NEXTAUTH_URL is correctly formatted:', 
  process.env.NEXTAUTH_URL && !process.env.NEXTAUTH_URL.includes('/api/auth/callback'));

console.log('\n===== LINKEDIN OAUTH VARIABLES =====');
console.log('AUTH_LINKEDIN_ID exists:', !!process.env.AUTH_LINKEDIN_ID);
console.log('AUTH_LINKEDIN_SECRET exists:', !!process.env.AUTH_LINKEDIN_SECRET);

console.log('\n===== DATABASE VARIABLES =====');
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);

console.log('\n===== EMAIL VARIABLES =====');
console.log('MAILGUN_API_KEY exists:', !!process.env.MAILGUN_API_KEY);
console.log('MAILGUN_DOMAIN exists:', !!process.env.MAILGUN_DOMAIN);

console.log('\n===== OTHER VARIABLES =====');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY exists:', !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

console.log('\n===== RECOMMENDATIONS =====');
if (!process.env.NEXTAUTH_SECRET) {
  console.log('❌ NEXTAUTH_SECRET is missing - this is required for authentication');
}
if (process.env.AUTH_SECRET && !process.env.NEXTAUTH_SECRET) {
  console.log('⚠️ You have AUTH_SECRET but not NEXTAUTH_SECRET - consider using NEXTAUTH_SECRET instead');
}
if (process.env.NEXTAUTH_URL && process.env.NEXTAUTH_URL.includes('/api/auth/callback')) {
  console.log('❌ NEXTAUTH_URL should be the base URL of your application, not the callback URL');
  console.log('   Change it to: ' + process.env.NEXTAUTH_URL.split('/api/auth/callback')[0]);
}
if (!process.env.AUTH_LINKEDIN_ID || !process.env.AUTH_LINKEDIN_SECRET) {
  console.log('❌ LinkedIn OAuth credentials are missing - LinkedIn authentication will not work');
}
if (!process.env.MONGODB_URI) {
  console.log('❌ MONGODB_URI is missing - database connections will fail');
}
if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.log('❌ Mailgun credentials are missing - email functionality will not work');
}
