import {CommentList, PostList} from "@/app/_types/reddit";
import PostCard from "@/app/_components/Post/PostCard";
import CommentContainer from "@/app/_components/Post/CommentContainer";


interface Props {
  postList: PostList;
  commentList: CommentList;
}

/**
 * PostContainer component
 * @author Kenneth Sumang
 */
export default function PostContainer({ postList, commentList }: Props) {
  return (
    <div className="flex flex-col m-5">
      <PostCard post={postList.data.children[0]} />
      <CommentContainer comments={commentList.data.children} author={postList.data.children[0].data.author} />
    </div>
  );
}