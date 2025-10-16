"use strict";
// Задача 2.  Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    function getLastSymbol(el) {
        if (typeof el === `number`)
            return Math.abs(el % 10);
        else if (typeof el === `string`)
            return el[length - 1];
        else {
            const _exCheck = el;
            throwError(`Inncorrect data type`);
        }
    }
    const num = 125;
    const str = '1753';
    console.log(getLastSymbol(num));
    console.log(getLastSymbol(str));
}