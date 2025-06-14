import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps, TextProps } from '..';
import {
    ExperienceSectionTemplate,
    GDPRSectionTemplate,
    LanguagesSectionTemplate,
    PersonalDataSectionTemplate,
} from '../common/sections';
import { Link, Progress, SidebarLI, Title } from './components';
import { SidebarRow } from './components/sidebar-row';
import { SkillsSectionTemplate } from '../common/sections/skills';
import { SummarySectionTemplate } from '../common/sections/summary';
import { HobbySectionTemplate } from '../common/sections/hobby';
import { EducationSectionTemplate } from '../common/sections/education';
import { LinksSectionTemplate } from '../common/sections/links';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    header: {
        marginBottom: '12px',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
        color: '#6589BC',
        marginBottom: '10px',
        margin: 0,
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#121212',
        margin: 0,
        marginTop: 2,
        textAlign: 'center',
    },
    content: {
        padding: 30,
        gap: 6,
    },
});

const title: TextProps = {
    family: 'Montserrat',
};

const subtitle: TextProps = {
    family: 'Montserrat',
};

const description: TextProps = {
    family: 'Montserrat',
};

export function SimpleTemplate({ data }: TemplateProps) {
    return (
        <View style={styles.root}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle} hyphenationCallback={(w) => [w]}>
                        {data.personalData.firstName} {data.personalData.lastName}
                    </Text>
                    <Text style={styles.headerSubtitle}>{data.personalData.jobTitle}</Text>
                </View>
                <PersonalDataSectionTemplate data={data} titleSlot={Title} rowSlot={SidebarRow} />
                {data.overview && (
                    <SummarySectionTemplate
                        data={data}
                        titleSlot={Title}
                        descriptionOptions={description}
                    />
                )}
                {data.education.length !== 0 && (
                    <EducationSectionTemplate data={data} titleSlot={Title} />
                )}
                {data.experience.length !== 0 && (
                    <ExperienceSectionTemplate
                        data={data}
                        titleSlot={Title}
                        titleOptions={title}
                        subtitleOptions={subtitle}
                        descriptionOptions={description}
                    />
                )}
                {data.skills.length !== 0 && (
                    <SkillsSectionTemplate
                        data={data}
                        titleSlot={Title}
                        liSlot={SidebarLI}
                        type="tags"
                    />
                )}
                {data.languages.length !== 0 && (
                    <LanguagesSectionTemplate
                        data={data}
                        titleSlot={Title}
                        progressSlot={Progress}
                        rowsGap={8}
                    />
                )}
                {data.hobby && (
                    <HobbySectionTemplate
                        data={data}
                        titleSlot={Title}
                        descriptionOptions={description}
                    />
                )}
                {data.links.length !== 0 && (
                    <LinksSectionTemplate data={data} titleSlot={Title} linkSlot={Link} />
                )}
                {data.gdpr && <GDPRSectionTemplate data={data} descriptionOptions={description} />}
            </View>
        </View>
    );
}
