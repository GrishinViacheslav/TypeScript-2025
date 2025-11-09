import errorFunc from "../errorFunc.js";
export default class Headman {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    isValidHeadman(value) {
        return !!value && typeof value === "object" && "fullName" in value && typeof value.fullName === "string" && "course" in value && typeof value.course === "number" && "faculty" in value && typeof value.faculty === "string" && "group" in value && typeof value.group === "number";
    }
    printHeadmanInfo() {
        if (!this.isValidHeadman(this.data))
            errorFunc(`Incorrect data type`);
        return this.data;
    }
}
