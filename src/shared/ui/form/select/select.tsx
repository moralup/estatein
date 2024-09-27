/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import type { CSSProperties, FC, MouseEventHandler } from 'react';
import type { FormI } from '../types';
import { useCallback, useMemo, useState } from 'react';
import ArrowDownIcon from 'shared/assets/icons/arrow-down.svg';
import { clsx } from 'shared/lib/clsx';
import cls from './select.module.scss';
import mainCls from '../form.module.scss';

interface OptionI {
    label: string;
    value: string;
}

export interface SelectProps extends FormI {
    /** Array of options */
    readonly options: OptionI[];
    /** Event Handler called when an option is clicked */
    readonly onChangeSelect?: (value: string) => void;
    /** z-index if several Select arranged vertically  */
    readonly zIndex?: string | number;
    /** Background color  */
    readonly background?: 'gray08' | 'gray10';
}

export const Select: FC<SelectProps> = props => {
    const {
        className,
        Icon,
        label,
        onChangeSelect,
        options,
        zIndex,
        background = 'gray10',
        value,
    } = props;
    const [isActive, setIsActive] = useState(false);

    // prettier-ignore
    const onChangeSelectHandler: MouseEventHandler<HTMLUListElement> = useCallback(
        e => {
            e.stopPropagation();

            if (e.target instanceof HTMLElement) {
                const option = e.target.closest('div[data-id]');
                if (option instanceof HTMLElement) {
                    onChangeSelect?.(option.dataset.id!);
                }
            }
        },
        [onChangeSelect],
    );

    const style = useMemo<CSSProperties>(() => ({ zIndex }), [zIndex]);
    const selectClasses = clsx(
        cls.select,
        mainCls.container,
        cls[`background_${background}`],
        className,
    );

    return (
        <div
            style={style}
            className={selectClasses}
            onClick={() => setIsActive(prev => !prev)}
        >
            {label && <span className={clsx(mainCls.label)}>{label}</span>}
            <div className={clsx(cls.value, mainCls.form, isActive && cls.value_active)}>
                {Icon && (
                    <div className={cls.value__iconWrap}>
                        <Icon className={cls.value__icon} />
                    </div>
                )}
                <span className={cls.value__text}>{value}</span>
                <span className={cls.value__pseudoBtn}>
                    <ArrowDownIcon className={cls.arrowDownIcon} />
                </span>
            </div>
            {isActive && (
                <ul
                    onClick={onChangeSelectHandler}
                    className={cls.content}
                >
                    {options.map(option => (
                        <li
                            data-id={option.value}
                            className={clsx(cls.option)}
                        >
                            <span className={cls.option__text}>
                                {option.label}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
