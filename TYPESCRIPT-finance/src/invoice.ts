import { HasFormatter } from './formatInterface.js';

//option 1 in type select input
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} שילם ₪${this.amount} עבור ${this.details}`;
  }
}
