export type UserRole = 'student' | 'employer' | 'admin';

export interface User {
  _id: string;
  email: string;
  name: string;
  role: UserRole;
  bio?: string;
  logoUrl?: string | null;
  skills?: string[];
  companyName?: string;
  companyWebsite?: string;
  appliedJobs?: string[];
  postedJobs?: string[];
  linkedInId?: string;
  lastLogin?: Date;
  location?: {
    type: string;
    coordinates: [number, number];
  };
  isVerified?: boolean;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  createdAt?: string;
  updatedAt?: string;
}