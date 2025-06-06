import { IconHorseToy, IconShieldLock } from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';

export function GDPRSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    return (
        <Section
            title="GDPR Consent"
            description="Your consent for data processing, which is required in the European Union"
            icon={IconShieldLock}
        >
            <FormField
                control={form.control}
                name="gdpr"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>GDPR</FormLabel>
                        <FormControl>
                            <Textarea placeholder="" rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Section>
    );
}
