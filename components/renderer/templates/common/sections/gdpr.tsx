import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { convertTextPropsToStyle, SlotTemplateProps, TemplateProps, TextProps } from '../..';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    gdpr: {
        fontSize: 8,
        fontFamily: 'Roboto',
        color: '#000000aa',
    },
});

export type GDPRSectionTemplateProps = TemplateProps & {
    descriptionOptions?: TextProps;
};

export function GDPRSectionTemplate({ data, descriptionOptions }: GDPRSectionTemplateProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.gdpr, convertTextPropsToStyle(descriptionOptions)]}>
                {data.gdpr}
            </Text>
        </View>
    );
}
