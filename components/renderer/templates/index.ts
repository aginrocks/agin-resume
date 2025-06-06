import { resumeSchema } from '@lib/resume-schema';
import z from 'zod';

export * from './modern';

export type TemplateProps = {
    data: z.infer<typeof resumeSchema>;
};

export type TitleProps = {
    title: string;
};

export type SlotTemplateProps = TemplateProps & {
    titleSlot: ({ title }: TitleProps) => React.ReactNode;
};
