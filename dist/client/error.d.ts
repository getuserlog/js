/**
 * Fetch HTTP Response Error
 */
export declare class HTTPResponseError extends Error {
    readonly message: string;
    constructor(status: number, statusText: string, body: unknown);
    /**
     * Create a readable string from the response body
     * @param body
     */
    createReadableString(body: unknown): string;
    toString(): string;
    /**
     * Get Error Info as JSON
     */
    toJSON(): {
        message: string;
    };
}
