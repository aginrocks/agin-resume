'use client';
import { z } from 'zod';
import { Core } from './core';
import { Preview } from './preview';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { resumeSchema } from '@lib/resume-schema';
import { createContext } from 'react';
import { Form } from '@components/ui/form';

export function Editor() {
    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            personalData: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                email: '',
                phone: '',
            },
            overview: '',
            experience: [],
            skills: [],
        },
    });

    return (
        <Form {...form}>
            <div className="flex h-screen">
                <Core />
                <Preview />
            </div>
        </Form>
    );
}
