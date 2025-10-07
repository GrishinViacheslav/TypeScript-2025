"use strict"; 
// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2».
// Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
if (confirm("Почати тестування?")) {
    const user = {
        name: "John",
        age: 30,
        field2: "web",
    };
    localStorage.setItem("data", JSON.stringify(user));
    const localStorageDataObj = JSON.parse(localStorage.getItem("data"));
    if (localStorageDataObj) {
        for (let item in localStorageDataObj) {
            document.write(`<div>${item}: ${localStorageDataObj[item]}</div>`);
        }
    }
}