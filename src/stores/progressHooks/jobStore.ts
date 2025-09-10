import { create } from 'zustand';
import { createProgressStore } from '../progressStepperStore';
import { jobPostingProgress } from '@/constants/progressConstants';

export const useJobProgressStore = create(createProgressStore(jobPostingProgress));
