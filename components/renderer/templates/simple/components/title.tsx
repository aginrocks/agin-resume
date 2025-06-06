import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#121212',
    },
    line: {
        height: 2,
        backgroundColor: '#00000015',
        marginTop: '4px',
        marginBottom: '10px',
    },
});

export function Title({ title }: TitleProps) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
                <View style={styles.line} />
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    );
}
