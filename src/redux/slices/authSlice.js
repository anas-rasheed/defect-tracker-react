import { createSlice } from '@reduxjs/toolkit';
import { apiFailed, api, apiSuccess } from '../actions';

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
  api({
    ...apiCallOptions,
    data: credentials,
    onSuccess: `${apiSuccess.type}/${apiCallOptions.url}`,
    onError: `${apiFailed.type}/${apiCallOptions.url}`,
  });

export default authSlice.reducer;
