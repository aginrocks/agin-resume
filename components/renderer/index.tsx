import { Document, Page, Text } from '@react-pdf/renderer';

export function Renderer() {
    return (
        <Document>
            <Page size="A4">
                <Text>Sample PDF Document</Text>
            </Page>
        </Document>
    );
}
