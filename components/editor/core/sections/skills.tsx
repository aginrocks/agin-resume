import { IconPlus, IconStars, IconX } from '@tabler/icons-react';
import { Section } from '../section';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { resumeSchema } from '@lib/resume-schema';
import { Tag } from '@components/ui/tag';
import { Input } from '@components/ui/input';
import { useState } from 'react';
import { Button } from '@components/ui/button';

const skills = [
    'Creativity',
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Management',
    'Adaptability',
    'Leadership',
];

export function SkillsSection() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();
    const [customSkill, setCustomSkill] = useState('');

    const currentSkills = form.watch('skills') || [];

    const avaliableSkills = skills.filter((skill) => !currentSkills.includes(skill));

    const addSkill = (skill: string) => {
        if (!currentSkills.includes(skill)) {
            form.setValue('skills', [...currentSkills, skill], { shouldValidate: true });
        }
    };

    const removeSkill = (index: number) => {
        const newSkills = currentSkills.filter((_, i) => i !== index);
        form.setValue('skills', newSkills, { shouldValidate: true });
    };

    const handleCustomSkillSubmit = () => {
        const trimmedSkill = customSkill.trim();
        if (trimmedSkill && !currentSkills.includes(trimmedSkill)) {
            addSkill(trimmedSkill);
            setCustomSkill('');
        }
    };

    return (
        <Section title="Skills" description="Your skills and proficiencies" icon={IconStars}>
            <div className="space-y-2">
                {/* Predefined skills */}
                {avaliableSkills.length !== 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {avaliableSkills.map((skill) => (
                            <Tag key={skill} onClick={() => addSkill(skill)}>
                                <IconPlus />
                                {skill}
                            </Tag>
                        ))}
                    </div>
                )}

                {/* Selected skills */}
                {currentSkills.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm font-medium">Selected Skills</p>
                        <div className="space-y-2">
                            {currentSkills.map((skill, index) => (
                                <div key={`skill-${index}`} className="flex gap-2 items-center">
                                    <Input
                                        {...form.register(`skills.${index}` as const)}
                                        placeholder="Skill name..."
                                        className="flex-1"
                                    />
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => removeSkill(index)}
                                    >
                                        <IconX className="size-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Custom skill input */}
                <div className="flex gap-2">
                    <Input
                        placeholder="Add a custom skill..."
                        value={customSkill}
                        onChange={(e) => setCustomSkill(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleCustomSkillSubmit();
                            }
                        }}
                    />
                    <Button size="icon" variant="default" onClick={handleCustomSkillSubmit}>
                        <IconPlus className="size-4" />
                    </Button>
                </div>
            </div>
        </Section>
    );
}
