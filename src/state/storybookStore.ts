import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import userDataReducer from "./userData/userDataSlice";
import { tagsApi } from "./tags/apiSlice";

const defaultUserData = {
  tagApiAccessToken: "test_storybook_access_token",
};

export const storybookStore = configureStore({
  reducer: {
    tags: tagsReducer,
    userData: userDataReducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  } as any, // Using `as any` to workaround TypeScript error
  preloadedState: {
    userData: defaultUserData, // Set default data for userData
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagsApi.middleware),
});

export type RootState = ReturnType<typeof storybookStore.getState>;
export type AppDispatch = typeof storybookStore.dispatch;
