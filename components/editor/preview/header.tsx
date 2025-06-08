import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';
import { IconArrowLeft, IconDownload, IconPrinter } from '@tabler/icons-react';
import clsx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';
import { FullUiAtom, TabAtom } from '..';

export type PreviewHeaderProps = {
    downloadUrl?: string;
    canPreview?: boolean;
};

export function PreviewHeader({ downloadUrl, canPreview = true }: PreviewHeaderProps) {
    const fullUi = useAtomValue(FullUiAtom);
    const setTab = useSetAtom(TabAtom);

    return (
        <div
            className={cn(
                'flex p-4 pb-0 justify-between items-center',
                clsx({
                    'pl-5.5': fullUi,
                })
            )}
        >
            <div className="flex items-center gap-1">
                {!fullUi && (
                    <Button variant="ghost" size="xsIcon" onClick={() => setTab('core')}>
                        <IconArrowLeft />
                    </Button>
                )}
                <div className="font-semibold text-lg">Preview</div>
            </div>
            <div
                className={cn(
                    'flex gap-2.5',
                    clsx({
                        invisible: !canPreview,
                    })
                )}
            >
                <Button
                    variant="outline"
                    onClick={() => {
                        const iframe = document.createElement('iframe');
                        document.body.appendChild(iframe);

                        iframe.style.display = 'none';
                        iframe.src = downloadUrl || '';
                        iframe.onload = function () {
                            setTimeout(function () {
                                iframe.focus();
                                iframe.contentWindow?.print();
                            }, 1);
                        };
                    }}
                >
                    <IconPrinter />
                    Print
                </Button>
                <Button asChild>
                    <a href={downloadUrl} download="resume.pdf">
                        <IconDownload />
                        Download PDF
                    </a>
                </Button>
            </div>
        </div>
    );
}
