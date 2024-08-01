import { Decorator } from '@storybook/react/*';
import cls from './outlineDecorator.module.scss';

export const outlineDecorator = (
    width: number,
    padding: number = 20,
): Decorator => Store => (
    <div
        style={{ width, padding }}
        className={cls.outlineDecorator}
    >
        <span className={cls.label}>
            {`my width: ${width}px; padding: ${padding}px`}
        </span>
        <Store />
    </div>
);
