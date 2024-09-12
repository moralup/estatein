import { FC } from 'react';

import { routes } from '../model/const';

import { Card } from 'shared/ui/card';
import { Button } from 'shared/ui/button';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

import Logo from 'shared/assets/icons/logo.svg';
import Burger from 'shared/assets/icons/burger-icon.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    const getNavLinkCls = ({ isActive }: NavLinkRenderProps) => {
        if (isActive) {
            return `${cls.navLinkActive} ${cls.navLink}`;
        }
        return cls.navLink;
    };

    return (
        <Card
            direction="row"
            background="gray-10"
            border="bottom"
            justify="between"
            className={clsx(cls.header, className)}
        >
            <Logo className={cls.logo} />
            <div className={cls.links}>
                <nav className={cls.nav}>
                    {routes.map(({ label, path }) => (
                        <NavLink
                            to={path}
                            key={path}
                            className={getNavLinkCls}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
                <Button theme="darkGrayBackground">Contact Us</Button>
            </div>
            <Burger className={cls.burger} />
        </Card>
    );
};
