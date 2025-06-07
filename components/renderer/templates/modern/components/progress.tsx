import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { ProgressProps } from '../../common/sections';

const styles = StyleSheet.create({
    container: {
        gap: 4,
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: '#ffffff',
    },
    level: {
        fontSize: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#ffffff20',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ffffff',
    },
    progress: {
        width: '100%',
        height: 4,
        borderRadius: 2,
        backgroundColor: '#ffffff20',
        position: 'relative',
    },
    progressTrack: {
        height: 4,
        borderRadius: 2,
        backgroundColor: '#ffffffaa',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
    },
});

export function Progress({ label, description, percentage }: ProgressProps) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>{label}</Text>
                <Text style={styles.level}>{description}</Text>
            </View>
            <View style={styles.progress}>
                <View style={[styles.progressTrack, { width: `${percentage}%` }]} />
            </View>
        </View>
    );
}
