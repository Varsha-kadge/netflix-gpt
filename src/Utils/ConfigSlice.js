import { createSlice } from '@reduxjs/toolkit';

const ConfigSlice = createSlice({
  name: 'ConfigSlice',
  initialState: {
    language: 'en',
  },
  reducers: {
    addSelectedLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { addSelectedLanguage } = ConfigSlice.actions;
export default ConfigSlice.reducer;
