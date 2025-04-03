/* -- Topics Covered -- */

// 1.Tuples
let user: [number, string] = [1, 'Mosh']

// 2.Enums
const enum Size { Small = 0, Medium, Large }
let mySize: Size = Size.Large
console.log(mySize)

// 3.Functions
function calculateTax(income: number, taxYear = 2023): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

// 4.Objects
let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => console.log(date)
};

// 5.Type Aliases
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

// 6.Union Types
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseFloat(weight) * 2.2;
}

// 7.Intersection Types
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
};

// 8.Literal Types
type Quantity = 50 | 100 | 150;
let quantity: Quantity = 100;
type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// 9.Nullable Types
function greeting(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greeting(null);
greeting(undefined);
greeting('Mosh');
greeting('');

// 10.Optional Chaining
type Customer = {
    birthday: Date
    getCard: () => Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date(), getCard: () => new Date() }
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
console.log(customer?.getCard?.());
console.log(customer?.getCard?.()?.getFullYear());

let log: any = null;
log?.('a', 'b', 'c');

// 11.Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (c)
        return a + b + c;
    return a + b;
}
console.log(addAll(1, 2));
console.log(addAll(1, 2, 3));

// 12.Default Parameters
const sumAll = (a: number, b: number, c: number = 0): number => {
    return a + b + c;
}
console.log(sumAll(1, 2));

// 13.Rest Parameters
const total = (discount: number, ...prices: number[]): number => {
    return prices.reduce((a, b) => a + b) * (1 - discount);
}
console.log(total(0.1, 20, 30, 40));
console.log(total(0.1, 20, 30, 40, 50));

// 14.Never Type
function processEvents(): never {
    while (true) {
        console.log('Processing...');
        }
}