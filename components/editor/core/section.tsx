import { Button } from '@components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { cn } from '@lib/utils';
import {
    Icon,
    IconChevronDown,
    IconChevronUp,
    IconGripVertical,
    IconTrash,
} from '@tabler/icons-react';
import clsx from 'clsx';
import React, { useState } from 'react';

export type SectionProps = React.ComponentProps<'div'> & {
    title: string;
    description?: string;
    icon?: Icon;
    children?: React.ReactNode;
    canDrag?: boolean;
    canDelete?: boolean;
    onDelete?: () => void;
};

export function Section({
    title,
    description,
    icon: Icon,
    canDrag = false,
    children,
    canDelete = false,
    onDragLeaveCapture,
    onDelete,
    ...props
}: SectionProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border rounded-md overflow-hidden" {...props}>
            <div
                className={cn(
                    'cursor-pointer hover:bg-sidebar transition-colors',
                    clsx({
                        'border-b': expanded,
                    })
                )}
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex justify-between items-center p-2.5">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1.5">
                            <IconGripVertical
                                className={cn(
                                    'size-3.5',
                                    clsx({
                                        'text-muted-foreground/50': !canDrag,
                                        'text-muted-foreground cursor-grab': canDrag,
                                    })
                                )}
                            />
                            {Icon && <Icon className="size-5 text-muted-foreground" />}
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{title}</div>
                            <div className="text-muted-foreground text-xs">{description}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {canDelete && (
                            <Button size="xsIcon" variant="ghost" onClick={onDelete}>
                                <IconTrash className="size-4 text-muted-foreground" />
                            </Button>
                        )}
                        <Button size="xsIcon" variant="ghost">
                            {expanded ? (
                                <IconChevronUp className="size-4 text-muted-foreground" />
                            ) : (
                                <IconChevronDown className="size-4 text-muted-foreground" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            {expanded && <div className="p-4">{children}</div>}
        </div>
    );
}
