import type { FC } from 'react';
import { Card } from 'shared/ui/containers';
import { clsx } from 'shared/lib/clsx';
import cls from './stepGuide.module.scss';

interface StepGuideProps {
    className?: string;
    step: number | string;
    title: string;
    description: string;
}

export const StepGuide: FC<StepGuideProps> = props => {
    const { className, description, step, title } = props;

    return (
        <div className={clsx(cls.card, className)}>
            <span className={cls.step}>{`Step ${step}`}</span>
            <Card
                align="left"
                className={cls.textContent}
                theme="angleGradient"
            >
                <h3 className={cls.title}>{title}</h3>
                <p>{description}</p>
            </Card>
        </div>
    );
};
