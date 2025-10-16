// Задача 2.  Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.
if (confirm("Почати тестування?")) {
  function throwError(message: string):never {
    throw new Error(`Error! ${message}`)
  }

  function getLastSymbol(data: number): number
  function getLastSymbol(data: string): string

  function getLastSymbol(el: number | string): number | string {
    if(typeof el === `number`) return Math.abs(el%10)
    else if(typeof el === `string`) return el[length - 1]
    else {
        const _exCheck:never = el
        throwError(`Inncorrect data type`)
    }
  }

  const num = 125
  const str = '1753'
  console.log(getLastSymbol(num))
  console.log(getLastSymbol(str))
}
