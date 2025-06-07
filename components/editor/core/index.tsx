import {
    IconAlignLeft,
    IconHorseToy,
    IconLanguage,
    IconLink,
    IconSchool,
    IconShieldLock,
    IconStars,
    IconTie,
    IconUser,
} from '@tabler/icons-react';
import { Section } from './section';
import { CoreHeader } from './header';
import {
    ExperienceSection,
    GDPRSection,
    HobbySection,
    LanguagesSection,
    PersonalDataSection,
    SummarySection,
} from './sections';
import { SkillsSection } from './sections/skills';
import { ScrollArea } from '@components/ui/scroll-area';
import { LinksSection } from './sections/links';
import { EducationSection } from './sections/education';

export function Core() {
    return (
        <ScrollArea className="flex-1 w-full bg-background rounded-2xl">
            <CoreHeader />
            <div className="flex flex-col p-4 gap-2.5">
                <PersonalDataSection />
                <SummarySection />
                <EducationSection />
                <ExperienceSection />
                <SkillsSection />
                <LanguagesSection />
                <LinksSection />
                <HobbySection />
                <GDPRSection />
            </div>
        </ScrollArea>
    );
}
