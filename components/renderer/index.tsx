import { Document, Page, Text } from '@react-pdf/renderer';
import { ModernTemplate, Modern2Template, SimpleTemplate } from './templates';
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
                {data.template === 'modern' && <ModernTemplate data={data} />}
                {data.template === 'modern-2' && <Modern2Template data={data} />}
                {data.template === 'simple' && <SimpleTemplate data={data} />}
            </Page>
        </Document>
    );
}
