export type EstateTagValue = 'Bedroom' | 'Bathroom' | 'Villa' | string;

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
    ambiance: string;
}
