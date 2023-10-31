import RedditService from "@/app/_services/reddit.service";
import {redirect} from "next/navigation";
import {SuccessResponse} from "@/app/_types/common";
import {CommentList, PostList} from "@/app/_types/reddit";
import PostContainer from "@/app/_components/Post/PostContainer";

/**
 * Props structure
 */
interface Props {
  params: {
    subreddit: string;
    id: string;
  }
}

/**
 * Fetches posts
 * @param {string} subreddit
 * @param {string} id
 */
async function fetchComments(subreddit: string, id: string) {
  return await (new RedditService()).requestSpecificPost(subreddit, id);
}

/**
 * Comments component
 * @author Kenneth Sumang
 */
export default async function Comments({ params }: Props) {
  const response = await fetchComments(params.subreddit, params.id);

  if (!response.success) {
    redirect(`/?error=reddit_not_found`);
  }

  const [postList, commentList] = (response as SuccessResponse<[PostList, CommentList]>).data;

  return (
    <PostContainer postList={postList} commentList={commentList} />
  );
}