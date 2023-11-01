"use client";

import {
  Card,
  Typography,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "./MaterialTailwind";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import {SUBREDDIT_LIST} from "@/app/_constants/reddit.constant";

/**
 * AppSideBar component
 * @author Kenneth Sumang
 */
export default function AppSideBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/next.svg" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Tidder
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
          crossOrigin=""
        />
      </div>
      <List>
        {
          SUBREDDIT_LIST.map((subreddit) => {
            return (
              <ListItem
                key={subreddit}
                onClick={() => router.push(`/sub/${subreddit}`)}
                selected={pathname.startsWith(`/sub/${subreddit}`)}
              >
                <ListItemPrefix>
                  <DocumentTextIcon className="h-5 w-5" />
                </ListItemPrefix>
                r/{subreddit}
              </ListItem>
            )
          })
        }
      </List>
    </Card>
  );
}