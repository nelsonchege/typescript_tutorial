import { Invoice } from './classes/Invoces.js';
import { Payment } from './classes/Payment.js';
import { Formatter } from './interfaces/Formatter.js';
//creating an interface 

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const finance_type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const Details = document.querySelector('#details') as HTMLInputElement;
const Amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=> {
      e.preventDefault();

      let doc:Formatter;

      if(finance_type.value==="invoice"){
        doc = new Invoice( toFrom.value,Details.value,Amount.valueAsNumber);
      }else{
        doc = new Payment( toFrom.value,Details.value,Amount.valueAsNumber);
      }
      
      console.log(doc)

      
})

