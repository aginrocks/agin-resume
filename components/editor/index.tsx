'use client';
import { z } from 'zod';
import { Core } from './core';
import { Preview } from './preview';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resumeSchema } from '@lib/resume-schema';
import { Form } from '@components/ui/form';

export function Editor() {
    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
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
                    startDate: new Date('2020-01-01'),
                    endDate: new Date('2021-01-01'),
                    description: 'Worked on various projects using React and Node.js.',
                },
            ],
            skills: ['JavaScript', 'React', 'Node.js'],
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
