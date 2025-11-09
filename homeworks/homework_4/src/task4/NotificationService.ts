import { NotificationPayload } from "./NotificationPayload.js";
import errorFunc from "../errorFunc.js";

export default class NotificationService {
  constructor(private payload: NotificationPayload) {
    this.payload = payload;
  }
  sendNotification(): void {
    switch (this.payload.type) {
      case "email":
        console.log(`Email to recipient ${this.payload.recipient} with subject '${this.payload.subject}'`);
        break;
      case "sms":
        console.log(`Sms to phone ${this.payload.phone} with text '${this.payload.text}'`);
        break;
      default:
        errorFunc(`Incorrect data`);
    }
  }
}
