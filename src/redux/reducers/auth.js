import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  role: '',
  auth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
const { actions, reducer } = authSlice;

export const { setAuth } = actions;

export default reducer;
