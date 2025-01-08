"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const error_1 = require("./error");
/**
 * UserLog Client
 */
class UserLog {
    /**
     * Construct a new UserLog instance
     * @param api_key UserLog API api_key
     * @param project UserLog project name
     * @param disableTracking Disable tracking
     * for more information, see: https://docs.getuserlog.com
     */
    constructor({ api_key, project, disableTracking = false }) {
        this.disabled = false;
        this.api_key = api_key;
        this.project = project;
        this.disabled = disableTracking || false;
    }
    /**
     * Disable tracking for this instance
     * (this is useful for development)
     */
    disableTracking() {
        this.disabled = true;
    }
    /**
     * Enable tracking for this instance
     * (this is useful for development)
     */
    enableTracking() {
        this.disabled = false;
    }
    /**
     * Get project name
     * @returns project name
     */
    getProject() {
        return this.project;
    }
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    createAuthorizationHeader() {
        return `Bearer ${this.api_key}`;
    }
    /**
     * Creates headers for requests
     * @private
     */
    createHeaders() {
        return {
            'Content-Type': 'application/json',
            Authorization: this.createAuthorizationHeader()
        };
    }
    /**
     * Publish a new event to UserLog
     * @param options
     * @returns true when successfully published
     */
    track(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.disabled)
                return true;
            const headers = this.createHeaders();
            const method = 'POST';
            const body = JSON.stringify(Object.assign(Object.assign({}, options), { project: this.getProject() }));
            const response = yield fetch(constants_1.ENDPOINTS.LOG, { method, body, headers });
            if (!response.ok) {
                throw new error_1.HTTPResponseError(response.status, response.statusText, yield response.json());
            }
            return true;
        });
    }
}
exports.default = UserLog;
//# sourceMappingURL=userlog.js.map