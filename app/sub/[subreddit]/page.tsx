import RedditService from "@/app/_services/reddit.service";
import {redirect} from "next/navigation";
import {SuccessResponse} from "@/app/_types/common";
import {PostList} from "@/app/_types/reddit";
import PostListContainer from "@/app/_components/PostList/PostListContainer";

/**
 * Props structure
 */
interface Props {
  params: {
    subreddit: string;
  }
}

/**
 * Fetches posts
 * @param {string} subreddit
 */
async function fetchPosts(subreddit: string) {
  return await (new RedditService()).requestPostList(subreddit, 20);
}

/**
 * Subreddit page
 * @author Kenneth Sumang
 */
export default async function Page({ params }: Props) {
  const response = await fetchPosts(params.subreddit);

  if (!response.success) {
    redirect(`/?error=reddit_not_found`);
  }

  const posts = (response as SuccessResponse<PostList>).data;

  return (
    <PostListContainer posts={posts} />
  );
}