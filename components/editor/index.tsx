'use client';
import { z } from 'zod';
import { Core } from './core';
import { Preview } from './preview';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resumeSchema } from '@lib/resume-schema';
import { Form } from '@components/ui/form';
import { useMediaQuery } from '@mantine/hooks';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const FullUiAtom = atom(true);

export const TabAtom = atom<'core' | 'preview'>('core');

export function Editor() {
    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            template: 'modern-2',
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
            hobby: '',
            gdpr: '',
            languages: [],
            links: [],
            education: [],
        },
    });

    const setFullUi = useSetAtom(FullUiAtom);
    const tab = useAtomValue(TabAtom);

    const fullUi = useMediaQuery('(min-width: 1060px)') ?? true;
    useEffect(() => {
        setFullUi(fullUi);
    }, [fullUi, setFullUi]);

    return (
        <Form {...form}>
            <div className="flex h-screen">
                {(fullUi || tab === 'core') && <Core />}
                {(fullUi || tab === 'preview') && <Preview />}
            </div>
        </Form>
    );
}
