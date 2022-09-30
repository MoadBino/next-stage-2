import { createSlice } from "@reduxjs/toolkit";

export const postReducer = createSlice({
  name: "post",
  initialState: {
    list: [],
    posts: [],
  },
  reducers: {
    savePosts: (state, action) => {
      state.list = action.payload;
    },
    getPost: (state, action) => {
        console.log("action",action.payload);
      let startNum = action.payload;
      let endNum = action.payload + 1;
      for (let i = startNum; i <= endNum; i++) {
        console.log(i,"fromloop",state.list[i]);
        state.posts.push(state.list[i]);
      }
    },
  },
});
export const { savePosts, getPost } = postReducer.actions;
export default postReducer.reducer;
