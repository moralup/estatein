/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './propertyInquiryForm.module.scss';
import { Input, Checkbox, Select, Textarea } from 'shared/ui/form';
import EnvelopeIcon from 'shared/assets/icons/envelope-icon.svg';
import PhoneIcon from 'shared/assets/icons/phone-icon.svg';
import { Button } from 'shared/ui/button';

interface PropertyInquiryFormProps {
    className?: string;
}

export const agreement = (
    <span>
        I agree with <a href="/">Terms of Use </a>
        and <a href="/">Privacy Policy </a>
    </span>
);

export const PropertyInquiryForm: FC<PropertyInquiryFormProps> = ({
    className,
}) => {
    return (
        <div className={clsx(cls.form, className)}>
            <Input
                placeholder="Enter First Name"
                label="First Name"
            />
            <Input
                placeholder="Enter Last Name"
                label="Last Name"
            />
            <Input
                placeholder="Enter your Email"
                label="Email"
                type="email"
            />
            <Input
                placeholder="Enter Phone Number"
                label="Phone"
                type="tel"
            />
            <Select
                options={[{ label: '', value: '' }]}
                label="Preferred Location"
                value="Select Location"
            />
            <Select
                options={[{ label: '', value: '' }]}
                label="Property Type"
                value="Select Property Type"
            />
            <Select
                options={[{ label: '', value: '' }]}
                label="No. of Bathrooms"
                value="Select no. of Bedrooms"
            />
            <Select
                options={[{ label: '', value: '' }]}
                label="No. of Bedrooms"
                value="Select no. of Bedrooms"
            />
            <Select
                options={[{ label: '', value: '' }]}
                label="Budget"
                value="Select Budget"
                className={cls.fat}
            />
            <div className={cls.contacts}>
                <Input
                    placeholder="Enter Phone Number"
                    label="Preferred Contact Method"
                    Icon={PhoneIcon}
                    type="tel"
                />
                <Input
                    placeholder="Enter your Email"
                    type="email"
                    Icon={EnvelopeIcon}
                />
            </div>
            <Textarea
                className={cls.textarea}
                label="Message"
                placeholder="Enter your Message here.."
            />
            <div className={cls.footer}>
                <Checkbox label={agreement} />
                <Button
                    theme="background"
                    className={cls.btnSend}
                >
                    Send Your Message
                </Button>
            </div>
        </div>
    );
};
