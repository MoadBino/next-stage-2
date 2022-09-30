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
      let startNum = action.payload;
      let endNum = action.payload + 1;
      for (let i = startNum; i <= endNum; i++) {
        state.posts.push(state.list[i]);
      }
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter((element) => {
        if (element.id !== action.payload) {
          return element;
        }
      });
    },

    updatepost: (state, action) => {
      state.posts = state.posts.map((element) => {
        if (element.id == action.payload.id) {
          element.body = action.payload.body || element.body;
          element.title = action.payload.title || element.title;
          return element;
        } else {
          return element;
        }
      });
    },
  },
});
export const { savePosts, getPost, deletePost, updatepost } =postReducer.actions;
export default postReducer.reducer;
