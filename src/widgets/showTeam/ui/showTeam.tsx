import { FC } from 'react';
// import { clsx } from 'shared/lib/clsx';
// import cls from './showTeam.module.scss';
import { InfoBlock } from 'shared/ui/containerWithStars';
import { teamData } from '../model/const';
import { Person } from 'entities/person';
import { HStack } from 'shared/ui/stack';

export const ShowTeam: FC = () => {
    return (
        <InfoBlock
            title="Meet the Estatein Team"
            description={`At Estatein, our success is driven by the dedication
                and expertise of our team. Get to know the people behind our
                mission to make your real estate dreams a reality.`}
        >
            <HStack gap={28}>
                {teamData.map(person => (
                    <Person person={person} />
                ))}
            </HStack>
        </InfoBlock>
    );
};
