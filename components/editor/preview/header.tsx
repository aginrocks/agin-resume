import { Button } from '@components/ui/button';
import { IconDownload, IconPrinter } from '@tabler/icons-react';

export function PreviewHeader() {
    return (
        <div className="flex p-4 pl-5.5 pb-0 justify-between items-center">
            <div className="font-semibold text-lg">Preview</div>
            <div className="flex gap-2.5">
                <Button variant="outline">
                    <IconPrinter />
                    Print
                </Button>
                <Button>
                    <IconDownload />
                    Download PDF
                </Button>
            </div>
        </div>
    );
}
