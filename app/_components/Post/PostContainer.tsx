import {CommentList, PostList} from "@/app/_types/reddit";
import {Card, CardBody, Typography} from "@/app/_components/MaterialTailwind";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {ArrowUpIcon} from "@heroicons/react/24/solid";
import {ChatBubbleLeftIcon, ClockIcon} from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(relativeTime);

interface Props {
  postList: PostList;
  commentList: CommentList;
}

/**
 * PostContainer component
 * @author Kenneth Sumang
 */
export default function PostContainer({ postList, commentList }: Props) {
  /**
   * Convert to machine timezone and get relative time
   * @param utc
   */
  function getRelativeTime(utc: number): string {
    const utcDate = dayjs.unix(utc);
    const timezone = dayjs.tz.guess();
    const convertedTime = utcDate.tz(timezone);
    return convertedTime.fromNow();
  }

  return (
    <div className="flex flex-col m-5">
      <Card>
        <CardBody>
          <div className="flex flex-col">
            <Typography variant="h4">{ postList.data.children[0].data.title }</Typography>
            <Markdown remarkPlugins={[remarkGfm]} className="mt-3 mb-3 post-markdown-cont">
              { postList.data.children[0].data.selftext }
            </Markdown>
            <div>
              <small>in /r/{ postList.data.children[0].data.subreddit } by { postList.data.children[0].data.author}</small>
            </div>
            <div className="flex flex-row mt-2">
              <div className="flex flex-row mr-2">
                <ArrowUpIcon className="h-4 w-4 mr-2" />
                <small>{ postList.data.children[0].data.ups }</small>
              </div>
              <div className="flex flex-row mr-2">
                <ChatBubbleLeftIcon className="h-4 w-4 mr-2" />
                <small>{ postList.data.children[0].data.num_comments }</small>
              </div>
              <div className="flex flex-row mr-2">
                <ClockIcon className="h-4 w-4 mr-2" />
                <small>{ getRelativeTime(postList.data.children[0].data.created_utc) }</small>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}