import { configureStore } from "@reduxjs/toolkit";
import showData  from "../feature/counterSlice";

export const store = configureStore({
  reducer:{
    show : showData,
  },
});