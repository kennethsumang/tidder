/**
 * RedditError
 * @author Kenneth Sumang
 */
export default class RedditError extends Error {
  stack: string|undefined;
  message: string;
  constructor(stack: string|undefined, message: string) {
    super();
    this.stack = stack;
    this.message = message;
  }
}