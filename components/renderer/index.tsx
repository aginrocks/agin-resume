import { Document, Page, Text } from '@react-pdf/renderer';
import { ModernTemplate } from './templates';

export function Renderer() {
    return (
        <Document>
            <Page size="A4">
                <ModernTemplate />
            </Page>
        </Document>
    );
}
