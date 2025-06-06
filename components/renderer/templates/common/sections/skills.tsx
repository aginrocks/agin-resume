import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';
import { Mail } from '../icons';

export type LIProps = {
    label: string;
};

export type SkillsTemplateProps = SlotTemplateProps & {
    liSlot: ({ label }: LIProps) => React.ReactNode;
    type: 'list' | 'tags';
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
        gap: '8px',
    },
});

export function SkillsSectionTemplate({ data, titleSlot, liSlot }: SkillsTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Skills' })}
            <View style={styles.rows}>
                {data.skills?.map((s, i) => (
                    <View key={i}>{liSlot({ label: s })}</View>
                ))}
            </View>
        </View>
    );
}
