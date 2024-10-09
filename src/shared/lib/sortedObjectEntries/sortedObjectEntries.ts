export const sortedObjectEntries = <T>(
    object: { [s: string]: T },
    sort: 'ascending' | 'descending' = 'descending',
) => {
    const objectEntries = Object.entries(object);

    switch (sort) {
    case 'descending':
        objectEntries.sort(([a], [b]) => Number(b) - Number(a));
        break;
    case 'ascending':
        objectEntries.sort(([a], [b]) => Number(a) - Number(b));
        break;
    }

    return objectEntries;
};
