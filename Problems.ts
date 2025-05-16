function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase();
    } else if (toUpper === false) {
        return input.toLowerCase();
    }

    return input.toUpperCase();
}