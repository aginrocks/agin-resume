import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';
import { Mail } from '../icons';

export type RowProps = {
    icon: React.ReactNode;
    label: string;
};

export type PersonalDataTemplateProps = SlotTemplateProps & {
    rowSlot: ({ icon, label }: RowProps) => React.ReactNode;
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    rows: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
});

export function PersonalDataSectionTemplate({
    data,
    titleSlot,
    rowSlot,
}: PersonalDataTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Personal Data' })}
            <View style={styles.rows}>
                {data.personalData.email &&
                    rowSlot({
                        icon: <Mail />,
                        label: data.personalData.email,
                    })}
                {data.personalData.phone &&
                    rowSlot({
                        icon: <Mail />,
                        label: data.personalData.phone,
                    })}
            </View>
        </View>
    );
}
