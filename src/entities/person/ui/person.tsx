import type { FC } from 'react';
import type { PersonI } from '../model/types';

import { Card } from 'shared/ui/containers';
import { AppImage } from 'shared/appImage';
import { Button } from 'shared/ui/button';
import TwitterIcon from 'shared/assets/icons/twitter-icon.svg';
import TelegramIcon from 'shared/assets/icons/telegram-icon.svg';

import cls from './person.module.scss';
import { clsx } from 'shared/lib/clsx';

interface PersonProps {
    className?: string;
    person: PersonI;
}

export const Person: FC<PersonProps> = ({ className, person }) => {
    const { name, photo, role } = person;

    return (
        <Card className={clsx(cls.person, className)}>
            <div className={cls.imgWrapper}>
                <AppImage
                    src={photo}
                    className={cls.img}
                    errorFallback={(
                        <div className={cls.img}>
                            <h3>{`no photo of ${name}`}</h3>
                        </div>
                    )}
                />
                <Button
                    className={cls.btnTwitter}
                    theme="background"
                >
                    <TwitterIcon />
                </Button>
            </div>
            <h3 className={cls.name}>{name}</h3>
            <span className={cls.role}>{role}</span>
            <Button
                max
                theme="grayBackground"
                className={cls.btnTelegram}
            >
                <span>Say Hello👋</span>
                <div className={cls.telegramIconWrapper}>
                    <TelegramIcon />
                </div>
            </Button>
        </Card>
    );
};
