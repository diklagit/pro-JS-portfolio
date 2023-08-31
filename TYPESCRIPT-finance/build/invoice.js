//option 1 in type select input
export class Invoice {
    client;
    details;
    amount;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} שילם ₪${this.amount} עבור ${this.details}`;
    }
}
