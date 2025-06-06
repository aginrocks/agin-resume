import { IconAlignLeft } from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';

export function SummarySection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    return (
        <Section
            title="Summary"
            description="A brief summary of your experience and skills"
            icon={IconAlignLeft}
        >
            <FormField
                control={form.control}
                name="overview"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Summary</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="Your experience and skills"
                                rows={4}
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
