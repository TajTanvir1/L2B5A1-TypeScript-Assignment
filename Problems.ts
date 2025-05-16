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


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    } else {
        return value * 2;
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null
    if (products) {
        const heistPrice = Math.max(...products.map(product => product.price));

        const expensiveProduct = products.find(product => product.price === heistPrice)
        return expensiveProduct || null;
    }
    return null;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}





