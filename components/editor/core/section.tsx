import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Icon, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

export type SectionProps = {
    title: string;
    description?: string;
    icon?: Icon;
    children?: React.ReactNode;
};

export function Section({ title, description, icon: Icon, children }: SectionProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border rounded-md cursor-pointer hover:bg-sidebar transition-colors">
            <div className="flex justify-between items-center p-2.5 pl-3">
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="size-5 text-muted-foreground" />}
                    <div>
                        <div className="font-semibold text-sm">{title}</div>
                        <div className="text-muted-foreground text-xs">{description}</div>
                    </div>
                </div>
                <Button size="icon" variant="ghost" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <IconChevronUp className="size-4 text-muted-foreground" />
                    ) : (
                        <IconChevronDown className="size-4 text-muted-foreground" />
                    )}
                </Button>
            </div>
        </div>
    );
}
