export type EstateTagValue = 'Bedroom' | 'Bathroom' | 'Villa';

export interface EstateTagI {
    quantity?: number;
    value: EstateTagValue;
}

export interface EstateI {
    img: string;
    title: string;
    description: string;
    tags: EstateTagI[];
    price: number;
}
