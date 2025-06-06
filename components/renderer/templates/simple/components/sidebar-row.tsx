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
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#121212',
    },
});

export function SidebarRow({ icon, label }: RowProps) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}
