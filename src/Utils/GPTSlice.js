import { createSlice } from '@reduxjs/toolkit';
import reducer from './userSlice';
const GPTSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGPTSeacrh: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSeacrh = !state.showGPTSeacrh;
    },
  },
});
export const { toggleGPTSearchView } = GPTSlice.actions;
export default GPTSlice.reducer;
