export class Payment {
    constructor(b, c, d) {
        this.recipient = b;
        this.details = c;
        this.amount = d;
    }
    format() {
        return `${this.recipient} Owed ksh${this.amount} for ${this.details} `;
    }
}
