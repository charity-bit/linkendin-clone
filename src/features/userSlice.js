import { createSlice } from "@reduxjs/toolkit";


//userSlice({name:"",initialState:{},reducers:{}})
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    //actions in this case are login and logout
    login: (state, action) => {
      state.user= action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//selecters
//name:user,initialState:{user},
// its basically state.name.initialState //which is user
export const selectUser = (state) => state.user.user; 
 
export default userSlice.reducer;
