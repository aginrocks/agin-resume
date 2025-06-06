import { IconHorseToy } from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';

export function HobbySection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    return (
        <Section title="Hobby" description="Your hobbies and interests" icon={IconHorseToy}>
            <FormField
                control={form.control}
                name="hobby"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Hobby</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Your hobbies and interests"
                                rows={2}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Section>
    );
}
