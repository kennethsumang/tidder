"use client";

import {Navbar, Typography} from "@/app/_components/MaterialTailwind";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/_store";
import {toggleSidebarOpen} from "@/app/_store/slices/app.slice";
import { usePathname } from "next/navigation";

/**
 * AppBar component
 * @author Kenneth Sumang
 */
export default function AppBar() {
  // const navbarTitle = useSelector((state: RootState) => state.app.navbarTitle);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const navbarTitle: string = getNavbarTitle();

  function getNavbarTitle() {
    const subMatches = new RegExp('^\/sub\/([a-zA-Z_]+)').exec(pathname);
    if (subMatches && subMatches[0]) {
      return `/r/${subMatches[1]}`;
    }

    return 'Tidder';
  }

  return (
    <Navbar className="w-full rounded-none max-w-full px-4 py-2 lg:px-8 lg:py-4" color="blue">
      <div className="container flex flex-row py-1.5 text-blue-gray-900">
        <Bars3Icon
          className="w-8 h-8 mr-12 cursor-pointer"
          onClick={() => dispatch(toggleSidebarOpen())}
        />
        <Typography
          as="a"
          variant="h4"
          className="mr-4 cursor-pointer"
        >
          { navbarTitle }
        </Typography>
      </div>
    </Navbar>
  );
}