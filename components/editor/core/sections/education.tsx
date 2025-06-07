import { IconPlus, IconSchool } from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { MonthYearSelector } from '@components/ui/month-year-selector';
import { Checkbox } from '@components/ui/checkbox';
import { renderDateRange } from '@lib/utils';

export function EducationSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const education = useFieldArray<z.infer<typeof resumeSchema>>({
        name: 'education',
    });

    return (
        <Section title="Education" description="Your educational background" icon={IconSchool}>
            <div className="flex flex-col gap-3">
                {education.fields.map((job, index) => {
                    const title = form.watch(`education.${index}.degree`) || 'Degree';
                    const company = form.watch(`education.${index}.institution`);

                    const startDate = form.watch(`education.${index}.startDate`);
                    const endDate = form.watch(`education.${index}.endDate`);

                    const isPresent = form.watch(`education.${index}.isPresent`);

                    return (
                        <Section
                            title={`${title}${company ? ` • ${company}` : ''}`}
                            description={renderDateRange({
                                startDate,
                                endDate,
                                isPresent,
                            })}
                            canDelete
                            onDelete={() => education.remove(index)}
                            key={job.id}
                        >
                            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                                <FormField
                                    control={form.control}
                                    name={`education.${index}.institution` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Institution</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g. Harvard University"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`education.${index}.degree` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Degree</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g. Bachelor of Science"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`education.${index}.grade` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Grade</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. A" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`education.${index}.isPresent` as const}
                                    render={({ field }) => (
                                        <div className="flex flex-col gap-2">
                                            <FormLabel className="invisible">Present</FormLabel>
                                            <FormItem className="flex flex-1 items-center">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel>I currently study here</FormLabel>
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <MonthYearSelector
                                    control={form.control}
                                    monthName={`education.${index}.startDate.month` as const}
                                    yearName={`education.${index}.startDate.year` as const}
                                    monthLabel="Start Month"
                                    yearLabel="Start Year"
                                />

                                <MonthYearSelector
                                    control={form.control}
                                    monthName={`education.${index}.endDate.month` as const}
                                    yearName={`education.${index}.endDate.year` as const}
                                    monthLabel="End Month"
                                    yearLabel="End Year"
                                    disabled={isPresent}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name={`education.${index}.description` as const}
                                render={({ field }) => (
                                    <FormItem className="mt-3">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="" rows={4} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </Section>
                    );
                })}
                <Button
                    size="sm"
                    variant="outline"
                    className="w-max"
                    onClick={() =>
                        education.append({
                            institution: '',
                            degree: '',
                            grade: '',
                            startDate: {
                                year: undefined,
                                month: undefined,
                            },
                            endDate: {
                                year: undefined,
                                month: undefined,
                            },
                            description: '',
                            isPresent: false,
                        })
                    }
                >
                    <IconPlus />
                    Add a Degree
                </Button>
            </div>
        </Section>
    );
}
