import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { acSearch } from "./Search";

const reducer = combineReducers({
  acSearch,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
