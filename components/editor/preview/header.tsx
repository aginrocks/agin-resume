import { Button } from '@components/ui/button';
import { cn } from '@lib/utils';
import { IconDownload, IconPrinter } from '@tabler/icons-react';
import clsx from 'clsx';

export type PreviewHeaderProps = {
    downloadUrl?: string;
    canPreview?: boolean;
};

export function PreviewHeader({ downloadUrl, canPreview = true }: PreviewHeaderProps) {
    return (
        <div className="flex p-4 pl-5.5 pb-0 justify-between items-center">
            <div className="font-semibold text-lg">Preview</div>
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
                        let iframe = document.createElement('iframe');
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
