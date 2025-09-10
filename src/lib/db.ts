import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;

// Configure MongoDB connection options - simplified to fix connection issues
const options: any = {
  // Increase timeouts for better reliability
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000
};

// Only add SSL options if we're in production
if (process.env.NODE_ENV === 'production') {
  // These are the only SSL options that work reliably with MongoDB Atlas
  options.ssl = true;
  options.tls = true;
  // Allow self-signed certificates in production
  options.tlsAllowInvalidCertificates = true;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cachedClient: MongoClient | null = null;
let cachedClientPromise: Promise<MongoClient> | null = null;

export function connectToDatabase(): Promise<MongoClient> {
  if (cachedClientPromise) {
    return cachedClientPromise;
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MongoDB URI exists:", !!process.env.MONGODB_URI);
    
    // Create new MongoDB client with options
    cachedClient = new MongoClient(uri, options);
    
    // Connect with enhanced error handling
    cachedClientPromise = cachedClient.connect().catch(err => {
      console.error("MongoDB connection failed:", err);
      console.error("Error details:", JSON.stringify({
        name: err.name,
        message: err.message,
        stack: err.stack,
        code: err.code
      }, null, 2));
      throw err;
    });
  } catch (initError) {
    console.error("Error initializing MongoDB client:", initError);
    throw initError;
  }

  // Log when commands are started (useful for debugging)
  cachedClient.on('commandStarted', (event) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`MongoDB Command: ${event.commandName}`);
    }
  });

  return cachedClientPromise;
}

// Connect Mongoose (for models)
export async function connectMongoose() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    console.log("Attempting to connect Mongoose...");
    console.log("Using connection options:", JSON.stringify(options, null, 2));
    
    // Use the same options as the MongoDB client for consistency
    const mongooseOptions: any = {
      connectTimeoutMS: options.connectTimeoutMS,
      socketTimeoutMS: options.socketTimeoutMS
    };
    
    // Add SSL options if in production
    if (process.env.NODE_ENV === 'production') {
      mongooseOptions.ssl = options.ssl;
      mongooseOptions.tls = options.tls;
      // This is the equivalent of tlsAllowInvalidCertificates for mongoose
      mongooseOptions.tlsInsecure = true;
    }
    
    return mongoose.connect(uri, mongooseOptions);
  } catch (error) {
    console.error("Mongoose connection failed:", error);
    throw error;
  }
}

// Database name
export const DB_NAME = 'internhub';

// Export a singleton instance of MongoDB client
export const clientPromise = connectToDatabase() as Promise<MongoClient>;
