// Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)

if (confirm("Почати тестування?")) {
  type Ticket = {
    destination: string,
    price: number,
    fullName: string,
    date: Date,
  }

  function isTicket(value:unknown): value is Ticket {
    return (
      !!value &&
      typeof value === 'object' &&
      ['destination', 'price', 'fullName', 'date'].every((key) => key in value)
    )
  }

  function checkIsATicket(value:unknown): asserts value is Ticket {
    if(!(
      !!value &&
      typeof value === 'object' &&
      ['destination', 'price', 'fullName', 'date'].every((key) => key in value))
      ) throw new Error('Not a Ticket')
  }
}
