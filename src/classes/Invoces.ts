import {Formatter} from '../interfaces/Formatter.js'

export class Invoice implements Formatter {

    private recipient: string;
    private details: string;
    public amount: number;

    constructor(b:string,c:string,d:number){
        this.recipient = b;
        this.details = c;
        this.amount = d;
    }

    format(){
      return `${this.recipient} owes ksh${this.amount} for ${this.details}`
    }
}
