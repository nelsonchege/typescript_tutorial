class Invoice {

      readonly finance_type: string;
      private name: string;
      private details: string;
      public amount: number;

      constructor(a:string,b:string,c:string,d:number){
          this.finance_type = a;
          this.name = b;
          this.details = c;
          this.amount = d;
      }

      format(){
        return `${this.name}  ${this.finance_type}  for  ${this.details} and ksh${this.amount}`
      }
}



const form = document.querySelector('.new-item-form') as HTMLFormElement;

const finance_type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const Details = document.querySelector('#details') as HTMLInputElement;
const Amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
      e.preventDefault();
      console.log(
        finance_type.value,
        toFrom.value,
        Details.value,
        Amount.valueAsNumber
      );

      const Invoice1 = new Invoice(finance_type.value,
        toFrom.value,
        Details.value,
        Amount.valueAsNumber)
      
      console.log(Invoice1.format());
      
})

