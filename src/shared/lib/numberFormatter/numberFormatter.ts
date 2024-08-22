const formatter = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
});

export const numberFormatter = (number: number) => {
    return formatter.format(number);
};
