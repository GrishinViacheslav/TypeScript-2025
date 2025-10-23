// Задача 1. Створити два інтерфейс студента (піб, курс, факультет). На основі цього інтерфейсу створити інтерфейс старости 
// (додати поле з номером групи)
if (confirm("Почати тестування?")) {
  interface Student {
    fullName: string,
    course: number,
    faculty: string,
  }

  interface Headman extends Student {
    groupNumber: number,
  }

  const head:Headman = {
    fullName: 'Mike Johnson',
    course: 2,
    faculty: 'IT',
    groupNumber: 2,
  } 
}
