import {Formatter} from '../interfaces/Formatter.js';

export class Payment implements Formatter {

    private recipient: string;
    private details: string;
    public amount: number;

    constructor(b:string,c:string,d:number){
        this.recipient = b;
        this.details = c;
        this.amount = d;
    }

    format(){
      return `${this.recipient} Owed ksh${this.amount} for ${this.details} `
    }
}