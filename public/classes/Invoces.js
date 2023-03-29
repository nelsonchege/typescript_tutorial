export class Invoice {
    constructor(b, c, d) {
        this.recipient = b;
        this.details = c;
        this.amount = d;
    }
    format() {
        return `${this.recipient} owes ksh${this.amount} for ${this.details}`;
    }
}
