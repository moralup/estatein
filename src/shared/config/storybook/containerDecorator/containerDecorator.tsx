import { Decorator } from '@storybook/react/*';
import cls from './containerDecorator.module.scss';
import { clsx } from 'shared/lib/clsx';

type T = (width: number, padding?: number, isHelp?: boolean) => Decorator;
export const containerDecorator: T = (width, padding = 20, isHelp = true) => Store => {
    const LINE_LENGTH = 100;

    const numberOfFullLines = Math.floor(width / LINE_LENGTH);
    const lastLineWidth = width - LINE_LENGTH * numberOfFullLines;
    const fullLinesArray = Array(numberOfFullLines).fill(1);

    const getMeterElement = (index: number, width: number) => (
        <div
            className={cls.line}
            style={{ left: index * LINE_LENGTH, width }}
        >
            {`${width}px`}
        </div>
    );

    return (
        <div
            style={{ width, padding }}
            className={clsx(cls.containerDecorator, isHelp && cls.containerDecorator_outline)}
        >
            {isHelp && (
                <span className={cls.label}>
                    {`wrapper width: ${width}px; padding: ${padding}px`}
                </span>
            )}
            <Store />
            {isHelp && fullLinesArray.map((_, i) => getMeterElement(i, LINE_LENGTH))}
            {isHelp && Boolean(lastLineWidth) && getMeterElement(numberOfFullLines, lastLineWidth)}
        </div>
    );
};
