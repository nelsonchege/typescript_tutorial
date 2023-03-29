export class Invoice {
    constructor(a, b, c, d) {
        this.finance_type = a;
        this.name = b;
        this.details = c;
        this.amount = d;
    }
    format() {
        return `${this.name}  ${this.finance_type}  for  ${this.details} and ksh${this.amount}`;
    }
}
