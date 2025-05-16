function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase();
    } else if (toUpper === false) {
        return input.toLowerCase();
    }

    return input.toUpperCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], [])
}












