import ITicket from "./ITicket.js";
import errorFunc from "../errorFunc.js";

export default class Ticket {
  private _ticket: ITicket;
  constructor(data: ITicket) {
    Ticket.assertsTicketChecker(data);
    this._ticket = data;
  }
  static typeGuardTicketChecker(val: unknown): val is ITicket {
    return !!val && typeof val === "object" && "destination" in val && typeof val.destination === "string" && "price" in val && typeof val.price === "number" && "fullName" in val && typeof val.fullName === "string" && "date" in val && val.date instanceof Date;
  }
  static assertsTicketChecker(val: unknown): asserts val is ITicket {
    if (!Ticket.typeGuardTicketChecker(val)) errorFunc(`Incorrect data object`);
  }
}
