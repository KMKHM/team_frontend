import authReducer from './auth';
import { combineReducers } from '@reduxjs/toolkit';
import searchUserSlice from './searchUser';
import mainLettersSlice from './mainLetters';

const rootReducer = combineReducers({
  auth: authReducer,
  searchUser: searchUserSlice.reducer,
  mainLetters: mainLettersSlice.reducer
});

export default rootReducer;
