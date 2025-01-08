"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userlog_1 = __importDefault(require("./client/userlog"));
// Prüfen, ob `window` existiert
if (typeof window !== "undefined") {
    // `UserLog` auf `window` setzen
    window.UserLog = userlog_1.default;
}
//# sourceMappingURL=main.js.map