import { IconHorseToy, IconPlus, IconShieldLock, IconTie } from '@tabler/icons-react';
import { Section } from '../section';
import { Textarea } from '@components/ui/textarea';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { experienceSchema, resumeSchema } from '@lib/resume-schema';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { months } from '@lib/months';
import { MonthYearSelector } from '@components/ui/month-year-selector';
import { Checkbox } from '@components/ui/checkbox';
import { renderDateRange } from '@lib/utils';

export function ExperienceSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const jobs = useFieldArray<z.infer<typeof resumeSchema>>({
        name: 'experience',
    });

    return (
        <Section
            title="Professional Experience"
            description="Your work history and achievements"
            icon={IconTie}
        >
            <div className="flex flex-col gap-3">
                {jobs.fields.map((job, index) => {
                    const title = form.watch(`experience.${index}.jobTitle`) || 'Job';
                    const company = form.watch(`experience.${index}.company`);

                    const startDate = form.watch(`experience.${index}.startDate`);
                    const endDate = form.watch(`experience.${index}.endDate`);

                    const isPresent = form.watch(`experience.${index}.isPresent`);

                    return (
                        <Section
                            title={`${title}${company ? ` at ${company}` : ''}`}
                            description={renderDateRange({
                                startDate,
                                endDate,
                                isPresent,
                            })}
                            key={job.id}
                        >
                            <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                                <FormField
                                    control={form.control}
                                    name={`experience.${index}.jobTitle` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Job Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Software Engineer" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`experience.${index}.company` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Acme Corp" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`experience.${index}.location` as const}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Input placeholder="New York, NY" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`experience.${index}.isPresent` as const}
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
                                                <FormLabel>I currently work here</FormLabel>
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <MonthYearSelector
                                    control={form.control}
                                    monthName={`experience.${index}.startDate.month` as const}
                                    yearName={`experience.${index}.startDate.year` as const}
                                    monthLabel="Start Month"
                                    yearLabel="Start Year"
                                />

                                <MonthYearSelector
                                    control={form.control}
                                    monthName={`experience.${index}.endDate.month` as const}
                                    yearName={`experience.${index}.endDate.year` as const}
                                    monthLabel="End Month"
                                    yearLabel="End Year"
                                    disabled={isPresent}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name={`experience.${index}.description` as const}
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
                        jobs.append({
                            company: '',
                            startDate: {
                                year: undefined,
                                month: undefined,
                            },
                            endDate: {
                                year: undefined,
                                month: undefined,
                            },
                            description: '',
                            jobTitle: '',
                            isPresent: false,
                            location: '',
                        })
                    }
                >
                    <IconPlus />
                    Add a Job
                </Button>
            </div>
        </Section>
    );
}
