interface PostChild {
  kind: string;
  data: {
    subreddit: string;
    author_fullname: string;
    title: string;
    subreddit_name_prefixed: string;
    subreddit_type: string;
    name: string;
    ups: number;
    link_flair_text: string;
    created: number;
    created_utc: number;
    author: string;
    permalink: string;
    id: string;
    selftext: string;
  }
}

interface PostList {
  kind: 'Listing';
  data: {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: unknown;
    children: PostChild[];
  },
}

interface CommentChild {
  kind: string;
  data: {
    subreddit: string;
    id: string;
    author: string;
    author_fullname: string;
    body: string;
    body_html: string;
    permalink: string;
    ups: number;
    replies: ''|CommentList;
  }
}

interface CommentList {
  kind: 'Listing';
  data: {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: unknown;
  },
  children: CommentChild[];
}

export type {
  PostList,
  PostChild,
  CommentList,
  CommentChild,
}