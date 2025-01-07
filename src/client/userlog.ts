import { ENDPOINTS } from '../constants';
import { HTTPResponseError } from './error';
import { TrackOptions } from '../types';

/**
 * UserLog Client
 */
export default class UserLog {
  private readonly api_key: string;
  private readonly project: string;
  private disabled = false;

  /**
   * Construct a new UserLog instance
   * @param api_key UserLog API api_key
   * @param project UserLog project name
   * @param disableTracking Disable tracking
   * for more information, see: https://docs.getuserlog.com
   */
  constructor({
    api_key,
    project,
    disableTracking = false
  }: {
    api_key: string;
    project: string;
    disableTracking?: boolean;
  }) {
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
  getProject(): string {
    return this.project;
  }

  /**
   * Creates authorization header
   * @returns Authorization header value
   */
  private createAuthorizationHeader(): string {
    return `Bearer ${this.api_key}`;
  }

  /**
   * Creates headers for requests
   * @private
   */
  private createHeaders(): Record<string, string> {
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
  public async track(options: TrackOptions): Promise<boolean> {
    if (this.disabled) return true;
    const headers = this.createHeaders();
    const method = 'POST';

    const body = JSON.stringify({
      ...options,
      project: this.getProject()
    });

    const response = await fetch(ENDPOINTS.LOG, { method, body, headers });
    if (!response.ok) {
      throw new HTTPResponseError(
        response.status,
        response.statusText,
        await response.json()
      );
    }

    return true;
  }
}
