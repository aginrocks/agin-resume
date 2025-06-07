import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import z from 'zod';
import { dateSchema } from './resume-schema';
import { months } from './months';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type RenderDateRangeProps = {
    startDate: z.infer<typeof dateSchema>;
    endDate: z.infer<typeof dateSchema>;
    isPresent: boolean | undefined;
};

export function renderDateRange(props: RenderDateRangeProps) {
    const { startDate, endDate, isPresent } = props;

    if (startDate.month === undefined || startDate.year === undefined) return undefined;

    if ((endDate.month === undefined || endDate.year === undefined) && !isPresent) return undefined;

    return `${months[startDate.month as number]} ${startDate.year} - ${
        isPresent ? 'Present' : `${months[endDate.month as number]} ${endDate.year}`
    }`;
}

export function blobToBase64(blob: Blob): Promise<typeof FileReader.prototype.result> {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
