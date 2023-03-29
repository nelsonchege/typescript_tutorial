import { Invoice } from './classes/Invoces.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
//creating an interface 
const form = document.querySelector('.new-item-form');
const finance_type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const Details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, Details.value, Amount.valueAsNumber];
    if (finance_type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, finance_type.value, 'end');
    form.reset();
});
