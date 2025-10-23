"use strict";
// Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). 
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт. 
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    const car = {
        model: 'subaru',
        owner: 'Mike',
    };
    const bus = {
        company: 'akkord',
        seatNumber: 55,
    };
    const plane = {
        speed: 1000,
        fuelType: 'kerosene',
    };
    function getTransportTypeInfo(transportType) {
        if ('model' in transportType) {
            document.write(`<h3>Car</h3> <div>model: ${transportType.model};</div><div>owner: ${transportType.owner}</div>`);
        }
        else if ('company' in transportType) {
            document.write(`<h3>Bus</h3> <div>company: ${transportType.company};</div><div>seat number: ${transportType.seatNumber}</div>`);
        }
        else if ('speed' in transportType) {
            document.write(`<h3>Plane</h3> <div>speed: ${transportType.speed};</div><div>fuel type: ${transportType.fuelType}</div>`);
        }
        else {
            throwError('Unknown transport type');
        }
    }
}

