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
      if (action.payload.empty) {
        state.posts = [];
      }
      let startNum = action.payload.num + 1;
      let endNum = action.payload.num + 5;
      for (let i = startNum; i <= endNum; i++) {
        if (!state.list[i]) {
          return;
        }
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
    addPost: (state, action) => {
      const array = state.list;
      const id = array.length + 1;
      action.payload.id = id;
      state.posts.unshift(action.payload);
    },
  },
});
export const { savePosts, getPost, deletePost, updatepost, addPost } =
  postReducer.actions;
export default postReducer.reducer;
