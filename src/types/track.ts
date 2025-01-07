/**
 * Options for publishing UserLog events
 */
export interface TrackOptions {
  /**
   * Channel name
   * example: "registrations"
   */
  channel: string;

  /**
   * Event name
   * example: "User Registered"
   */
  event: string;

  /**
   * Event description
   * example: "user@example.com registered"
   */
  description?: string;

  /**
   * User ID
   * example: "user@example.com"
   */
  user_id?: string;

  /**
   * Event icon (emoji)
   * must be a single emoji
   * example: "💰"
   */
  icon?: string;

  /**
   * Event tags
   * example: { firstname: "john", lastname: "doe" }
   */
  tags?: Tags;

  /**
   * Send push notification
   */
  notify?: boolean;
}

export type TagKey = Lowercase<string>;

/** Tag Type **/
export type Tags = { [key: TagKey]: string | number | boolean };
