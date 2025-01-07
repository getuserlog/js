import UserLog from "./client/userlog";

// Globale Typenerweiterung (immer auf oberster Ebene)
declare global {
    interface Window {
        UserLog: typeof UserLog;
    }
}

// Prüfen, ob `window` existiert
if (typeof window !== "undefined") {
    // `UserLog` auf `window` setzen
    window.UserLog = UserLog;
}
