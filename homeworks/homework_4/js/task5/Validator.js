import errorFunc from "../errorFunc.js";
export default class Validator {
    constructor(data) {
        if (Validator.validateValue(data))
            this.data = data;
        else
            errorFunc(`Incorrect data object`);
    }
    static validateValue(val) {
        return !!val && typeof val === "object" && Object.keys(val).length === 2 && "name" in val && typeof val.name === "string" && "password" in val && typeof val.password === "string";
    }
}
