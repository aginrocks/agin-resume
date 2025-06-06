import { resumeSchema } from '@lib/resume-schema';
import { Styles } from '@react-pdf/renderer';
import z from 'zod';

export * from './modern';
export * from './modern-2';

export type TemplateProps = {
    data: z.infer<typeof resumeSchema>;
};

export type TitleProps = {
    title: string;
};

export type SlotTemplateProps = TemplateProps & {
    titleSlot: ({ title }: TitleProps) => React.ReactNode;
};

export type TextProps = {
    color?: string;
    size?: number;
    family?: string;
};

export function convertTextPropsToStyle(textProps?: TextProps): Styles {
    if (!textProps) return {};

    const styles = {
        color: textProps.color as any,
        fontSize: textProps.size as any,
        fontFamily: (textProps.family || 'Roboto') as any,
    };

    if (!textProps.size) delete styles.fontSize;
    if (!textProps.color) delete styles.color;
    if (!textProps.family) delete styles.fontFamily;

    return styles;
}
