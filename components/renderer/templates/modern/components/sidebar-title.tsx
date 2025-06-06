import { StyleSheet, Text } from '@react-pdf/renderer';
import { TitleProps } from '../..';

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#ffffff',
        marginBottom: '10px',
    },
});

export function SidebarTitle({ title }: TitleProps) {
    return <Text style={styles.title}>{title}</Text>;
}
