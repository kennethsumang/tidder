import { PostChild } from "@/app/_types/reddit";
import { Card, CardBody, Typography } from "../MaterialTailwind";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon, ClockIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(relativeTime);

interface Props {
  post: PostChild;
}

/**
 * PostEntry component
 * @author Kenneth Sumang
 */
export default function PostEntry({ post }: Props) {
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
    <Card className="m-3 p-3">
      <CardBody>
        <div className="flex flex-col">
          <Typography variant="h6">
            { post.data.title }
          </Typography>
          <div>
            <small>by { post.data.author }</small>
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
  )
}