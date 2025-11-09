// 5. Валідація величин без створення екземпляра.
// Статичний метод дозволяє перевіряти дані перед створенням об’єкта.
import Validator from "./Validator.js";
import errorFunc from "../errorFunc.js";

try {
  const check1 = Validator.validateValue({ name: "John", password: "advvnfsdsd1254" });
  console.log(`Is valid? ${check1}`);

  const check2 = new Validator({ name: "John", age: "27" });
  console.log(check2);
} catch (error) {
  console.log(error instanceof Error ? errorFunc(`Incorrect data!`) : "Unknown error");
}
