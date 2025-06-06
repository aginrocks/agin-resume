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

export function Core() {
    return (
        <ScrollArea className="flex-1 w-full bg-background rounded-2xl">
            <CoreHeader />
            <div className="flex flex-col p-4 gap-2.5">
                <PersonalDataSection />
                <SummarySection />
                <Section
                    title="Education"
                    description="Your educational background"
                    icon={IconSchool}
                ></Section>
                <ExperienceSection />
                <SkillsSection />
                <LanguagesSection />
                <Section
                    title="Links"
                    description="Your social media profiles, personal website etc."
                    icon={IconLink}
                ></Section>
                <HobbySection />
                <GDPRSection />
            </div>
        </ScrollArea>
    );
}
