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

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        return `"Make: ${this.make}, Year: ${this.year}"`
    }
}

class Car extends Vehicle {
    private model: String;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `"Model: ${this.model}"`
    }
}










