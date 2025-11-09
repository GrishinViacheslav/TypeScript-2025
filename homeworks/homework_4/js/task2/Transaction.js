export var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "deposit";
    TransactionType["WITHDRAWAL"] = "withdrawal";
    TransactionType["TRANSFER"] = "transfer";
})(TransactionType || (TransactionType = {}));
export default class Transaction {
    constructor(id, amount, date, type, description) {
        this.id = id;
        this.date = date;
        this.type = type;
        this.description = description;
        this._amount = 0;
        this.Amount = amount;
    }
    get Amount() {
        return this._amount;
    }
    set Amount(value) {
        if (value <= 0)
            throw new Error(`Error! Sum must be bigger than 0`);
        this._amount = value;
    }
    [Symbol.toPrimitive](hint) {
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
