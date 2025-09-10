
import { create } from 'zustand';
import { createProgressStore } from '../progressStepperStore';
import { studentRegistration } from '@/constants/progressConstants';

export const useStudentProgressStore = create(createProgressStore(studentRegistration));
