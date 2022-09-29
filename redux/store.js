import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducer/users";

export default configureStore({





  reducer: {
    users: usersSlice,
  },
});
