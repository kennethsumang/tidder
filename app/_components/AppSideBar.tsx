"use client";

import {
  Card,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "./MaterialTailwind";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import {SUBREDDIT_LIST} from "@/app/_constants/reddit.constant";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/_store";
import {useMediaQuery} from "@uidotdev/usehooks";
import React from "react";
import {setSidebarOpen} from "@/app/_store/slices/app.slice";

/**
 * AppSideBar component
 * @author Kenneth Sumang
 */
export default function AppSideBar({ children }: { children: React.ReactNode }) {
  const isSidebarOpen = useSelector((state: RootState) => state.app.isSidebarOpen);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 992px)");
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  /**
   * Handles subreddit click event
   * @param {string} subreddit
   */
  function handleSubredditClickEvent(subreddit: string) {
    if (isSmallDevice && isSidebarOpen) {
      dispatch(setSidebarOpen(false));
    }

    router.push(`/sub/${subreddit}`)
  }

  /**
   * Renders content
   * @returns {React.JSX.Element}
   */
  function renderContent(): React.JSX.Element {
    return (
      <div className="h-[calc(100vh)] overflow-y-auto flex flex-col w-full">
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <div className={`${(isSidebarOpen) ? '' : 'hidden'} ${(isSmallDevice) ? 'absolute z-50' : ''}`}>
        <Card
          className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-t-none"
        >
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
              crossOrigin=""
            />
          </div>
          <List>
            {
              SUBREDDIT_LIST.map((subreddit: string) => {
                return (
                  <ListItem
                    key={subreddit}
                    onClick={() => handleSubredditClickEvent(subreddit)}
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
      </div>
      {
        (isSidebarOpen && isSmallDevice)
          ? <div className="opacity-20 __disabled">{ renderContent() } </div>
          : renderContent()
      }
    </div>

  );
}