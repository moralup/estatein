/* eslint-disable max-len */
import { FC } from 'react';
import { InfoBlock } from 'shared/ui/containerWithStars';
import { Card } from 'shared/ui/card';
import cls from './ourAchievements.module.scss';

interface OurAchievementsProps {
    className?: string;
}
// prettier-ignore
const arr: { title: string; description: string }[] = [
    {
        title: '3+ Years of Excellence',
        // description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
        description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience",
    },
    {
        title: 'Happy Clients',
        description: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
    },
    {
        title: 'Industry Recognition',
        description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
];

export const OurAchievements: FC<OurAchievementsProps> = () => {
    return (
        <InfoBlock
            description={`Our story is one of continuous growth and evolution.
            We started as a small team with big dreams, determined to create
            a real estate platform that transcended the ordinary.`}
            title="Our Achievements"
            textContainerClassName={cls.textContainer}
        >
            <div className={cls.cardList}>
                {arr.map(({ description, title }) => (
                    <Card
                        theme="outline"
                        className={cls.card}
                        align="left"
                    >
                        <h3 className={cls.title}>{title}</h3>
                        <p>{description}</p>
                    </Card>
                ))}
            </div>
        </InfoBlock>
    );
};
