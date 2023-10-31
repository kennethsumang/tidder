import RedditError from "@/app/_exceptions/reddit.error";
import {CommentList, PostList} from "@/app/_types/reddit";

/**
 * RedditRepository class
 * @author Kenneth Sumang
 */
export default class RedditRepository {
  /**
   * Requests for Reddit data in JSON
   * @param   {string} subreddit
   * @param   {number} limit
   * @param   {string} after
   * @returns {Promise<PostList>}
   */
  requestSubreddit = async (subreddit: string, limit: number = 20, after: string = ''): Promise<PostList> => {
    try {
      const response = await fetch(
        `https://reddit.com/r/${subreddit}.json?limit=${limit}&after=${after}&raw_json=1`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      return await response.json() as PostList;
    } catch (e) {
      const err = e as Error;
      throw new RedditError(err.stack, err.message);
    }
  }

  /**
   * Request for specific post
   * @param   {string} subreddit
   * @param   {string} id
   * @returns {Promise<[PostList, CommentList]>}
   */
  requestSpecificPost = async (subreddit: string, id: string): Promise<[PostList, CommentList]> => {
    try {
      const response = await fetch(
        `https://reddit.com/r/${subreddit}/comments/${id}.json`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }
      );

      return await response.json() as [PostList, CommentList];
    } catch (e) {
      const err = e as Error;
      throw new RedditError(err.stack, err.message);
    }
  }
}