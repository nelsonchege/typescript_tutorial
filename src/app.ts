import { Invoice } from './classes/Invoces.js';
import { Payment } from './classes/Payment.js';
import { Formatter } from './interfaces/Formatter.js';
import { ListTemplate } from './classes/ListTemplate.js'
//creating an interface 

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const finance_type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const Details = document.querySelector('#details') as HTMLInputElement;
const Amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event)=> {
      e.preventDefault();

      let doc:Formatter;
      let values : [string,string,number];
      values = [toFrom.value,Details.value,Amount.valueAsNumber];

      if(finance_type.value==="invoice"){
        doc = new Invoice(...values);
      }else{
        doc = new Payment(...values);
      }
    
      list.render(doc,finance_type.value,'end');
      form.reset();
      
})

