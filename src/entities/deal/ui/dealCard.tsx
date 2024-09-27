import type { FC } from 'react';
import type { BestDealI } from '../model/types';
import { Card } from 'shared/ui/card';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import LightningIcon from 'shared/assets/icons/lightning-icon.svg';
import DomainIcon from 'shared/assets/icons/domain-icon.svg';
import { clsx } from 'shared/lib/clsx';
import cls from './dealCard.module.scss';

interface DealProps {
    className?: string;
    deal: BestDealI;
}

export const DealCard: FC<DealProps> = ({ className, deal }) => {
    const { category, company, domain, feedback, since, website } = deal;

    return (
        <div className={clsx(cls.cardWrapper, className)}>
            <Card
                className={clsx(cls.card)}
                // className={clsx(cls.card, className)}
                align="left"
            >
                <div className={cls.header}>
                    <VStack className={cls.companyWrapper}>
                        <span className={cls.since}>{`Since ${since}`}</span>
                        <span className={cls.company}>{company}</span>
                    </VStack>
                    <Button onClick={() => console.log(website)}>
                        Visit Website
                    </Button>
                </div>
                <HStack
                    justify="between"
                    align="left"
                >
                    <VStack className={cls.infoContainer}>
                        <HStack>
                            <DomainIcon />
                            <span className={cls.infoLabel}>Domain</span>
                        </HStack>
                        <span className={cls.info}>{domain}</span>
                    </VStack>
                    <VStack className={cls.infoContainer}>
                        <HStack>
                            <LightningIcon />
                            <span className={cls.infoLabel}>Category</span>
                        </HStack>
                        <span className={cls.info}>{category}</span>
                    </VStack>
                </HStack>
                <Card
                    align="left"
                    className={cls.feedbackContainer}
                >
                    <span className={cls.feedbackLabel}>What They Said🤗</span>
                    <p className={cls.feedback}>{feedback}</p>
                </Card>
            </Card>
        </div>
    );
};
