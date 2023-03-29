import { Invoice } from './classes/Invoces.js';
import { Payment } from './classes/Payment.js';
//creating an interface 
const form = document.querySelector('.new-item-form');
const finance_type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const Details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (finance_type.value === "invoice") {
        doc = new Invoice(toFrom.value, Details.value, Amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, Details.value, Amount.valueAsNumber);
    }
    console.log(doc);
});
