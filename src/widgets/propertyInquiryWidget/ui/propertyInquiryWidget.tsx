import type { FC } from 'react';
import { PropertyInquiryForm } from 'features/propertyInquiryForm';
import { InfoBlock } from 'shared/ui/containerWithStars';

interface Props {
    className?: string;
}

export const PropertyInquiryWidget: FC<Props> = ({ className }) => (
    <InfoBlock
        className={className}
        title="Let's Make it Happen"
        description={`Ready to take the first step toward your dream property?
            Fill out the form below, and our real estate wizards will work their
            magic to find your perfect match. Don't wait; let's embark on this
            exciting journey together.`}
    >
        <PropertyInquiryForm />
    </InfoBlock>
);
