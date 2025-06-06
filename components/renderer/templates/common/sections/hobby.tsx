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

export type HobbySectionTemplateProps = SlotTemplateProps & {
    descriptionOptions?: TextProps;
};

export function HobbySectionTemplate({
    data,
    titleSlot,
    descriptionOptions,
}: HobbySectionTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Hobby' })}
            <Text style={[styles.summary, convertTextPropsToStyle(descriptionOptions)]}>
                {data.hobby}
            </Text>
        </View>
    );
}
