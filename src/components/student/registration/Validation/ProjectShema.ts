import { z } from 'zod';

export const projectFormSchema = z.object({
    title: z.string().min(1, 'Project title is required').max(100, 'Project title is too long'),
    from: z.string().refine((date) => !!Date.parse(date), {
        message: 'From date is invalid',
    }),
    to: z.string().refine((date) => !!Date.parse(date), {
        message: 'To date is invalid',
    }),
    tasks: z
        .array(z.string().min(1, 'Task description is required'))
        .min(1, 'At least one task is required'),
    description: z
        .string()
        .min(10, 'Description should be at least 10 characters')
        .max(1000, 'Description is too long'),
});
