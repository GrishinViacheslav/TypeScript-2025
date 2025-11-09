import errorFunc from "../errorFunc.js";
export default class Ticket {
    constructor(data) {
        Ticket.assertsTicketChecker(data);
        this._ticket = data;
    }
    static typeGuardTicketChecker(val) {
        return !!val && typeof val === "object" && "destination" in val && typeof val.destination === "string" && "price" in val && typeof val.price === "number" && "fullName" in val && typeof val.fullName === "string" && "date" in val && val.date instanceof Date;
    }
    static assertsTicketChecker(val) {
        if (!Ticket.typeGuardTicketChecker(val))
            errorFunc(`Incorrect data object`);
    }
}
