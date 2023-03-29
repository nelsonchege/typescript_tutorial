export class Invoice {

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
