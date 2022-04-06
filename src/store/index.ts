import { configureStore } from "@reduxjs/toolkit";
import cards from "./fetchCards";

const store = configureStore({
  reducer: {
    cards,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
