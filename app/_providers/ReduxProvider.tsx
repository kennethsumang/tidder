"use client";

import store from "@/app/_store";
import {Provider} from "react-redux";
import React from "react";

/**
 * ReduxProvider component
 * @param children
 * @constructor
 */
export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}