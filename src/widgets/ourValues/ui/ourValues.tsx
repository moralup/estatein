import type { FC } from 'react';

import { InfoBlock } from 'shared/ui/containerWithStars';
import { TabTable } from './tabTable/tabTable';

export const OurValues: FC = () => (
    <InfoBlock
        direction="row"
        align="center"
        title="Our Values"
        description={`Our story is one of continuous growth and evolution.
                    We started as a small team with big dreams, determined to 
                    create a real estate platform that transcended the ordinary.`}
    >
        <TabTable />
    </InfoBlock>
);
