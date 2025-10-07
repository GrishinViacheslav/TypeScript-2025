// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2».
// Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.
if (confirm("Почати тестування?")) {
  type Obj = {
    name: string;
    age: number;
    field2: string | number;
  };
  
  const user: Obj = {
    name: "John",
    age: 30,
    field2: "web",
  };
  localStorage.setItem("data", JSON.stringify(user));
  const localStorageDataObj = JSON.parse(localStorage.getItem("data")!);
  
  let res: string | number;
  if (localStorageDataObj) {
    if ("field2" in localStorageDataObj) {
      if (typeof localStorageDataObj.field2 === "string") {
        res = localStorageDataObj.field2.length;
      } else if (typeof localStorageDataObj.field2 === "number") {
        localStorageDataObj.field2 % 2 === 0 ? (res = "Even number") : (res = "Odd number");
      } else {
        res = "type of field is not a number or string";
      }
    } else {
      res = "there is no property field2 in localStorageDataObj";
    }
  } else {
    res = "there is no data in Local Storage";
  }
  document.write(res.toString());
}
