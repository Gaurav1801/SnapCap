import { configureStore } from "@reduxjs/toolkit";
import captionReducer from "./captionSlice";

export const store = configureStore({
  reducer: {
    captions: captionReducer,
  },
});

export default store;
