export enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
  TRANSFER = "transfer",
}

export default class Transaction {
  private _amount: number = 0;
  constructor(readonly id: string, amount: number, readonly date: Date, private type: TransactionType, readonly description: string) {
    this.Amount = amount;
  }
  get Amount() {
    return this._amount;
  }
  set Amount(value: number) {
    if (value <= 0) throw new Error(`Error! Sum must be bigger than 0`);
    this._amount = value;
  }
  [Symbol.toPrimitive](hint: string) {
    switch (hint) {
      case "string":
        return `Transaction #${this.id}: ${this.type.toUpperCase()} ${this.Amount} — ${this.description}`;
      case "number":
        return this.Amount;
      default: {
        return `Transaction #${this.id} [${this.type}] ${this.Amount}`;
      }
    }
  }
}
