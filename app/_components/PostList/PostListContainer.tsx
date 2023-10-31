import { PostList } from "@/app/_types/reddit";
import PostEntry from "@/app/_components/PostList/PostEntry";

interface Props {
  posts: PostList;
}

/**
 * PostContainer component
 * @author Kenneth Sumang
 */
export default function PostListContainer({ posts }: Props) {
  return (
    <>
      {
        posts.data.children.map((postData) => {
          return (
            <PostEntry
              key={postData.data.id}
              post={postData}
            />
          )
        })
      }
    </>
  );
}