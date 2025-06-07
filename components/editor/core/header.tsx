import { Button } from '@components/ui/button';
import { resumeSchema, TEMPLATES } from '@lib/resume-schema';
import { IconBrandGithub, IconBrush, IconDownload, IconPrinter } from '@tabler/icons-react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { FullUiAtom, TabAtom } from '..';

export function CoreHeader() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const fullUi = useAtomValue(FullUiAtom);
    const setTab = useSetAtom(TabAtom);

    return (
        <div className="flex p-4 pb-0 justify-between items-center">
            <div>
                <div className="font-semibold text-lg">Agin Resume</div>
                <div className="text-muted-foreground text-xs">Build better resumes, faster.</div>
            </div>
            <div className="flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        // TODO: Implement actual template chooser (a modal with template previews)
                        const template = form.getValues('template');

                        const nextTemplate = !template
                            ? 0
                            : (TEMPLATES.indexOf(template) + 1) % TEMPLATES.length;
                        form.setValue('template', TEMPLATES[nextTemplate]);
                    }}
                >
                    <IconBrush />
                    Change Template
                </Button>
                <Button variant="outline" size="sm">
                    <IconBrandGithub />
                    Star on GitHub
                </Button>
                {!fullUi && (
                    <Button variant="default" size="sm" onClick={() => setTab('preview')}>
                        <IconDownload />
                        Preview and Download
                    </Button>
                )}
            </div>
        </div>
    );
}
