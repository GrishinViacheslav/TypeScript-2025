// Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць), airplane (швидкість, тип палива). 
// Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт. 

if (confirm("Почати тестування?")) {
  function throwError(message:string):never {
    throw new Error(`Error! ${message}`)
  }

  type Car = {
    model: string,
    owner: string,
  }
  type Bus = {
    company: string,
    seatNumber: number,
  }
  type Airplane = {
    speed: number,
    fuelType: string,
  }

  const car:Car = {
    model: 'subaru',
    owner: 'Mike',
  }
  const bus:Bus = {
    company: 'akkord',
    seatNumber: 55,
  }
  const plane:Airplane = {
    speed: 1000,
    fuelType: 'kerosene',
  }

  type TransportType = Car | Bus | Airplane

  function getTransportTypeInfo(transportType: TransportType):void {
    if('model' in transportType) {
      document.write(`<h3>Car</h3> <div>model: ${transportType.model};</div><div>owner: ${transportType.owner}</div>`)
    } else if('company' in transportType) {
      document.write(`<h3>Bus</h3> <div>company: ${transportType.company};</div><div>seat number: ${transportType.seatNumber}</div>`)
    } else if('speed' in transportType) {
      document.write(`<h3>Plane</h3> <div>speed: ${transportType.speed};</div><div>fuel type: ${transportType.fuelType}</div>`)
    } else {
      throwError('Unknown transport type')
    }
  }
}
