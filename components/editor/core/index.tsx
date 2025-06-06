import { IconUser } from '@tabler/icons-react';
import { Section } from './section';

export function Core() {
    return (
        <div className="flex-1 w-full bg-background rounded-2xl p-4">
            <Section
                title="Personal Data"
                description="Your personal information"
                icon={IconUser}
            ></Section>
        </div>
    );
}
