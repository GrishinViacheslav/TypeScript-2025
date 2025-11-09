// Задача 2.Обробка Фінансових Транзакцій 💳
// Клас: Transaction (Транзакція). Містить поля: id, amount, date, type, description. Містить метод для валідації суми.
// Enum: TransactionType (ТипТранзакції). Визначає напрямок або вид транзакції: DEPOSIT (Поповнення), WITHDRAWAL (Зняття), TRANSFER (Переказ).
import Transaction, { TransactionType } from "./Transaction.js";
if (confirm("Почати тестування?")) {
    try {
        const transaction1 = new Transaction(`124sasd`, 1200, new Date(), TransactionType.WITHDRAWAL, `Success`);
        console.log(transaction1);
    }
    catch (error) {
        console.log(`Error!`, error instanceof Error ? error.message : "Unknown error");
    }
}
