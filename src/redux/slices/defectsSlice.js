import { createSlice } from '@reduxjs/toolkit';
import { apiCallFailed, apiCallStart, apiCallSuccess } from '../actions';

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
  apiCallStart({
    ...apiCallOptions,
    onSuccess: `${apiCallSuccess.type}/${apiCallOptions.url}`,
    onError: `${apiCallFailed.type}/${apiCallOptions.url}`,
  });

export default defectsSlice.reducer;
