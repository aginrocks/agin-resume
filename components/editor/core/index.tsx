import { IconAlignLeft, IconUser } from '@tabler/icons-react';
import { Section } from './section';

export function Core() {
    return (
        <div className="flex-1 w-full bg-background rounded-2xl">
            <div className="flex flex-col p-4 gap-2.5">
                <Section
                    title="Personal Data"
                    description="Your personal information"
                    icon={IconUser}
                ></Section>
                <Section
                    title="Summary"
                    description="A brief summary of your experience and skills"
                    icon={IconAlignLeft}
                ></Section>
            </div>
        </div>
    );
}
