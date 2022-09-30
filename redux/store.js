import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducer/users";
import postReducer from "./reducer/posts";

export default configureStore({
  reducer: {
    users: usersSlice,
    post: postReducer,
  },
});
