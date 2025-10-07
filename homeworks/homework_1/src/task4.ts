// Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.
if (confirm("Почати тестування?")) {
  type Days = Array<string>;
  let days: Days = ["1", "2", "3", "4", "5", "monday", "tuesday", "wednesday", "thursday", "friday"];
  
  function isWorkingDay(days: Days, userAnswer: string = "1"):string {
    if (!days || !userAnswer) {
      return `No data`;
    } else {
      const userAnswerToLowerCase = userAnswer.toLowerCase();
      return days.indexOf(userAnswerToLowerCase) !== -1 ? `It's working day` : `Isn't working day`;
    }
  }
  
  const dayOfWeek = prompt(`Write day of the week number or title`, "1") ?? "";
  document.write(isWorkingDay(days, dayOfWeek));
}
