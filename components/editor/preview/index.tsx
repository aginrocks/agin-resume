'use client';
import { useState, useEffect, useContext } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { BlobProvider, pdf } from '@react-pdf/renderer';
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

    const [data, setData] = useState<z.infer<typeof resumeSchema>>(
        form.getValues() as z.infer<typeof resumeSchema>
    );

    useEffect(() => {
        const callback = form.subscribe({
            formState: {
                values: true,
            },
            callback: ({ values }) => {
                setData(values as z.infer<typeof resumeSchema>);
            },
        });

        return () => callback();
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div className="flex-1 w-full border-l border-sidebar-border bg-sidebar flex flex-col">
            <PreviewHeader />
            <div className="flex justify-center items-center flex-col gap-4 flex-1 px-4">
                <BlobProvider document={<Renderer data={data} />}>
                    {({ blob, url, loading, error }) => {
                        if (!blob || loading) return <p>Loading</p>;
                        return (
                            <Document
                                file={blob}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={
                                    <div className="flex items-center justify-center h-full">
                                        {/* <p>Loading PDF...</p> */}
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
                        );
                    }}
                </BlobProvider>
            </div>
        </div>
    );
}
