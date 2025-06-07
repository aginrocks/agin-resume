'use client';
import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { pdf } from '@react-pdf/renderer';
import { Renderer } from '@components/renderer';

// Import required CSS for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FieldValues, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';
import { DocumentCallback, OnDocumentLoadSuccess } from 'react-pdf/dist/esm/shared/types.js';

// Set up the worker with matching version
if (typeof window !== 'undefined') {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export type PreviewContentProps = {
    pdfBlob: string | null;
    setPdfBlob: Dispatch<SetStateAction<string | null>>;
};

export function PreviewContent({ pdfBlob, setPdfBlob }: PreviewContentProps) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    const [scale, setScale] = useState(1);
    const [pageDimensions, setPageDimensions] = useState<{ width: number; height: number } | null>(
        null
    );

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateScale = () => {
            if (!pageDimensions || !containerRef.current) return;

            const containerWidth = containerRef.current?.clientWidth;
            const containerHeight = containerRef.current?.clientHeight;

            if (!containerWidth || !containerHeight) {
                console.warn('Container dimensions are not available');
                return;
            }

            // Calculate a scale that fits the container
            const scaleX = containerWidth / pageDimensions.width;
            const scaleY = containerHeight / pageDimensions.height;
            const scaleFactor = Math.min(scaleX, scaleY);

            console.log(
                `Calculated scale: ${scaleFactor} (container: ${containerWidth}x${containerHeight}, page: ${pageDimensions.width}x${pageDimensions.height})`
            );

            setScale(scaleFactor);
        };

        const controller = new AbortController();

        calculateScale();

        window.addEventListener('resize', calculateScale, { signal: controller.signal });

        return () => controller.abort();
    }, [pageDimensions]);

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

    const onDocumentLoadSuccess = async (pdf: DocumentCallback) => {
        setNumPages(pdf.numPages);

        const page = await pdf.getPage(1);
        const { width: pageWidth, height: pageHeight } = page.getViewport({ scale: 1 });

        setPageDimensions({ width: pageWidth, height: pageHeight });
    };

    return (
        <div className="flex-1 w-full h-full relative" ref={containerRef}>
            <div className="absolute inset-0 flex justify-center items-center flex-col gap-4">
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
                                scale={scale}
                                className="shadow-md dark:shadow-none rounded-md overflow-hidden"
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
