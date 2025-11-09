import errorFunc from "../errorFunc.js";

type UserRegistrationInfo = { name: string; password: string };

export default class Validator {
  private data: UserRegistrationInfo;
  constructor(data: UserRegistrationInfo) {
    if (Validator.validateValue(data)) this.data = data;
    else errorFunc(`Incorrect data object`);
  }
  static validateValue(val: unknown): val is UserRegistrationInfo {
    return !!val && typeof val === "object" && Object.keys(val).length === 2 && "name" in val && typeof val.name === "string" && "password" in val && typeof val.password === "string";
  }
}
