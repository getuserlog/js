import { TrackOptions } from '../types';
/**
 * UserLog Client
 */
export default class UserLog {
    private readonly api_key;
    private readonly project;
    private disabled;
    /**
     * Construct a new UserLog instance
     * @param api_key UserLog API api_key
     * @param project UserLog project name
     * @param disableTracking Disable tracking
     * for more information, see: https://docs.getuserlog.com
     */
    constructor({ api_key, project, disableTracking }: {
        api_key: string;
        project: string;
        disableTracking?: boolean;
    });
    /**
     * Disable tracking for this instance
     * (this is useful for development)
     */
    disableTracking(): void;
    /**
     * Enable tracking for this instance
     * (this is useful for development)
     */
    enableTracking(): void;
    /**
     * Get project name
     * @returns project name
     */
    getProject(): string;
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    private createAuthorizationHeader;
    /**
     * Creates headers for requests
     * @private
     */
    private createHeaders;
    /**
     * Publish a new event to UserLog
     * @param options
     * @returns true when successfully published
     */
    track(options: TrackOptions): Promise<boolean>;
}
