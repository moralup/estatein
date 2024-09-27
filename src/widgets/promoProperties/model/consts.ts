const locations1 = [
    'Emaar Beachfront Dubai',
    'The Greens Dubai',
    'Dubai Production City',
    'Район Jumeirah Islands',
    'Dubai Hills Estate',
    'Business Bay',
    'Dubai Marina',
    'City Walk',
    'Dubai Creek Harbour',
    'Jumeirah Dubai',
    'MJL - Madinat Jumeirah Living',
    'Yas Island, Abu Dhabi',
    'Sobha Hartland',
    'Palm Jumeirah',
    'Al Safa Dubai (Safa Park)',
    'Jumeirah Village Triangle (JVT)',
    'Dubai Healthcare City (DHCC)',
    'Jumeirah Village Circle (JVC)',
    'Jumeirah Beach Residence',
    'Dubai Harbour',
    'Jumeirah Lake Towers',
    'Dubailand',
    'Emaar South',
    'Damac Hills 2',
    'Al Barsha Dubai',
    'Dubai South',
    'Al Furjan',
    'Al Habtoor City',
    'Meydan City',
    'Damac Hills Dubai',
    'MBR City Dubai - Meydan',
    'Damac Lagoons',
];

export const locations = locations1.map(name => ({
    label: name,
    value: name,
}));

const propertyTypes1 = ['Apartments', 'Villas', 'Penthouses', 'Townhouses'];

export const propertyTypes = propertyTypes1.map(name => ({
    label: name,
    value: name,
}));

const pricingRanges1 = [
    '250.000 - 400.000',
    '400.000 - 600.000',
    '600.000 - 850.000',
    'from 850.000',
];

export const pricingRanges = pricingRanges1.map(name => ({
    label: name,
    value: name,
}));

const propertySizes1 = [
    'from 500 Square Feet',
    'from 1.500 Square Feet',
    'from 3.000 Square Feet',
    'from 4.500 Square Feet',
    'from 7.000 Square Feet',
];

export const propertySizes = propertySizes1.map(name => ({
    label: name,
    value: name,
}));

const buildYears1 = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
];

export const buildYears = buildYears1.map(name => ({
    label: name,
    value: name,
}));
