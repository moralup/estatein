import { useState } from 'react';
import type {
    FC,
    FormEventHandler,
    ChangeEventHandler,
} from 'react';

import { HStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';

import PaperAirplaneIcon from 'shared/assets/icons/paper-airplane-icon.svg';
import MessageIcon from 'shared/assets/icons/message-icon.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './sendEmail.module.scss';

interface SendEmailProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
}

export const SendEmail: FC<SendEmailProps> = props => {
    const { onChange, onSubmit, value } = props;
    const [isFocus, setIsFocus] = useState(false);
    const isActive = isFocus || Boolean(value);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
        onChange(e.target.value);
    };

    const onSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        value && onSubmit(value);
    };

    return (
        <form
            className={cls.form}
            onSubmit={onSubmitHandler}
        >
            <input
                className={cls.input}
                type="email"
                value={value}
                onChange={onChangeHandler}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
            <HStack
                gap={10}
                className={clsx(
                    cls.placeholder,
                    isActive && cls.placeholder__active,
                )}
            >
                <MessageIcon />
                <span>Enter Your Email</span>
            </HStack>
            <Button
                type="submit"
                theme="clear"
                className={cls.btnSend}
            >
                <PaperAirplaneIcon />
            </Button>
        </form>
    );
};
