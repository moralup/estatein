import { FC } from 'react';
import type { EstateTagI } from '../../model/types/estate';
import { tagIconMap } from '../../model/consts/tags';
import { HStack } from 'shared/ui/stack';
import cls from './tags.module.scss';
import { clsx } from 'shared/lib/clsx';

interface TagsProps {
    className?: string;
    tags: EstateTagI[];
}

export const Tag = ({ value, quantity }: EstateTagI) => {
    const loyalValue = quantity ? `${quantity}-${value}` : value;
    const Icon = tagIconMap[value];

    return (
        <HStack
            key={value}
            className={cls.tag}
        >
            {Icon && <Icon className={cls.icon} />}
            <span className={cls.loyalValue}>{loyalValue}</span>
        </HStack>
    );
};

export const TagList: FC<TagsProps> = ({ className, tags }) => {
    return (
        <HStack className={clsx(cls.tagList, className)}>
            {tags.map(Tag)}
        </HStack>
    );
};
