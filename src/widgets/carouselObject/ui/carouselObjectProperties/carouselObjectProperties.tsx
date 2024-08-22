import { EstateCard } from 'entities/estate';
import { CarouselObjectTemplate } from '../template/carouselObjectTemplate';
import { FC } from 'react';

export const CarouselObjectProperties: FC<{ className?: string }> = ({ className }) => {
    return (
        <CarouselObjectTemplate
            className={className}
            type="Properties"
            title="Featured Properties"
            description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
            ComponentCard={EstateCard}
            arrProps={[
                {
                    estate: {
                        title: 'Seaside Serenity Villa',
                        description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful 
    suburban neighborhood... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/QXHmRFZbsa.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 4 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Metropolitan Haven',
                        description: `A chic and fully-furnished 2-bedroom apartment with panoramic
            city views... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/NtzrbcGopP.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 2 },
                            { value: 'Bathroom', quantity: 2 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Rustic Retreat Cottage',
                        description: `An elegant 3-bedroom, 2.5-bathroom townhouse in a gated 
            community... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/iWRKdBjEZe.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 3 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Seaside Serenity Villa',
                        description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful 
    suburban neighborhood... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/QXHmRFZbsa.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 4 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Metropolitan Haven',
                        description: `A chic and fully-furnished 2-bedroom apartment with panoramic
            city views... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/NtzrbcGopP.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 2 },
                            { value: 'Bathroom', quantity: 2 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Rustic Retreat Cottage',
                        description: `An elegant 3-bedroom, 2.5-bathroom townhouse in a gated 
            community... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/iWRKdBjEZe.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 3 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Seaside Serenity Villa',
                        description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful 
    suburban neighborhood... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/QXHmRFZbsa.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 4 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Metropolitan Haven',
                        description: `A chic and fully-furnished 2-bedroom apartment with panoramic
            city views... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/NtzrbcGopP.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 2 },
                            { value: 'Bathroom', quantity: 2 },
                            { value: 'Villa' },
                        ],
                    },
                },
                {
                    estate: {
                        title: 'Rustic Retreat Cottage',
                        description: `An elegant 3-bedroom, 2.5-bathroom townhouse in a gated 
            community... Read More`,
                        price: 550000,
                        img: 'https://estateindubai.com/uploads/iWRKdBjEZe.webp',
                        tags: [
                            { value: 'Bedroom', quantity: 3 },
                            { value: 'Bathroom', quantity: 3 },
                            { value: 'Villa' },
                        ],
                    },
                },
            ]}
        />
    );
};
