import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ReduxStore/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
