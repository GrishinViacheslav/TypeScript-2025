"use strict";
var _a;
// Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.
if (confirm("Почати тестування?")) {
    let days = ["1", "2", "3", "4", "5", "monday", "tuesday", "wednesday", "thursday", "friday"];
    function isWorkingDay(days, userAnswer = "1") {
        if (!days || !userAnswer) {
            return `No data`;
        }
        else {
            const userAnswerToLowerCase = userAnswer.toLowerCase();
            return days.indexOf(userAnswerToLowerCase) !== -1 ? `It's working day` : `Isn't working day`;
        }
    }
    const dayOfWeek = (_a = prompt(`Write day of the week number or title`, "1")) !== null && _a !== void 0 ? _a : "";
    document.write(isWorkingDay(days, dayOfWeek));
}