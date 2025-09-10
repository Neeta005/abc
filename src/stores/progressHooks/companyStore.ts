import { create } from 'zustand';
import { createProgressStore } from '../progressStepperStore';
import { companyRegistration } from '@/constants/progressConstants';

export const useCompanyProgressStore = create(createProgressStore(companyRegistration));
