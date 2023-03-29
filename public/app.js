import { Invoice } from './classes/Invoces.js';
const form = document.querySelector('.new-item-form');
const finance_type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const Details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(finance_type.value, toFrom.value, Details.value, Amount.valueAsNumber);
    const Invoice1 = new Invoice(finance_type.value, toFrom.value, Details.value, Amount.valueAsNumber);
    console.log(Invoice1.format());
});
