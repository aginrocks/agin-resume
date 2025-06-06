import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    gdpr: {
        fontSize: 8,
        fontFamily: 'Roboto',
        color: '#000000aa',
    },
});

export function GDPRSectionTemplate({ data }: TemplateProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.gdpr}>{data.gdpr}</Text>
        </View>
    );
}
