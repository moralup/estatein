import { FC } from 'react';
import { VStack } from 'shared/ui/stack';
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
        <div className={className}>
            <span className={cls.step}>{`Step ${step}`}</span>
            <VStack className={cls.textContent}>
                <h3 className={cls.title}>{title}</h3>
                <p>{description}</p>
            </VStack>
        </div>
    );
};
