"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPResponseError = void 0;
/**
 * Fetch HTTP Response Error
 */
class HTTPResponseError extends Error {
    constructor(status, statusText, body) {
        super(`HTTP Error Response: ${status} ${statusText}`);
        this.message = this.createReadableString(body);
    }
    /**
     * Create a readable string from the response body
     * @param body
     */
    createReadableString(body) {
        let error = '[Userlog] Failed to publish: ';
        // Typprüfung des Körpers als ErrorBody
        if (body && typeof body === 'object' && 'validation' in body) {
            const errorBody = body;
            if (errorBody.validation && Array.isArray(errorBody.validation.body)) {
                error += errorBody.validation.body
                    .map((item) => item.message)
                    .join(', ');
            }
        }
        else {
            error += `: Please check our docs at https://docs.getuserlog.com`;
        }
        return error;
    }
    toString() {
        return this.message;
    }
    /**
     * Get Error Info as JSON
     */
    toJSON() {
        return {
            message: this.message
        };
    }
}
exports.HTTPResponseError = HTTPResponseError;
//# sourceMappingURL=error.js.map