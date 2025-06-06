import { z } from 'zod';

export const dateSchema = z.object({
    year: z
        .number()
        .int()
        .min(1900, 'Year must be a valid year')
        .max(new Date().getFullYear(), 'Year cannot be in the future')
        .optional(),
    month: z
        .number()
        .int()
        .min(0, 'Month must be between 0 and 11')
        .max(11, 'Month must be between 0 and 11')
        .optional(),
});

export const experienceSchema = z.object({
    jobTitle: z.string().min(1, 'Job title is required'),
    company: z.string().min(1, 'Company name is required'),
    startDate: dateSchema,
    endDate: dateSchema,
    description: z.string().optional(),
    isPresent: z.boolean().default(false).optional(),
    location: z.string().optional(),
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
    gdpr: z.string().optional(),
});
