'use client';
import { z } from 'zod';
import { Core } from './core';
import { Preview } from './preview';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { resumeSchema } from '@lib/resume-schema';
import { createContext } from 'react';

export const ResumeContext = createContext<UseFormReturn<z.infer<typeof resumeSchema>> | null>(
    null
);

export function Editor() {
    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
    });

    return (
        <ResumeContext.Provider value={form}>
            <div className="flex h-screen">
                <Core />
                <Preview />
            </div>
        </ResumeContext.Provider>
    );
}
