type EmailPayload = { recipient: string; subject: string };
type SMSPayload = { phone: string; text: string };
export type NotificationPayload = ({ type: "email" } & EmailPayload) | ({ type: "sms" } & SMSPayload);
