import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    summary: {
        fontSize: 12,
        fontFamily: 'Roboto',
    },
});

export function SummarySectionTemplate({ data, titleSlot }: SlotTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Summary' })}
            <Text style={styles.summary}>{data.overview}</Text>
        </View>
    );
}
