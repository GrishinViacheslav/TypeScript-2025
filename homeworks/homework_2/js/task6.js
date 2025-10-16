"use strict";
// Задача 6. Дано масив маркерів на карті [lat, long, city]. Визначити найближче місто до
// вказаних координат
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Помилка! ${message}`);
    }
    function getCoordinates() {
        const userInput = prompt(`Введіть через пробіл координати широти, довготи`).split(' ');
        if (userInput.length !== 2)
            throwError(`Введіть тільки дві координати: широту та довготу`);
        const userCordinates = [Number(userInput[0]), Number(userInput[1])];
        return userCordinates;
    }
    function getMarkersList(markersNum) {
        if (isNaN(markersNum) || markersNum < 1)
            throwError(`Введіть ціле число більше 0`);
        let markerList = [];
        for (let i = 0; i < markersNum; i++) {
            const cityCoordinates = getCoordinates();
            const cityTitle = prompt(`Введіть назву міста`);
            if (!cityTitle)
                throwError(`Назва міста не може бути ''`);
            markerList.push([...cityCoordinates, cityTitle]);
        }
        return markerList;
    }
    function getDistance(firstMarkerCoord, secondMarkerCoord) {
        return Math.hypot(firstMarkerCoord[0] - secondMarkerCoord[0], firstMarkerCoord[1] - secondMarkerCoord[1]);
    }
    function getClosestCity(userCoordinates, markersList) {
        if (markersList.length === 0)
            throwError(`Порожній список маркерів`);
        return markersList.reduce((closest, marker) => getDistance(userCoordinates, [marker[0], marker[1]]) < getDistance(userCoordinates, [closest[0], closest[1]]) ? marker : closest);
    }
    try {
        const markersList = getMarkersList(3);
        const userCoordinates = getCoordinates();
        const closestCity = getClosestCity(userCoordinates, markersList);
        document.write(`Найближче місто до вказаної локації: (${userCoordinates[0]},${userCoordinates[1]}) є місто ${closestCity[2]} з координатами(${closestCity[0]}, ${closestCity[1]})`);
    }
    catch (error) {
        console.error(`Помилка!`, error instanceof Error ? error.message : "Невідома помилка");
    }
}

