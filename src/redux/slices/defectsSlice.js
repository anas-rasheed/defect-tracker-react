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

const apiGetCallOptions = {
  url: `fetchDefects`,
  method: 'GET',
};

export const getDefects = () =>
  api({
    ...apiGetCallOptions,
    onSuccess: `${apiSuccess.type}/${apiGetCallOptions.url}`,
    onError: `${apiFailed.type}/${apiGetCallOptions.url}`,
  });

const apiPostCallOptions = {
  url: 'addDefect',
  method: 'POST',
};
export const addDefect = formData =>
  api({
    ...apiPostCallOptions,
    data: { ...formData, createdBy: 'admin' },
    onSuccess: `${apiSuccess.type}/${apiPostCallOptions.url}`,
    onError: `${apiFailed.type}/${apiPostCallOptions.url}`,
  });

export default defectsSlice.reducer;
