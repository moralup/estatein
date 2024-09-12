import { FC } from 'react';
import { Flex, FlexProps } from './flex';

export type HStackProps = TypedOmit<FlexProps, 'direction'>;

export const HStack: FC<HStackProps> = props => {
    return (
        <Flex direction="row" {...props} />
    );
};
