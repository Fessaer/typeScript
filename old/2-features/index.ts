let a = [1, 2, 3].includes(1);


let period = 50;
const baseurl = 'http//example.com';

let firstName = 'Igor';
let account = {
    firstName,
    getName() {
        return this.firstName;
    }
};

let person = {...account};
let dates = [...[11, 12, 13]];


let {firstName: myName} = person;
let [firstDate] = dates;

function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof person): string {
    return `${start}${name}${end}`
}

console.log(userMessage`Good day, ${person} !!`)

/* */
for(const date of dates) {
    console.log(date);
}

let sum = (a: number, b: number) => a + b;


class Point {
    public x = 10;
    sum() {
        return this.x;
    }
}

/**  */
const user: any = {};
let x = user?.info?.baz();

/** */

let admin;
let p = admin ?? user;