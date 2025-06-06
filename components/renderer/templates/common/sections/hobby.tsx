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

export function HobbySectionTemplate({ data, titleSlot }: SlotTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Hobby' })}
            <Text style={styles.summary}>{data.hobby}</Text>
        </View>
    );
}
