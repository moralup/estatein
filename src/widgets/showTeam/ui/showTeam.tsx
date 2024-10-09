import type { FC } from 'react';
import { teamData } from '../model/const';
import { InfoBlock } from 'shared/ui/containers';
import { Person } from 'entities/person';
import cls from './showTeam.module.scss';

export const ShowTeam: FC = () => {
    return (
        <InfoBlock
            title="Meet the Estatein Team"
            description={`At Estatein, our success is driven by the dedication
                and expertise of our team. Get to know the people behind our
                mission to make your real estate dreams a reality.`}
        >
            <div className={cls.teamList}>
                {teamData.map(person => (
                    <Person person={person} />
                ))}
            </div>
        </InfoBlock>
    );
};
