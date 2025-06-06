import { z } from 'zod';

export const experienceSchema = z.object({
    jobTitle: z.string().min(1, 'Job title is required'),
    company: z.string().min(1, 'Company name is required'),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    description: z.string().optional(),
    isPresent: z.boolean().default(false).optional(),
});

export const resumeSchema = z.object({
    personalData: z.object({
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        email: z.string().email('Invalid email address').optional(),
        phone: z.string().optional(),
        jobTitle: z.string().optional(),
    }),
    overview: z.string().optional(),
    experience: z.array(experienceSchema),
    skills: z.array(z.string()),
    hobby: z.string().optional(),
});
