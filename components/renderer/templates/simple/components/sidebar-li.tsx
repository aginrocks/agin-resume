import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';
import { LIProps } from '../../common/sections/skills';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        paddingHorizontal: '8px',
        paddingVertical: '4px',
        borderRadius: 4,
        backgroundColor: '#00000015',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#121212',
    },
});

export function SidebarLI({ label }: LIProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
}
