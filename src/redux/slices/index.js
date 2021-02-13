import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    username: 'admin',
    password: 'admin',
    errorMSg: 'Wrong Creds',
  },
  reducers: {
    logIn: (state, action) => {
      if (
        action.payload.username === state.username &&
        action.payload.password === state.password
      )
        state.isLoggedIn = true;
      else state.isLoggedIn = false;
    },
    logOut: state => {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export const store = configureStore(
  {
    reducer: authSlice.reducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Can still subscribe to the store
/* store.subscribe(() => console.log(store.getState())); */
