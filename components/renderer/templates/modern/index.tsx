import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';
import { PersonalDataSectionTemplate } from '../common/sections';
import { SidebarLI, SidebarTitle } from './components';
import { SidebarRow } from './components/sidebar-row';
import { SkillsSectionTemplate } from '../common/sections/skills';

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
        </View>
    );
}
