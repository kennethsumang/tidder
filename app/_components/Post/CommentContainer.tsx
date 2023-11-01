import {CommentChild, CommentList} from "@/app/_types/reddit";
import {Card, CardBody, IconButton} from "@/app/_components/MaterialTailwind";
import {ClockIcon, UserIcon} from "@heroicons/react/24/outline";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {ArrowUpIcon} from "@heroicons/react/24/solid";
import {getRelativeTime} from "@/app/_libraries/date.library";
import React from "react";

interface Props {
  comments: CommentChild[];
}

/**
 * CommentCard component
 * @author Kenneth Sumang
 */
export default function CommentContainer({ comments }: Props) {
  if (comments.length === 0) {
    return <></>;
  }

  /**
   * Renders replies recursively
   * @param   {CommentList} replies
   * @returns {React.ReactNode}
   */
  function renderReplies(replies: CommentList): React.ReactNode {
    const replyList = replies.data.children;

    return (
      <>
        {
          replyList.map((replyData) => {
            return (
              <div
                key={replyData.data.id}
                className="flex flex-col ml-3 pl-3 pt-3 border-l-4 border-gray-500"
              >
                { renderCommentContainer(replyData) }
                {
                  (replyData.data.replies !== '')
                    ? renderReplies(replyData.data.replies)
                    : <></>
                }
              </div>
            );
          })
        }
      </>
    )
  }

  /**
   * Renders the comment container (contains body, author, ups, created time, etc)
   * @param   {CommentChild} comment
   * @returns {React.ReactNode}
   */
  function renderCommentContainer(comment: CommentChild): React.ReactNode {
    return (
      <div className="flex flex-col pb-4">
        <div className="flex flex-row mb-3">
          <IconButton className="w-6 h-6 mr-3 rounded-full">
            <UserIcon className="w-5 h-5" />
          </IconButton>
          <div className="flex items-center">
            { comment.data.author }
          </div>
        </div>

        <Markdown remarkPlugins={[remarkGfm]} className="mb-3">
          { comment.data.body }
        </Markdown>

        <div className="flex flex-row mt-2">
          <div className="flex flex-row mr-2">
            <ArrowUpIcon className="h-4 w-4 mr-2" />
            <small>{ comment.data.ups }</small>
          </div>
          <div className="flex flex-row mr-2">
            <ClockIcon className="h-4 w-4 mr-2" />
            <small>{ getRelativeTime(comment.data.created_utc) }</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-3 mt-3">
      {
        comments.map((comment) => {
          return (
            <Card
              key={comment.data.id}
              className="mb-3"
            >
              <CardBody>
                { renderCommentContainer(comment) }
                {
                  (comment.data.replies !== '')
                    ? renderReplies(comment.data.replies)
                    : <></>
                }
              </CardBody>
            </Card>
          )
        })
      }
    </div>
  );
}