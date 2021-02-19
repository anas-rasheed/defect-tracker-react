import { createSlice } from '@reduxjs/toolkit';
import { apiCallFailed, apiCallStart, apiCallSuccess } from '../actions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});
export const { login, logout } = authSlice.actions;

export const authenticate = credentials =>
  apiCallStart({
    url: `login`,
    method: 'POST',
    data: credentials,
    onSuccess: apiCallSuccess.type,
    onError: apiCallFailed.type,
  });

export default authSlice.reducer;
