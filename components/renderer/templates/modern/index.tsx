import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';
import { PersonalDataSectionTemplate } from '../common/sections';
import { SidebarLI, SidebarTitle, Title } from './components';
import { SidebarRow } from './components/sidebar-row';
import { SkillsSectionTemplate } from '../common/sections/skills';
import { SummarySectionTemplate } from '../common/sections/summary';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    sidebar: {
        height: '100%',
        backgroundColor: '#000000',
        width: '200px',
        padding: '25px',
        display: 'flex',
        gap: '10px',
    },
    header: {
        marginTop: '40px',
        marginRight: '20px',
        backgroundColor: '#FBC17B',
        paddingHorizontal: '25px',
        paddingVertical: '20px',
        with: '100%',
        borderTopRightRadius: 9999,
        borderBottomRightRadius: 9999,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#000000',
        marginBottom: '10px',
        margin: 0,
    },
    page: {
        flex: 1,
    },
    content: {
        padding: 25,
    },
});

export function ModernTemplate({ data }: TemplateProps) {
    return (
        <View style={styles.root}>
            <View style={styles.sidebar}>
                <PersonalDataSectionTemplate
                    data={data}
                    titleSlot={SidebarTitle}
                    rowSlot={SidebarRow}
                />
                <SkillsSectionTemplate
                    data={data}
                    titleSlot={SidebarTitle}
                    liSlot={SidebarLI}
                    type="list"
                />
            </View>
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        {data.personalData.firstName} {data.personalData.lastName}
                    </Text>
                </View>
                <View style={styles.content}>
                    <SummarySectionTemplate data={data} titleSlot={Title} />
                </View>
            </View>
        </View>
    );
}
