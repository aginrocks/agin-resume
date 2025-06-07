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
                firstName: 'John',
                lastName: 'Doe',
                jobTitle: 'Software Engineer',
                email: 'john.doe@example.com',
                phone: '123-456-7890',
            },
            overview:
                'Experienced software engineer with a passion for developing innovative programs.',
            experience: [
                {
                    company: 'Tech Company',
                    jobTitle: 'Senior Developer',
                    startDate: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth(),
                    },
                    endDate: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth(),
                    },
                    description: 'Worked on various projects using React and Node.js.',
                    location: 'New York, NY',
                    isPresent: false,
                },
            ],
            skills: ['JavaScript', 'React', 'Node.js'],
            hobby: 'Coding and hiking',
            gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
            languages: [
                {
                    language: 'English',
                    level: 'C1',
                    isNative: true,
                },
                {
                    language: 'Spanish',
                    level: 'B2',
                    isNative: false,
                },
            ],
            links: [],
            education: [
                {
                    institution: 'Harvard University',
                    degree: 'Bachelor of Science in Computer Science',
                    startDate: {
                        year: 2015,
                        month: 8,
                    },
                    endDate: {
                        year: 2019,
                        month: 5,
                    },
                    isPresent: false,
                },
            ],
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
