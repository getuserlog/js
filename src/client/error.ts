interface ValidationError {
  message: string;
}

interface ErrorBody {
  validation?: {
    body: ValidationError[];
  };
}

/**
 * Fetch HTTP Response Error
 */
export class HTTPResponseError extends Error {
  public readonly message: string;

  constructor(status: number, statusText: string, body: unknown) {
    super(`HTTP Error Response: ${status} ${statusText}`);
    this.message = this.createReadableString(body);
  }

  /**
   * Create a readable string from the response body
   * @param body
   */
  createReadableString(body: unknown) {
    let error = '[Userlog] Failed to publish: ';

    // Typprüfung des Körpers als ErrorBody
    if (body && typeof body === 'object' && 'validation' in body) {
      const errorBody = body as ErrorBody;
      if (errorBody.validation && Array.isArray(errorBody.validation.body)) {
        error += errorBody.validation.body
          .map((item) => item.message)
          .join(', ');
      }
    } else {
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
