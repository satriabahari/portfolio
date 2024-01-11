import menuSlice from "@/lib/features/menu/menuSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu: menuSlice,
    },
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
