"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import {useDispatch} from "react-redux";
import {setSidebarOpen} from "@/app/_store/slices/app.slice";

/**
 * MediaQueryProvider component
 * This component does not return a React element,
 * this will only update some state variables depending
 * on the media query.
 */
export default function MediaQueryProvider() {
  const dispatch = useDispatch();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 992px)");
  // const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) and (max-width : 992px)");

  if (isSmallDevice) {
    dispatch(setSidebarOpen(false));
  } else {
    dispatch(setSidebarOpen(true));
  }

  return <></>;
}