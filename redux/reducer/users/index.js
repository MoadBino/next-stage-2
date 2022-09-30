import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLogin: false,
    id: "",
  },
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
    isLogin: (state, action) => {
      state.isLogin = true;
      state.id = action.payload;
    },
    logout:(state,action)=>{

      state.isLogin = false;
      state.id = "";
    }
  },
});

export const { saveUsers, isLogin,logout } = usersSlice.actions;
export default usersSlice.reducer;
