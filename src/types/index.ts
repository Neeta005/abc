export type Role = "student" | "employer" | "admin";
export type JobType = "full-time" | "part-time" | "internship";
export type JobStatus = "open" | "closed" | "draft";
export type ApplicationStatus = "pending" | "shortlisted" | "interview" | "accepted" | "rejected";
export type InterviewStatus = "scheduled" | "completed" | "cancelled";
export type PaymentProvider = "stripe" | "razorpay";
export type PaymentStatus = "pending" | "completed" | "failed";
export type PaymentType = "premium_subscription" | "job_boost";
export type NotificationType = "application_status" | "interview_scheduled" | "job_offer" | "message";

// Question
export interface Question {
  id: string;
  type: 'text' | 'multiple-choice' | 'yes-no' | 'number';
  text: string;
  required: boolean;
  options?: string[];
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
}

// User
export interface User {
  _id?: string;
  email: string;
  role: Role;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  profile: StudentProfile | EmployerProfile; // Reference to StudentProfile or EmployerProfile _id
  isVerified?: boolean;
}

// Student Profile
export interface StudentProfile {
  _id?: string;
  userId: User; // Reference to User
  avatar: string; // AWS S3 URL
  resume: string; // AWS S3 URL
  fullName: string;
  gender: string;
  governmentId: string;
  dateOfBirth: string; // ISO date string
  courses: string[];
  cgpa: string;
  linkedIn: string;
  github: string;
  country: string;
  state: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };
  languages: string[];
  skills: string[];
  certifications: string[];
  achievements: string[];
  updatedAt: string; // ISO date string
}

export interface Company {
  _id?: string;
  name: string;
  logoUrl: string;
  description: string;
  phone: string;
  email: string;
  addressLine1: string;
  country: string;
  state: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };
  website: string;
}

// Employer Profile
export interface EmployerProfile {
  _id?: string;
  userId: User; // Reference to User
  company: Company;
  avatar: string; // AWS S3 URL
  name: string;
  website: string;
  linkedin: string;
  type: string;
  addressLine1: string;
  country: string;
  state: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };
  fullName: string;
  phone: string;
  email: string;
  updatedAt: string; // ISO date string
}

// Job
export interface Job {
  _id?: string;
  employerId: User; // Reference to User (employer)
  roleName: string;
  company: string;
  skills: string[];
  noOfOpenings: number;
  jobType: JobType;
  workType: string; // E.g., "remote", "on-site", "hybrid"
  modeOfInterview: string; // E.g., "online", "in-person"
  fullAddress: string;
  country: string;
  state: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  };
  transportationSupport?: boolean;
  responsibilities: string;
  training: boolean;
  offerLetter: boolean;
  certificate: boolean;
  stipendPerMonth: number;
  bonus: number;
  questions: Question[];
  interviewMethod: string;
  status: JobStatus;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  applicationCount: number;
}

// Extended Job
export interface ExtendedJob extends Job {
  companyDescription: string; // For "About Makro Pro" section
  jobOverview: string; // For "Job Overview" section
  whatYouWillDo: string[]; // For "What You Will Do" section
  postedDate?: string; // ISO date string
  applicationDeadline?: string; // ISO date string
  experienceLevel?: string;
  salaryRange?: string;
}

// Application
export interface Application {
  _id?: string;
  job: Job; // Reference to Job
  student: User; // Reference to User (student)
  status: ApplicationStatus;
  coverLetter?: string; // Optional
  resume: string; // AWS S3 URL
  appliedAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Interview
export interface InterviewSlot {
  startTime: string; // ISO date string
  endTime: string; // ISO date string
  link?: string; // Optional external link (e.g., Zoom)
}

export interface Interview {
  _id?: string;
  application: Application; // Reference to Application
  job: Job; // Reference to Job
  student: User; // Reference to User (student)
  employer: User; // Reference to User (employer)
  slot: InterviewSlot;
  status: InterviewStatus;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Payment
export interface Payment {
  _id?: string;
  user: User; // Reference to User
  paymentProvider: PaymentProvider;
  paymentId: string; // Provider-specific ID
  amount: number;
  currency: string;
  status: PaymentStatus;
  type: PaymentType;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Notification
export interface Notification {
  _id?: string;
  user: User; // Reference to User
  type: NotificationType;
  message: string;
  related: any; // Reference to related entity (e.g., Application, Interview)
  isRead: boolean;
  createdAt: string; // ISO date string
}

// Chat
export interface ChatMessage {
  sender: User; // Reference to User
  content: string;
  sentAt: string; // ISO date string
  isRead: boolean;
}

export interface Chat {
  _id?: string;
  participants: User[]; // References to Users (student + employer)
  messages: ChatMessage[];
  updatedAt: string; // ISO date string
}

// Site Settings
export interface SiteSetting {
  _id?: string;
  key: string; // E.g., "premium_price"
  value: any; // Flexible type
  updatedAt: string; // ISO date string
}

// Error Log
export interface ErrorLog {
  _id?: string;
  message: string;
  stack: string;
  endpoint: string; // E.g., "/api/jobs"
  createdAt: string; // ISO date string
  user?: User; // Optional, reference to User
}