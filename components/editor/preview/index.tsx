'use client';
import { useState } from 'react';
import { PreviewHeader } from './header';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';
import { PreviewContent } from './content';
import { EmptyState } from '@components/ui/empty-state';
import { IconFileText } from '@tabler/icons-react';

export function Preview() {
    const [pdfBlob, setPdfBlob] = useState<string | null>(null);

    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const firstName = form.watch('personalData.firstName');
    const lastName = form.watch('personalData.lastName');
    const email = form.watch('personalData.email');

    const canPreview = !!(firstName && lastName && email);

    return (
        <div className="flex-1 w-full border-l border-sidebar-border bg-sidebar flex flex-col">
            <PreviewHeader downloadUrl={pdfBlob || undefined} canPreview={canPreview} />
            <div className="flex justify-center items-center flex-col gap-4 flex-1 px-4">
                {canPreview ? (
                    <PreviewContent pdfBlob={pdfBlob} setPdfBlob={setPdfBlob} />
                ) : (
                    <EmptyState
                        icon={IconFileText}
                        title="Welcome to Agin Resume"
                        description="Start by filling out your personal information, and we will generate a preview of your resume."
                    />
                )}
            </div>
        </div>
    );
}
