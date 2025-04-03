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
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null);
greet(undefined);
greet('Mosh');
greet('');

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