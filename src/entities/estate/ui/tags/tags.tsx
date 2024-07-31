import { FC } from 'react';
import type { EstateTagI } from '../../model/types/estate';
import { tagIconMap } from '../../model/consts/tags';
import { HStack } from 'shared/ui/stack';
import cls from './tags.module.scss';

interface TagsProps {
    className?: string;
    tags: EstateTagI[];
}

const renderTag = ({ value, quantity }: EstateTagI) => {
    const loyalValue = quantity ? `${quantity}-${value}` : value;
    const Icon = tagIconMap[value];

    return (
        <HStack
            key={value}
            gap={4}
            className={cls.tag}
        >
            {Icon && <Icon />}
            <span className={cls.loyalValue}>{loyalValue}</span>
        </HStack>
    );
};

export const Tags: FC<TagsProps> = ({ className, tags }) => {
    return (
        <HStack gap={10} className={className}>
            {tags.map(renderTag)}
        </HStack>
    );
};
