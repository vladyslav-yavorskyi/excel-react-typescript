import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICell {
  dataState: object;
  currentText: string;
  currentCell: string;
}

const initialState: ICell = {
  dataState: {},
  currentText: '',
  currentCell: 'A:0',
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
    },
    setCurrentText: (state, action: PayloadAction<{ text: string }>) => {
      state.currentText = action.payload.text;
    },
    setCurrentCell: (state, action: PayloadAction<{ cell: string }>) => {
      state.currentCell = action.payload.cell;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addText, setCurrentText, setCurrentCell } = cellSlice.actions;

export default cellSlice.reducer;
