export const textFormatter = (text: string, numberOfWords: number) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            ++count;
        }

        if (count === numberOfWords) {
            return text.slice(0, i);
        }
    }

    return text;
};
