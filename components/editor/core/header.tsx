import { Button } from '@components/ui/button';
import { IconBrandGithub, IconDownload, IconPrinter } from '@tabler/icons-react';

export function CoreHeader() {
    return (
        <div className="flex p-4 pb-0 justify-between items-center">
            <div>
                <div className="font-semibold text-lg">Agin Resume</div>
                <div className="text-muted-foreground text-xs">Build better resumes, faster.</div>
            </div>
            <div className="flex gap-2.5">
                <Button variant="outline" size="sm">
                    <IconBrandGithub />
                    Star on GitHub
                </Button>
            </div>
        </div>
    );
}
