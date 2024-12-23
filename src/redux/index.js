import { configureStore } from "@reduxjs/toolkit";
import saved from "./slices/saved-slice"

const store = configureStore({
  reducer: {
    saved
  },
});

export default store;
