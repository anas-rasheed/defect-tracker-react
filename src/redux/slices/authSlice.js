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

const apiCallOptions = {
  url: `login`,
  method: 'POST',
};
export const authenticate = credentials =>
  apiCallStart({
    ...apiCallOptions,
    data: credentials,
    onSuccess: `${apiCallSuccess.type}/${apiCallOptions.url}`,
    onError: `${apiCallFailed.type}/${apiCallOptions.url}`,
  });

export default authSlice.reducer;
