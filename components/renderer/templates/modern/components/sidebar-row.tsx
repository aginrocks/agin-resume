import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { RowProps } from '../../common/sections';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
    label: {
        fontSize: 10,
        fontFamily: 'Roboto',
        color: '#ffffff',
    },
    iconContainer: {
        width: '16px',
        height: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        color: '#000000',
    },
});

export function SidebarRow({ icon, label }: RowProps) {
    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}></View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}
