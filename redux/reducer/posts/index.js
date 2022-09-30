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
      console.log("action", action.payload);
      let startNum = action.payload;
      let endNum = action.payload + 1;
      for (let i = startNum; i <= endNum; i++) {
        state.posts.push(state.list[i]);
      }
    },

    deletePost: (state, action) => {
      console.log("grom ");
      state.posts = state.posts.filter((element) => {
        if (element.id !== action.payload) {
            return element;
        }
      });
    },
  },
});
export const { savePosts, getPost, deletePost } = postReducer.actions;
export default postReducer.reducer;
