import { FC } from 'react';
import { HStack, VStack } from 'shared/ui/stack';
import cls from './user.module.scss';
import { UserI } from '../../model/types';
import { clsx } from 'shared/lib/clsx';

interface UserProps {
    className?: string;
    user: UserI
}

export const User: FC<UserProps> = ({ className, user }) => (
    <HStack className={clsx(cls.user, className)}>
        <img src={user.image} alt="user" className={cls.photo} />
        <VStack className={cls.userInfo}>
            <span className={cls.name}>{user.name}</span>
            <span className={cls.address}>{user.address}</span>
        </VStack>
    </HStack>
);
