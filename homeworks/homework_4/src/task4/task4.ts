// 4. Система управління сповіщеннями
// Клас: NotificationService
// Складний тип: Визначення типу NotificationPayload.
// EmailPayload = { recipient: string, subject: string }
// SMSPayload = { phone: string, text: string }
// Об'єднання та Перетин: NotificationPayload = ({ type: 'email' } & EmailPayload) | ({ type: 'sms' } & SMSPayload) (Дискримінаційне об'єднання для безпечної роботи з різними типами сповіщень)
// Метод: sendNotification(payload: NotificationPayload)
import NotificationService from "./NotificationService.js";
import errorFunc from "../errorFunc.js";
if (confirm("Почати тестування?")) {
  try {
    const notification = new NotificationService({
      type: "email",
      recipient: "John",
      subject: "About meeting",
    });
    console.log(notification.sendNotification());
  } catch (error) {
    console.log(error instanceof Error ? errorFunc(`Incorrect data!`) : "Unknown error");
  }
}
