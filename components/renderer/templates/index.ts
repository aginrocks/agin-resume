import { resumeSchema } from '@lib/resume-schema';
import z from 'zod';

export * from './modern';

export type TemplateProps = {
    data: z.infer<typeof resumeSchema>;
};
