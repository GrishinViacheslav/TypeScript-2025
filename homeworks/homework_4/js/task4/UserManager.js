"use strict";
// import errorFunc from "../errorFunc.js";
// type UserStatus = { state: "online"; lastActive: Date } | { state: "offline"; lastActive: Date } | { state: "away" };
// // let state: "online" | "offline" | "away"
// // Метод: setUserStatus(id: number, status: UserStatus)
// export default class UserManager {
//   constructor(private status: UserStatus) {
//     this.status = status;
//   }
//   checkUserStatus(value: unknown): value is UserManager {
//     if (!value || typeof value !== "object") return false;
//     if (!("state" in value) || typeof value.state !== "string") return false;
//     switch (value.state) {
//       case "online":
//       case "offline":
//         return "lastActive" in value && value.lastActive instanceof Date;
//       case "away":
//         return !("lastActive" in value);
//       default:
//         return false;
//     }
//   }
// }
// // setUserStatus(id: number, status: UserStatus) {
// // }
