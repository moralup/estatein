import { FC, useState } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './footer.module.scss';
import { HStack, VStack } from 'shared/ui/stack';
import { SendEmail } from 'features/sendEmail/sendEmail';
import Logo from 'shared/assets/icons/logo.svg';

interface FooterProps {
    className?: string;
}
// prettier-ignore
const navigationContent = [
    [
        'Home',
        'Hero Section',
        'Features',
        'Properties',
        'Testimonials',
        "FAQ's",
    ],
    [
        'About Us',
        'Our Story',
        'Our Works',
        'How It Works',
        'Our Team',
        'Our Clients',
    ],
    [
        'Properties',
        'Protfolio',
        'Categories',
    ],
    [
        'Services',
        'Valuation Mastery',
        'Strategic Marketing',
        'Negotiation Wizardry',
        'Closing Success',
        'Property Management',
    ],
    [
        'Contact Us',
        'Contact Form',
        'Our Offices',
    ],
];
// prettier-ignore
export const Footer: FC<FooterProps> = ({ className }) => {
    const [input, setInput] = useState('');

    return (
        <footer className={clsx(cls.footer, className)}>
            <VStack className={cls.logoAndInputContainer}>
                <Logo className={cls.logo} />
                <SendEmail
                    onChange={setInput}
                    value={input}
                    onSubmit={v => console.log(v)}
                />
            </VStack>
            <nav className={cls.navigation}>
                {navigationContent.map((block, i) => (
                    <ul
                        key={`column_${i}`}
                        className={cls.navigationColumn}
                    >
                        {block.map((link, i) => (
                            <li
                                key={`link_${i}`}
                                className={clsx(i === 0 ? cls.linkPage : cls.linkSubpage)}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                ))}
            </nav>
        </footer>
    );
};
