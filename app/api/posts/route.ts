import {NextRequest} from "next/server";
import RedditService from "@/app/_services/reddit.service";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const subreddit = searchParams.get('subreddit');
  const limit = searchParams.get('limit') || '20';
  const after = searchParams.get('after') || '';

  if (!isNumeric(limit)) {
    const error = {
      error: {
        code: 400,
        message: 'Invalid limit query.'
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
        message: 'Invalid subreddit query.'
      }
    };
    return new Response(JSON.stringify(error), {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  const response = await (new RedditService()).requestPostList(
    subreddit,
    parseInt(limit, 10),
    after
  );

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

/**
 * Checks if string is numeric
 * @param {string} value
 */
function isNumeric(value: string) {
  return /^\d+$/.test(value);
}