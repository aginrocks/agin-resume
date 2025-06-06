'use client';
import { useState, useEffect, useContext } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { pdf } from '@react-pdf/renderer';
import { Renderer } from '@components/renderer';

// Import required CSS for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PreviewHeader } from './header';
import { FieldValues, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';

// Set up the worker with matching version
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export function Preview() {
    const [pdfBlob, setPdfBlob] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const form = useFormContext();

    useEffect(() => {
        const generatePDF = async (values: z.infer<typeof resumeSchema>) => {
            console.log('Generating PDF with values:', values);

            try {
                setLoading(true);
                const blob = await pdf(<Renderer data={values} />).toBlob();
                const url = URL.createObjectURL(blob);

                if (pdfBlob) URL.revokeObjectURL(pdfBlob);

                setPdfBlob(url);
            } catch (error) {
                console.error('Error generating PDF:', error);
            } finally {
                setLoading(false);
            }
        };

        const callback = form.subscribe({
            formState: {
                values: true,
            },
            callback: ({ values }) => {
                generatePDF(values as z.infer<typeof resumeSchema>);
            },
        });

        generatePDF(form.getValues() as z.infer<typeof resumeSchema>);

        return () => callback();
    }, [Renderer]);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div className="flex-1 w-full border-l border-sidebar-border bg-sidebar flex flex-col">
            <PreviewHeader downloadUrl={pdfBlob || undefined} />
            <div className="flex justify-center items-center flex-col gap-4 flex-1 px-4">
                {loading ? (
                    <div className="flex items-center justify-center h-full">
                        <p>Generating PDF preview...</p>
                    </div>
                ) : pdfBlob ? (
                    <Document
                        file={pdfBlob}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex items-center justify-center h-full">
                                <p>Loading PDF...</p>
                            </div>
                        }
                        className="flex flex-col items-center"
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                scale={1}
                                className="mb-4 shadow-md dark:shadow-none rounded-md overflow-hidden"
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        ))}
                    </Document>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p>Failed to generate PDF preview</p>
                    </div>
                )}
            </div>
        </div>
    );
}
