import { FC } from 'react';
import { HStack, VStack } from 'shared/ui/stack';
import cls from './user.module.scss';
import { UserI } from '../../model/types';

interface UserProps {
    className?: string;
    user: UserI
}

export const User: FC<UserProps> = ({ className, user }) => (
    <HStack gap={12} className={className}>
        <img src={user.image} alt="user" className={cls.photo} />
        <VStack gap={2}>
            <span className={cls.name}>{user.name}</span>
            <span>{user.address}</span>
        </VStack>
    </HStack>
);
