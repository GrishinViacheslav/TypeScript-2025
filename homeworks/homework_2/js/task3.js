"use strict";
// Задача 3. Вводиться номер місяця або назва місяця. Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо
// число, або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    function getSeason(season = 1) {
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        let result = 1;
        if (typeof season === 'number') {
            if (season < 1 || season > 12)
                throwError(`Incorrect month number: ${season}.`);
            switch (season) {
                case 1:
                case 2:
                case 12:
                    result = 1;
                    break;
                case 3:
                case 4:
                case 5:
                    result = 2;
                    break;
                case 6:
                case 7:
                case 8:
                    result = 3;
                    break;
                case 9:
                case 10:
                case 11:
                    result = 4;
                    break;
                default:
                    const _exCheck = season;
                    throwError(`Unexpected month number.`);
            }
        }
        else if (typeof season === 'string') {
            const seasonToLowerCase = season.toLowerCase();
            if (!months.includes(seasonToLowerCase))
                throwError(`Incorrect month title: ${season}`);
            switch (seasonToLowerCase) {
                case 'jan':
                case 'feb':
                case 'dec':
                    result = 'winter';
                    break;
                case 'mar':
                case 'apr':
                case 'may':
                    result = 'spring';
                    break;
                case 'jun':
                case 'jul':
                case 'aug':
                    result = 'summer';
                    break;
                case 'sep':
                case 'oct':
                case 'nov':
                    result = 'autumn';
                    break;
                default:
                    const _exCheck = season;
                    throwError(`Unexpected month title`);
            }
        }
        return result;
    }
}

