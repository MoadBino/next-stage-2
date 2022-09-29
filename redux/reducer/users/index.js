import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { saveUsers } = usersSlice.actions;
export default usersSlice.reducer;
