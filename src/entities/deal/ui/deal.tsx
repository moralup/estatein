import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './deal.module.scss';
// import { BestDealI } from 'widgets/valuedClients/model/types';
import { Card } from 'shared/ui/card';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import LightningIcon from 'shared/assets/icons/lightning-icon.svg';
import DomainIcon from 'shared/assets/icons/domain-icon.svg';

interface DealProps {
    className?: string;
    // deal: BestDealI;
    deal: any;
}

export const Deal: FC<DealProps> = ({ className, deal }) => {
    const { category, company, domain, feedback, since, website } = deal;

    return (
        <Card
            theme="outline"
            className={clsx(cls.card, className)}
            align="left"
        >
            <div className={cls.header}>
                <VStack className={cls.headerTextContent}>
                    <span className={cls.since}>{`Since ${since}`}</span>
                    <span className={cls.company}>{company}</span>
                </VStack>
                <Button
                    className={cls.websiteLink}
                    onClick={() => console.log(website)}
                >
                    Visit Website
                </Button>
            </div>
            <HStack justify="between">
                <VStack className={cls.infoContainer}>
                    <HStack>
                        <DomainIcon
                            className={cls.SvgIcon}
                            viewBox="0 0 24 24"
                        />
                        <span className={cls.infoLabel}>Domain</span>
                    </HStack>
                    <span className={cls.info}>{domain}</span>
                </VStack>
                <VStack className={cls.infoContainer}>
                    <HStack>
                        <LightningIcon
                            className={cls.SvgIcon}
                            viewBox="0 0 24 24"
                        />
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
    );
};

export class Statistics {
    /**
     * Returns the average of two numbers.
     *
     * @remarks
     * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
     *
     * @param x - The first input number
     * @param y - The second input number
     * @returns The arithmetic mean of `x` and `y`
     *
     * @beta
     */
    public static getAverage(x: number, y: number): number {
        return (x + y) / 2.0;
    }
}

// Statistics.getAverage()
