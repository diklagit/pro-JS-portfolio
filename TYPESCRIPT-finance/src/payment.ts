import { HasFormatter } from './formatInterface.js';

//option 2 in type select input
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} קיבל ₪${this.amount} עבור ${this.details}`;
  }
}
