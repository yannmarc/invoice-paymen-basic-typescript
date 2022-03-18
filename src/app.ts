import { Invoice } from './classes/Invoice.js';
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';



// interface Person {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     greet(b: string): void;
// }

// let me: Person = {
//     name: 'Yann',
//     age: 34,
//     speak(word: string): void {
//         console.log("Hey I can speak my vanicular");
//     },
//     greet(politePhrase: string): void {
//         console.log("Hey I am polite men");
//     }

// }

// let someone: Person;

// someone = {
//     name: 'Marc',
//     age: 50,
//     speak(phrase: string): void {
//         console.log(phrase);
//     },
//     greet(politeWord: string): void {
//         console.log(politeWord);
//     }
// }

// const greetPerson = (person: Person) => {
//     person.greet('Hello, How are you');
// }

// greetPerson(someone)

// let invoiceOne = new Invoice(
//     'Yann',
//     'Bying a new macbook for my work',
//     4000
// );

// let invoiceTwo = new Invoice(
//     'Marc',
//     'Travelling project 2022',
//     3500000
// )

// let invoiceArray: Invoice[] = [];
// invoiceArray.push(invoiceOne);
// invoiceArray.push(invoiceTwo);

// invoiceArray.map((item) => {
//     console.log(item);
// })


// let anchorLink = document.querySelector('a')!;
// console.log(anchorLink.href);

let ul = document.querySelector('.item-list')! as HTMLUListElement;
let ulList = new ListTemplate(ul);

let form = document.querySelector('.new-item-form')! as HTMLFormElement;

let selectedElement = document.getElementById('type')! as HTMLSelectElement;
let toForm = document.getElementById('tofrom')! as HTMLInputElement;
let amount = document.getElementById('amount')! as HTMLInputElement;
let details = document.getElementById('details')! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {

    let doc: HasFormatter;

    if (selectedElement.value == 'invoice' )
    {
        doc = new Invoice(
            toForm.value,
            details.value,
            amount.valueAsNumber
        );
        
    } else {
        doc = new Payments(
            toForm.value,
            details.value,
            amount.valueAsNumber
        );
    }
    
    ulList.render(doc, selectedElement.value, 'end')

    e.preventDefault()
    toForm.value = ''
    details.value = ''
    amount.value = ''
})



