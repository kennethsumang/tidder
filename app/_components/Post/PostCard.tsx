import {PostChild} from "@/app/_types/reddit";
import {Card, CardBody, Typography} from "@/app/_components/MaterialTailwind";

import {ArrowUpIcon} from "@heroicons/react/24/solid";
import {ChatBubbleLeftIcon, ClockIcon} from "@heroicons/react/24/outline";
import {getRelativeTime} from "@/app/_libraries/date.library";
import PostBodyMarkdown from "@/app/_components/PostBodyMarkdown";

interface Props {
  post: PostChild;
}

/**
 * PostCard component
 * @author Kenneth Sumang
 */
export default function PostCard({ post }: Props) {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col">
          <Typography variant="h4">{ post.data.title }</Typography>
          <PostBodyMarkdown content={post.data.selftext} className="mt-3 mb-3" />
          <div>
            <small>in /r/{ post.data.subreddit } by { post.data.author}</small>
          </div>
          <div className="flex flex-row mt-2">
            <div className="flex flex-row mr-2">
              <ArrowUpIcon className="h-4 w-4 mr-2" />
              <small>{ post.data.ups }</small>
            </div>
            <div className="flex flex-row mr-2">
              <ChatBubbleLeftIcon className="h-4 w-4 mr-2" />
              <small>{ post.data.num_comments }</small>
            </div>
            <div className="flex flex-row mr-2">
              <ClockIcon className="h-4 w-4 mr-2" />
              <small>{ getRelativeTime(post.data.created_utc) }</small>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}