import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './listWithDescription.module.scss';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';

interface ListWithDescriptionProps {
    className?: string;
}

export const ListWithDescription: FC<ListWithDescriptionProps> = ({
    className,
}) => {
    return (
        <div className={clsx(cls.list, className)}>
            <HStack>
                <VStack gap={14}>
                    <h2>Featured Properties</h2>
                    <p>
                        Explore our handpicked selection of featured properties.
                        Each listing offers a glimpse into exceptional homes and
                        investments available through Estatein. Click "View
                        Details" for more information.
                    </p>
                </VStack>
                <Button>View All Properties</Button>
            </HStack>
        </div>
    );
};
