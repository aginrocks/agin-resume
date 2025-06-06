import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';

const styles = StyleSheet.create({
    sidebar: {
        height: '100%',
        backgroundColor: '#000000',
        width: '200px',
    },
});

export function Sidebar({ data }: TemplateProps) {
    return <View style={styles.sidebar}></View>;
}
