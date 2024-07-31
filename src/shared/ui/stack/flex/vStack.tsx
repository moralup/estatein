import { FC } from 'react';
import { Flex, FlexProps } from './flex';

type VStackProps = TypedOmit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = props => {
    return (
        <Flex
            // eslint-disable-next-line react/destructuring-assignment
            align={props.align || 'left'}
            direction="column"
            {...props}
        />
    );
};
