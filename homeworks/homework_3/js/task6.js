"use strict";
// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)
if (confirm("Почати тестування?")) {
    function isTicket(value) {
        return (!!value &&
            typeof value === 'object' &&
            ['destination', 'price', 'fullName', 'date'].every((key) => key in value));
    }
    function checkIsATicket(value) {
        if (!(!!value &&
            typeof value === 'object' &&
            ['destination', 'price', 'fullName', 'date'].every((key) => key in value)))
            throw new Error('Not a Ticket');
    }
}



