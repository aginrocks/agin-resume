import { IconHorseToy, IconLanguage, IconPlus, IconShieldLock, IconTie } from '@tabler/icons-react';
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

export function LanguagesSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const languages = useFieldArray<z.infer<typeof resumeSchema>>({
        name: 'languages',
    });

    return (
        <Section
            title="Languages"
            description="Languages you speak and your proficiency"
            icon={IconLanguage}
        >
            <div className="flex flex-col gap-3">
                {languages.fields.map((l, index) => {
                    const language = form.watch(`languages.${index}.language`) || 'Language';

                    const isNative = form.watch(`languages.${index}.isNative`);

                    return (
                        <Section
                            title={language}
                            key={l.id}
                            canDelete
                            onDelete={() => languages.remove(index)}
                        >
                            <div className="flex gap-2">
                                <FormField
                                    control={form.control}
                                    name={`languages.${index}.language` as const}
                                    render={({ field }) => (
                                        <FormItem className="flex-1 w-full">
                                            <FormLabel>Language</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. English" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`languages.${index}.level` as const}
                                    render={({ field }) => (
                                        <FormItem className="flex-1 w-full">
                                            <FormLabel>Level</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    disabled={isNative}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Choose your proficiency level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {LANGUAGE_LEVELS.map((l, i) => (
                                                            <SelectItem value={l} key={l}>
                                                                {l}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`languages.${index}.isNative` as const}
                                    render={({ field }) => (
                                        <div className="flex flex-col gap-2">
                                            <FormLabel className="invisible">Native</FormLabel>
                                            <FormItem className="flex flex-1 items-center">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel>I am a native speaker</FormLabel>
                                            </FormItem>
                                        </div>
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
                        languages.append({
                            language: '',
                            level: 'A1',
                            isNative: false,
                        })
                    }
                >
                    <IconPlus />
                    Add a Language
                </Button>
            </div>
        </Section>
    );
}
