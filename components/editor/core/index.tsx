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
import { PersonalDataSection } from './sections/personal-data';

export function Core() {
    return (
        <div className="flex-1 w-full bg-background rounded-2xl">
            <CoreHeader />
            <div className="flex flex-col p-4 gap-2.5">
                <PersonalDataSection />
                <Section
                    title="Summary"
                    description="A brief summary of your experience and skills"
                    icon={IconAlignLeft}
                ></Section>
                <Section
                    title="Education"
                    description="Your educational background"
                    icon={IconSchool}
                ></Section>
                <Section
                    title="Professional Experience"
                    description="Your work history and achievements"
                    icon={IconTie}
                ></Section>
                <Section
                    title="Skills"
                    description="Your skills and proficiencies"
                    icon={IconStars}
                ></Section>
                <Section
                    title="Languages"
                    description="Languages you speak and your proficiency"
                    icon={IconLanguage}
                ></Section>
                <Section
                    title="Links"
                    description="Your social media profiles, personal website etc."
                    icon={IconLink}
                ></Section>
                <Section
                    title="Hobby"
                    description="Your hobbies and interests"
                    icon={IconHorseToy}
                ></Section>
                <Section
                    title="GDPR Consent"
                    description="Your consent for data processing, which is required in the European Union"
                    icon={IconShieldLock}
                ></Section>
            </div>
        </div>
    );
}
