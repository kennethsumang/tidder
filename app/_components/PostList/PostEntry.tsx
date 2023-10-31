import { PostChild } from "@/app/_types/reddit";
import {Card, CardBody, Typography} from "../MaterialTailwind";
import {ArrowUpIcon} from "@heroicons/react/24/solid";

interface Props {
  post: PostChild;
}

/**
 * PostEntry component
 * @author Kenneth Sumang
 */
export default function PostEntry({ post }: Props) {
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
            <ArrowUpIcon className="h-4 w-4 mr-2" />
            <small>{ post.data.ups }</small>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}