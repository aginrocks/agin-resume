import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { convertTextPropsToStyle, SlotTemplateProps, TemplateProps, TextProps } from '../..';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    summary: {
        fontSize: 12,
        fontFamily: 'Roboto',
    },
});

export type SummarySectionTemplateProps = SlotTemplateProps & {
    descriptionOptions?: TextProps;
};

export function SummarySectionTemplate({
    data,
    titleSlot,
    descriptionOptions,
}: SummarySectionTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Summary' })}
            <Text style={[styles.summary, convertTextPropsToStyle(descriptionOptions)]}>
                {data.overview}
            </Text>
        </View>
    );
}
