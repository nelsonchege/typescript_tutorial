"use strict";
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const finance_type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const Details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(finance_type.value, toFrom.value, Details.value, Amount.valueAsNumber);
});
