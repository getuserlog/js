import UserLog from "./client/userlog";
declare global {
    interface Window {
        UserLog: typeof UserLog;
    }
}
