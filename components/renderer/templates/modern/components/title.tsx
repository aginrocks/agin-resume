import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#00000060',
        marginTop: '4px',
        marginBottom: '10px',
    },
});

export function Title({ title }: TitleProps) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line} />
        </View>
    );
}
