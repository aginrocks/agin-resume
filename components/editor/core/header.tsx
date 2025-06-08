import { Button } from '@components/ui/button';
import { resumeSchema, TEMPLATES } from '@lib/resume-schema';
import { IconBrandGithub, IconBrush, IconDownload, IconPrinter } from '@tabler/icons-react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { FullUiAtom, TabAtom } from '..';

export function CoreHeader() {
    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const firstName = form.watch('personalData.firstName');
    const lastName = form.watch('personalData.lastName');
    const email = form.watch('personalData.email');

    const canPreview = !!(firstName && lastName && email);

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
                    size={fullUi ? 'sm' : 'default'}
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
                    <div className="max-md:hidden">Change Template</div>
                </Button>
                <Button asChild variant="outline" size={fullUi ? 'sm' : 'default'}>
                    <a
                        href="https://github.com/aginrocks/agin-resume"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconBrandGithub />
                        <div className="max-md:hidden">Star on GitHub</div>
                    </a>
                </Button>
                {!fullUi && (
                    <Button
                        variant="default"
                        size={fullUi ? 'sm' : 'default'}
                        onClick={() => setTab('preview')}
                        disabled={!canPreview}
                    >
                        <IconDownload />
                        <div className="max-sm:hidden">Preview and Download</div>
                    </Button>
                )}
            </div>
        </div>
    );
}
