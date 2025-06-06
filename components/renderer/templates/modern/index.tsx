import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';
import { Sidebar } from './sidebar';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
});

export function ModernTemplate({ data }: TemplateProps) {
    return (
        <View style={styles.root}>
            <Sidebar data={data} />
        </View>
    );
}
