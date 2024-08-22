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

export const Footer: FC<FooterProps> = ({ className }) => {
    const [input, setInput] = useState('');

    return (
        <footer className={clsx(cls.footer, className)}>
            <VStack gap={30}>
                <Logo />
                <SendEmail
                    onChange={setInput}
                    value={input}
                    onSubmit={v => console.log(v)}
                />
            </VStack>
            <HStack
                gap={100}
                align="left"
            >
                {navigationContent.map(block => (
                    <VStack gap={20}>
                        {block.map((link, i) => (
                            <span
                                className={clsx(i === 0 ? cls.linkPage : cls.linkPageSection)}
                            >
                                {link}
                            </span>
                        ))}
                    </VStack>
                ))}
            </HStack>
        </footer>
    );
};
