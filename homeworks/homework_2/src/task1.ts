// Задача 1. Вводиться перший номер місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і
// генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати
// never.
if (confirm("Почати тестування?")) {
  function throwError(message: string):never {
    throw new Error(`Error! ${message}`)
  }
  type SeasonStartNumber = 3 | 6 | 9 | 12

  function getSeason(season:SeasonStartNumber):string {
    if(season < 1 || season > 12) throwError(`${season} is incorrect month number`)
    let result:string
    switch(season) {
        case 3: result = 'spring';
        break;
        case 6: result = 'summer';
        break;
        case 9: result = 'autumn';
        break;
        case 12: result = 'winter';
        break;
        default:
            const _exCheck:never = season
            throwError(`${season} is not the first month of the season`)
    }
    return result
  }

  document.write(getSeason(3))
}
