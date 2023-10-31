import {ErrorResponse, SuccessResponse} from "@/app/_types/common";
import {CommentList, PostList} from "@/app/_types/reddit";
import RedditRepository from "@/app/_repositories/reddit.repository";

/**
 * RedditService class
 * @author Kenneth Sumang
 */
export default class RedditService {
  redditRepository: RedditRepository;

  /**
   * Constructor method.
   */
  constructor() {
    this.redditRepository = new RedditRepository;
  }

  /**
   * Request post list for specific subreddit
   * @param   {string} subreddit
   * @param   {number} limit
   * @param   {string} after
   * @returns {Promise<SuccessResponse<PostList>|ErrorResponse>}
   */
  requestPostList = async (subreddit: string, limit: number = 20, after: string = ''): Promise<SuccessResponse<PostList>|ErrorResponse> => {
    try {
      const response = await this.redditRepository.requestSubreddit(subreddit, limit, after);
      return {
        success: true,
        data: response as PostList,
      };
    } catch (e) {
      return {
        success: false,
        error: {
          stack: (e as Error).stack,
          message: (e as Error).message,
        }
      };
    }
  }

  /**
   * Requests for specific post
   * @param {string} subreddit
   * @param {string} id
   * @param {string} title
   * @returns {Promise<SuccessResponse<[PostList, CommentList]>|ErrorResponse>}
   */
  requestSpecificPost = async (subreddit: string, id: string, title: string): Promise<SuccessResponse<[PostList, CommentList]>|ErrorResponse> => {
    try {
      const permalink = `/r/${subreddit}/comments/${id}/${title}.json`;
      const response = await this.redditRepository.requestSpecificPost(permalink);
      return {
        success: true,
        data: response as [PostList, CommentList],
      };
    } catch (e) {
      return {
        success: false,
        error: {
          stack: (e as Error).stack,
          message: (e as Error).message,
        }
      };
    }

  }
}