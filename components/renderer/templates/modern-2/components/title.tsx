import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: '#121212',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#6589BC',
        marginTop: '6px',
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
