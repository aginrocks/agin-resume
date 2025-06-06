import { Document, Page, Text } from '@react-pdf/renderer';
import { ModernTemplate } from './templates';
import z from 'zod';
import { resumeSchema } from '@lib/resume-schema';

// Import font configuration to register Roboto font
import '@lib/fonts';

export type RendererProps = {
    data: z.infer<typeof resumeSchema>;
};

export function Renderer({ data }: RendererProps) {
    return (
        <Document>
            <Page size="A4">
                <ModernTemplate data={data} />
            </Page>
        </Document>
    );
}
