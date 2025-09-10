import mongoose, { Schema, Document } from "mongoose";

export type UserRole = "student" | "employer" | "admin";

export interface IUser extends Document {
  email: string;
  name: string;
  role: UserRole;
  logoUrl?: string | null;
  gender?: string;
  governmentId?: string;
  dateOfBirth?: string;
  companyName?: string;
  companyWebsite?: string;
  country?: string;
  state?: string;
  city?: string;
  bio?: string;
  cgpa?: string;
  courses?: string[];
  linkedIn?: string;
  github?: string;
  linkedinId?: string;
  location?: {
    type: string;
    coordinates: [number, number]; // [lng, lat]
  };
  appliedJobs?: string[];
  postedJobs?: string[];
  languages?: string[];
  skills?: string[];
  certifications?: string[];
  achievements: string[];
  isVerified?: boolean;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    logoUrl: { type: String },
    gender: { type: String },
    governmentId: { type: String },
    dateOfBirth: { type: String },
    companyName: { type: String },
    companyWebsite: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    bio: { type: String },
    cgpa: { type: String },
    courses: { type: [String] },
    linkedIn: { type: String },
    github: { type: String },
    linkedinId: { type: String },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    appliedJobs: { type: [String] },
    postedJobs: { type: [String] },
    languages: { type: [String] },
    skills: { type: [String] },
    certifications: { type: [String] },
    achievements: { type: [String] },
    isVerified: { type: Boolean, default: false },
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    accessToken: { type: String },
    refreshToken: { type: String },
    tokenExpiresAt: { type: Date },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }, // Auto-manage dates
  }
);

// Index for geospatial queries
UserSchema.index({ location: "2dsphere" });
// Index for faster lookups
UserSchema.index({ email: 1 });
UserSchema.index({ linkedinId: 1 });

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);