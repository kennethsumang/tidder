import { PostChild } from "@/app/_types/reddit";
import {Card, CardBody, Typography} from "../MaterialTailwind";

interface Props {
  post: PostChild;
}

export default function PostEntry({ post }: Props) {
  return (
    <Card className="m-3 p-3">
      <CardBody>
        <Typography variant="h6">
          { post.data.title }
        </Typography>
      </CardBody>
    </Card>
  )
}