import { FC } from 'react';
import { InfoBlock } from 'shared/ui/containerWithStars';
// import { bestDealsData } from '../model/consts';
// import { Deal } from 'entities/deal';
import { HStack } from 'shared/ui/stack';

export const ValuedClients: FC = () => {
    return (
        <InfoBlock
            description={`At Estatein, we have had the privilege of working
            with a diverse range of clients across various industries.
            Here are some of the clients we've had the pleasure of serving. 
            of serving of serving of serving of serving`}
            title="Our Valued Clients"
        >
            <HStack gap={50}>
                {/* {bestDealsData.map(deal => (
                    <Deal deal={deal} />
                ))} */}
                wfeewwef
            </HStack>
        </InfoBlock>
    );
};
