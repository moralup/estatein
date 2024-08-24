import { FC } from 'react';

import { Button } from 'shared/ui/button';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

import Logo from 'shared/assets/icons/logo.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './header.module.scss';
import { HStack } from 'shared/ui/stack';

interface HeaderProps {
    className?: string;
}

const routes = [
    {
        label: 'Home',
        link: '/home',
    },
    {
        label: 'About Us',
        link: '/about',
    },
    {
        label: 'Properties',
        link: '/properties',
    },
    {
        label: 'Services',
        link: '/services',
    },
];

export const Header: FC<HeaderProps> = ({ className }) => {
    const getNavLinkCls = ({ isActive }: NavLinkRenderProps) => {
        if (isActive) {
            return `${cls.navLinkActive} ${cls.navLink}`;
        }
        // Active
        return cls.navLink;
    };

    return (
        <HStack
            justify="between"
            className={clsx(cls.header, className)}
        >
            <Logo />
            <nav className={cls.nav}>
                {routes.map(({ label, link }) => (
                    <NavLink
                        to={link}
                        key={link}
                        className={getNavLinkCls}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
            <Button theme="darkGrayBackground">Contact Us</Button>
        </HStack>
    );
};
