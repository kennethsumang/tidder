"use client";

import {PostChild, PostList} from "@/app/_types/reddit";
import PostEntry from "@/app/_components/PostList/PostEntry";
import {useState} from "react";
import {Button, Spinner} from "@/app/_components/MaterialTailwind";
import {useDispatch} from "react-redux";
import {setNavbarTitle} from "@/app/_store/slices/app.slice";

interface Props {
  postList: PostList;
  subreddit: string;
}

/**
 * PostContainer component
 * @author Kenneth Sumang
 */
export default function PostListContainer({ postList, subreddit }: Props) {
  const [ posts, setPosts ] = useState<PostChild[]>(postList.data.children);
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();

  dispatch(setNavbarTitle(`r/${subreddit}`));

  /**
   * Handles the load more button click event
   */
  async function handleLoadMoreClick() {
    const lastPostId = posts[posts.length - 1].data.id;
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/posts?subreddit=${subreddit}&limit=20&after=t3_${lastPostId}`,
        { method: 'GET' }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json() as PostList;
      setPosts([ ...posts, ...data.data.children ]);
    } catch (e) {
      console.error(e);
      alert('Failed to fetch posts.');
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Handles the reload button click event
   */
  async function handleReloadClick() {

  }

  return (
    <div className="flex flex-col">
      <div>
        {
          posts.map((postData) => {
            return (
              <PostEntry
                key={postData.data.id}
                post={postData}
              />
            )
          })
        }
      </div>

      <div className="flex justify-center items-center mb-5">
        {
          (isLoading)
            ? <Spinner className="h-5 w-5" />
            : <></>
        }
      </div>

      <div className="flex justify-center items-center mb-5">
        {
          (posts.length > 0)
            ? <Button
              className="rounded-2xl"
              color="blue"
              onClick={() => handleLoadMoreClick()}
              disabled={isLoading}
            >
              See more
            </Button>
            : <Button
              className="rounded-2xl"
              color="blue"
              onClick={() => handleReloadClick()}
              disabled={isLoading}
            >
              Reload
            </Button>
        }
      </div>
    </div>
  );
}