import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { SlotTemplateProps, TemplateProps } from '../..';
import { months } from '@lib/months';
import { renderDateRange } from '@lib/utils';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '8px',
    },
    title: {
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: 'medium',
    },
    subtitle: {
        fontSize: 10,
        fontFamily: 'Roboto',
        color: '#000000aa',
    },
    description: {
        fontSize: 12,
        fontFamily: 'Roboto',
        marginTop: 4,
    },
    items: {
        gap: '12px',
    },
});

export function ExperienceSectionTemplate({ data, titleSlot }: SlotTemplateProps) {
    return (
        <View style={styles.container}>
            {titleSlot({ title: 'Experience' })}
            <div style={styles.items}>
                {data.experience.map((e, i) => (
                    <div key={i}>
                        <Text style={styles.title}>
                            {[e.jobTitle, e.company].filter((x) => x).join(', ')}
                        </Text>
                        <Text style={styles.subtitle}>
                            {renderDateRange({
                                startDate: e.startDate,
                                endDate: e.endDate,
                                isPresent: e.isPresent,
                            })}
                        </Text>
                        <Text style={styles.description}>{e.description}</Text>
                    </div>
                ))}
            </div>
        </View>
    );
}
