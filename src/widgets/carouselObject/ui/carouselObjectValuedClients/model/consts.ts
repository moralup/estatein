/* eslint-disable max-len */
import type { BestDealI } from 'entities/deal/model/types';

const bestDealsData: BestDealI[] = [
    {
        since: '2019',
        company: 'ABC Corporation',
        website: 'https://web.site',
        domain: 'Commercial Real Estate',
        category: 'Luxury Home Development',
        feedback:
            "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
        since: '2018',
        company: 'GreenTech Enterprises',
        website: 'https://web.site',
        domain: 'Commercial Real Estate',
        category: 'Retail Space',
        feedback:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
];

// prettier-ignore
export const valuedClients: BestDealI[] = [
    ...bestDealsData,
    ...bestDealsData,
    ...bestDealsData,
];
