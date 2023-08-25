import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICell {
  dataState: object;
}

const initialState: ICell = {
  dataState: {},
};

export const cellSlice = createSlice({
  name: 'cellSlice',
  initialState,
  reducers: {
    addText: (
      state,
      action: PayloadAction<{ coords: string; text: string }>
    ) => {
      const { coords, text } = action.payload;

      state.dataState = { ...state.dataState, [coords]: text };
      console.log(state.dataState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addText } = cellSlice.actions;

export default cellSlice.reducer;
