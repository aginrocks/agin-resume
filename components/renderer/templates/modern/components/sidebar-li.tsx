import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';
import { LIProps } from '../../common/sections/skills';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: '#ffffff',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#ffffff',
    },
});

export function SidebarLI({ label }: LIProps) {
    return (
        <View style={styles.container}>
            <View style={styles.dot} />
            <Text style={styles.text}>{label}</Text>
        </View>
    );
}
