"use strict";
// Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів.
// Підрахувати чого було більше: святкових чи вихідних
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    function getRandomNum(minNum = 1, maxNum = 3) {
        if (isNaN(minNum) || isNaN(maxNum) || minNum < 0 || maxNum < minNum)
            throwError(`Inncorrect min or max number`);
        return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
    }
    function generateRandomDaysList(randomListLength = 15) {
        let result = [];
        for (let i = 0; i < randomListLength; i++) {
            const randomItemType = getRandomNum(1, 3);
            let randomIndex = 0;
            switch (randomItemType) {
                case 1:
                    const workingDaysList = [1, 2, 3, 4, 5];
                    randomIndex = getRandomNum(0, workingDaysList.length - 1);
                    result.push(workingDaysList[randomIndex]);
                    break;
                case 1:
                    const weekendDaysList = ['saturday', 'sunday'];
                    randomIndex = getRandomNum(0, weekendDaysList.length - 1);
                    result.push(weekendDaysList[randomIndex]);
                    break;
                case 1:
                    const holidaysList = ['christmas', 'easter', 'independence day', 'new year'];
                    randomIndex = getRandomNum(0, holidaysList.length - 1);
                    result.push(holidaysList[randomIndex]);
                    break;
            }
        }
        return result;
    }
    function getCompareHolidaysAndWeekendDaysCount(daysList) {
        if (!daysList.length)
            throwError(`The days list is empty`);
        let weekendsCount = 0;
        let holidaysCount = 0;
        let result = '';
        daysList.forEach(day => {
            if (typeof day !== 'number') {
                if (day === 'saturday' || day === 'sunday') {
                    weekendsCount++;
                }
                else {
                    holidaysCount++;
                }
            }
        });
        if (weekendsCount > holidaysCount) {
            result = `Weekend's day: ${weekendsCount}. Holidays: ${holidaysCount}. Weekend's days more than holidays in list: ${daysList}`;
        }
        else if (weekendsCount < holidaysCount) {
            result = `Weekend's day: ${weekendsCount}. Holidays: ${holidaysCount}. Weekend's days less than holidays in list: ${daysList}`;
        }
        else {
            result = `There are the same number weekends and holidays (${weekendsCount}) in list: ${daysList}`;
        }
        return result;
    }
    const randomDaysList = generateRandomDaysList();
    const compareDaysCount = getCompareHolidaysAndWeekendDaysCount(randomDaysList);
    document.write(compareDaysCount);
}

