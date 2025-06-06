import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Control } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Input } from './input';
import { months } from '@lib/months';

export type MonthYearSelectorProps = {
    control: Control<any>;
    monthName: string;
    yearName: string;
    monthLabel?: string;
    yearLabel?: string;
    disabled?: boolean;
};

export function MonthYearSelector({
    control,
    monthName,
    yearName,
    monthLabel,
    yearLabel,
    disabled,
}: MonthYearSelectorProps) {
    return (
        <div className="grid grid-cols-2 gap-2 grow">
            <FormField
                control={control}
                name={monthName}
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>{monthLabel || 'Month'}</FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={disabled}
                        >
                            <FormControl>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-100">
                                {months.map((m, i) => (
                                    <SelectItem value={i.toString()} key={i}>
                                        {m}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={yearName}
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>{yearLabel || 'Year'}</FormLabel>
                        <FormControl>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={disabled}
                            >
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="max-h-100">
                                    {new Array(100)
                                        .fill(0)
                                        .map((x, i) => i + new Date().getFullYear() - 100)
                                        .reverse()
                                        .map((m, i) => (
                                            <SelectItem value={m.toString()} key={m}>
                                                {m}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}
