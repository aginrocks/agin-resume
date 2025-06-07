import { z } from 'zod';

export const TEMPLATES = ['modern', 'modern-2', 'simple'] as const;

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

export const LANGUAGE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export const languageSchema = z.object({
    language: z.string().min(1, 'Language is required'),
    level: z.enum(LANGUAGE_LEVELS).optional(),
    isNative: z.boolean().default(false).optional(),
});

export const linkSchema = z.object({
    label: z.string().min(1, 'Label is required'),
    url: z.string().url('Invalid URL').min(1, 'URL is required'),
});

export const resumeSchema = z.object({
    template: z.enum(TEMPLATES).default('modern').optional(),
    personalData: z.object({
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        email: z.string().email('Invalid email address'),
        phone: z.string().optional(),
        jobTitle: z.string().optional(),
        photo: z.string().optional(),
    }),
    overview: z.string().optional(),
    experience: z.array(experienceSchema),
    skills: z.array(z.string()),
    hobby: z.string().optional(),
    gdpr: z.string().optional(),
    languages: z.array(languageSchema),
    links: z.array(linkSchema),
});
