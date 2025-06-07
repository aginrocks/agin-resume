import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';
import {
    ExperienceSectionTemplate,
    GDPRSectionTemplate,
    PersonalDataSectionTemplate,
    Photo,
} from '../common/sections';
import { SidebarLI, SidebarTitle, Title } from './components';
import { SidebarRow } from './components/sidebar-row';
import { SkillsSectionTemplate } from '../common/sections/skills';
import { SummarySectionTemplate } from '../common/sections/summary';
import { HobbySectionTemplate } from '../common/sections/hobby';

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
        // paddingVertical: '20px',
        height: 72,
        display: 'flex',
        justifyContent: 'center',
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
    headerSubtitle: {
        fontSize: 12,
        fontFamily: 'Roboto',
        margin: 0,
        marginTop: 2,
    },
    photo: {
        alignItems: 'center',
        marginBottom: 8,
    },
    page: {
        flex: 1,
    },
    content: {
        padding: 25,
        gap: 6,
    },
});

export function ModernTemplate({ data }: TemplateProps) {
    return (
        <View style={styles.root}>
            <View style={styles.sidebar}>
                {data.personalData.photo && (
                    <View style={styles.photo}>
                        <Photo data={data} />
                    </View>
                )}
                <PersonalDataSectionTemplate
                    data={data}
                    titleSlot={SidebarTitle}
                    rowSlot={SidebarRow}
                />
                {data.skills.length !== 0 && (
                    <SkillsSectionTemplate
                        data={data}
                        titleSlot={SidebarTitle}
                        liSlot={SidebarLI}
                        type="list"
                    />
                )}
            </View>
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle} hyphenationCallback={(w) => [w]}>
                        {data.personalData.firstName} {data.personalData.lastName}
                    </Text>
                    <Text style={styles.headerSubtitle}>{data.personalData.jobTitle}</Text>
                </View>
                <View style={styles.content}>
                    {data.overview && <SummarySectionTemplate data={data} titleSlot={Title} />}
                    {data.experience.length !== 0 && (
                        <ExperienceSectionTemplate data={data} titleSlot={Title} />
                    )}
                    {data.hobby && <HobbySectionTemplate data={data} titleSlot={Title} />}
                    {data.gdpr && <GDPRSectionTemplate data={data} />}
                </View>
            </View>
        </View>
    );
}
