import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import userDataReducer from "./userData/userDataSlice";
import { tagsApi } from "./tags/apiSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    userData: userDataReducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  } as any, // Using `as any` to workaround TypeScript error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
