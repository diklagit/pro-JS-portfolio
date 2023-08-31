//option 2 in type select input
export class Payment {
    recipient;
    details;
    amount;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} קיבל ₪${this.amount} עבור ${this.details}`;
    }
}
