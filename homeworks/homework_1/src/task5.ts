// Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Підрахувати чого було більше чисел чи рядків і вивести останнє значення
if (confirm("Почати тестування?")) {
  const generateCount = 10;
let numberCount = 0;
let stringCount = 0;
let value: number | "ok" = 0;

for (let i = 0; i < generateCount; i++) {
  const randValue = 1 + Math.floor(Math.random() * 10)
  value = randValue > 5 ? randValue : "ok";

  if (typeof value === "number") {
    numberCount++;
  } else {
    stringCount++;
  }
}
document.write(`Кількість чисел: ${numberCount}. Кількість рядків: ${stringCount}. Останнє значення: ${value} `);
}
