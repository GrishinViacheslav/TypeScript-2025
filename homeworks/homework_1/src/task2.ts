// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.
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
  
  if (localStorageDataObj) {
    for (let item in localStorageDataObj) {
      document.write(`<div>${item}: ${localStorageDataObj[item]}<div>`);
    }
  }
}
