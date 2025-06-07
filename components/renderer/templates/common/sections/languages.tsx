import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';
import { LANGUAGE_LEVELS } from '@lib/resume-schema';

export type ProgressProps = {
    label: string;
    percentage: number;
    description?: string;
};

export type LanguagesTemplateProps = SlotTemplateProps & {
    progressSlot: ({ label }: ProgressProps) => React.ReactNode;
    rowsGap?: number;
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    rows: {
        display: 'flex',
        flexDirection: 'column',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '4px',
    },
});

export function LanguagesSectionTemplate({
    data,
    titleSlot,
    progressSlot,
    rowsGap = 10,
}: LanguagesTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Languages' })}
            <View style={[styles.rows, { gap: rowsGap }]}>
                {data.languages?.map((l, i) => {
                    const percentage = l.level
                        ? l.isNative
                            ? 100
                            : (LANGUAGE_LEVELS.indexOf(l.level) + 1) *
                              (100 / LANGUAGE_LEVELS.length)
                        : 0;

                    return (
                        <View key={i}>
                            {progressSlot({ label: l.language, description: l.level, percentage })}
                        </View>
                    );
                })}
            </View>
        </View>
    );
}
