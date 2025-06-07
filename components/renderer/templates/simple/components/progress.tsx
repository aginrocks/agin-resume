import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { ProgressProps } from '../../common/sections';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#121212',
    },
    level: {
        fontSize: 10,
        fontFamily: 'Montserrat',
        fontWeight: 'medium',
        color: '#121212',
        backgroundColor: '#00000015',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#00000030',
    },
});

export function Progress({ label, description, percentage }: ProgressProps) {
    return (
        <View style={styles.container}>
            <View style={styles.dot} />
            <View style={styles.top}>
                <Text style={styles.text}>{label}</Text>
                <Text style={styles.level}>{description}</Text>
            </View>
        </View>
    );
}
