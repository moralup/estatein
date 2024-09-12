import type { FC } from 'react';
import type { PersonI } from '../model/types';

import { Card } from 'shared/ui/card';
import { Button } from 'shared/ui/button';
import TwitterIcon from 'shared/assets/icons/twitter-icon.svg';
import TelegramIcon from 'shared/assets/icons/telegram-icon.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './person.module.scss';

interface PersonProps {
    className?: string;
    person: PersonI;
}

export const Person: FC<PersonProps> = ({ className, person }) => {
    const { name, photo, role } = person;

    return (
        <Card className={clsx(cls.card, className)}>
            <img src={photo} alt={name} className={cls.img} />
            <Button className={cls.btnTwitter} theme="background">
                <TwitterIcon />
            </Button>
            <h4 className={cls.title}>{name}</h4>
            <span className={cls.role}>{role}</span>
            <Button max theme="grayBackground" className={cls.btnTelegram}>
                <span>Say Hello👋</span>
                <TelegramIcon width="44" height="44" className={cls.telegramIcon} />
            </Button>
        </Card>
    );
};
