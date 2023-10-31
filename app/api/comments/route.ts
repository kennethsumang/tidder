import {NextRequest} from "next/server";
import RedditService from "@/app/_services/reddit.service";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const subreddit = searchParams.get('subreddit');
  const id = searchParams.get('id');

  if (!id) {
    const error = {
      error: {
        code: 400,
        message: 'Invalid ID.'
      }
    };
    return new Response(JSON.stringify(error), {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  if (!subreddit) {
    const error = {
      error: {
        code: 400,
        message: 'Invalid subreddit.'
      }
    };
    return new Response(JSON.stringify(error), {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  const response = await (new RedditService()).requestSpecificPost(subreddit, id);

  if (!response.success) {
    const error = {
      error: {
        code: 500,
        message: response.error.message
      }
    };
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: 'Server Error',
    });
  }

  return new Response(JSON.stringify(response.data), {
    status: 200,
    statusText: 'OK',
  });
}