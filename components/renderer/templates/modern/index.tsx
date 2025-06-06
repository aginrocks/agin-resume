import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { TemplateProps } from '..';
import { PersonalDataSectionTemplate } from '../common/sections';
import { SidebarTitle } from './components';
import { SidebarRow } from './components/sidebar-row';

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
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
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
            </View>
        </View>
    );
}
