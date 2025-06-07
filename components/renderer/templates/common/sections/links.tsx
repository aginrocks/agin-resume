import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';
import { Mail } from '../icons';

export type LinkProps = {
    label: string;
};

export type SkillsTemplateProps = SlotTemplateProps & {
    linkSlot: ({ label }: LinkProps) => React.ReactNode;
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
        gap: 6,
    },
});

export function LinksSectionTemplate({ data, titleSlot, linkSlot }: SkillsTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Links' })}
            <View style={styles.rows}>
                {data.links?.map((l, i) => (
                    <Link href={l.url} key={i}>
                        <View>{linkSlot({ label: l.label })}</View>
                    </Link>
                ))}
            </View>
        </View>
    );
}
