import {
    IconHorseToy,
    IconLanguage,
    IconLink,
    IconPlus,
    IconShieldLock,
    IconTie,
} from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import {
    experienceSchema,
    LANGUAGE_LEVELS,
    languageSchema,
    resumeSchema,
} from '@lib/resume-schema';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { months } from '@lib/months';
import { MonthYearSelector } from '@components/ui/month-year-selector';
import { Checkbox } from '@components/ui/checkbox';
import { renderDateRange } from '@lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@components/ui/select';

export function LinksSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const links = useFieldArray<z.infer<typeof resumeSchema>>({
        name: 'links',
    });

    return (
        <Section
            title="Links"
            description="Your social media profiles, personal website etc."
            icon={IconLink}
        >
            <div className="flex flex-col gap-3">
                {links.fields.map((l, index) => {
                    const language = form.watch(`links.${index}.label`) || 'Link';

                    return (
                        <Section
                            title={language}
                            key={l.id}
                            canDelete
                            onDelete={() => links.remove(index)}
                        >
                            <div className="flex gap-2">
                                <FormField
                                    control={form.control}
                                    name={`links.${index}.label` as const}
                                    render={({ field }) => (
                                        <FormItem className="flex-1 w-full">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Linkedin" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`links.${index}.url` as const}
                                    render={({ field }) => (
                                        <FormItem className="flex-1 w-full">
                                            <FormLabel>Link</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="https://linkedin.com/your_username"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </Section>
                    );
                })}
                <Button
                    size="sm"
                    variant="outline"
                    className="w-max"
                    onClick={() =>
                        links.append({
                            label: '',
                            url: '',
                        })
                    }
                >
                    <IconPlus />
                    Add a Link
                </Button>
            </div>
        </Section>
    );
}
