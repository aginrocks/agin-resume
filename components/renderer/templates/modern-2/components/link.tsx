import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TitleProps } from '../..';
import { LIProps } from '../../common/sections/skills';
import { LinkProps } from '../../common/sections/links';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#121212',
    },
});

export function Link({ label }: LinkProps) {
    return <Text style={styles.text}>{label}</Text>;
}
