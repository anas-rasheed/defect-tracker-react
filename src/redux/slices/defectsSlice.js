import { createSlice } from '@reduxjs/toolkit';
import { apiFailed, api, apiSuccess } from '../actions';

const defectsSlice = createSlice({
  name: 'defects',
  initialState: { defectsList: [] },
  reducers: {
    defectsList: (state, action) => {
      state.defectsList = action.payload.data;
    },
  },
});
export const { defectsList } = defectsSlice.actions;

const apiCallOptions = {
  url: `fetchDefects`,
  method: 'GET',
};

export const getDefects = () =>
  api({
    ...apiCallOptions,
    onSuccess: `${apiSuccess.type}/${apiCallOptions.url}`,
    onError: `${apiFailed.type}/${apiCallOptions.url}`,
  });

export default defectsSlice.reducer;
