type TagProps = React.ComponentProps<'div'> & {
    children?: React.ReactNode;
};

export function Tag({ children, ...props }: TagProps) {
    return (
        <div
            className="border flex cursor-pointer font-medium gap-1 hover:bg-secondary transition-colors w-max rounded-md px-2.5 py-1.5 text-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:text-muted-foreground"
            {...props}
        >
            {children}
        </div>
    );
}
