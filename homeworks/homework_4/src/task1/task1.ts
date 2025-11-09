// Задача 1. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)
import Ticket from "./Ticket.js";
import errorFunc from "../errorFunc.js";

if (confirm("Почати тестування?")) {
  try {
    const t = new Ticket({ destination: "Lviv", price: 1005, fullName: "Olga Von", date: new Date(2025, 10, 10) });
    console.log(t);
  } catch (error) {
    console.log(error instanceof Error ? errorFunc(`Incorrect data!`) : "Unknown error");
  }
}
