import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { Icon } from '@tabler/icons-react';

export type SectionProps = {
    title: string;
    description?: string;
    icon?: Icon;
    children?: React.ReactNode;
};

export function Section({ title, description, icon: Icon, children }: SectionProps) {
    return (
        <div className="border rounded-md">
            <div className="flex items-center gap-1.5 py-2.5 px-3">
                {Icon && <Icon className="size-6 text-muted-foreground" />}
                <div>
                    <div className="font-semibold text-sm">{title}</div>
                    <div className="text-muted-foreground text-xs">{description}</div>
                </div>
            </div>
        </div>
    );
}
