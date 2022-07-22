import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchUsers: [],
  searchUser: {},
  searchUserId: 0,
};

const searchUserSlice = createSlice({
  name:'mainLetters',
  initialState,
  reducers: {
    setSearchUsers (state,action) {
      const {searchUsers} = action.payload
      state.searchUsers = searchUsers
    },
    setSearchUser (state, action) {
      const {searchUser} = action.payload;
      state.searchUser = searchUser;
    },
    setSearchUserId (state,action) {
      state.searchUserId = action.payload.searchUserId
    }


  },
})
export const {setSearchUser, setSearchUsers, setSearchUserId} = searchUserSlice.actions
export default searchUserSlice;
