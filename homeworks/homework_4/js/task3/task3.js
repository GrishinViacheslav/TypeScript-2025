// Задача 3. Конфігуратор бази даних 🗃️
// Інтерфейс: IDatabaseConfig – визначає необхідні параметри підключення (host: string, port: number, username: string, password?: string).
// Клас: DBConnection – містить приватне поле config: IDatabaseConfig і метод connect(). Клас використовує конфігурацію, тип якої задано інтерфейсом.
import DBConnection from "./DBConnection.js";
if (confirm("Почати тестування?")) {
    try {
        const con = new DBConnection({
            host: "ukr.net",
            port: 3306,
            username: "John Smith",
            password: "tsCourse2025",
        });
        con.connect();
    }
    catch (error) {
        console.log(`Error!`, error instanceof Error ? error.message : "Unknown error");
    }
}
