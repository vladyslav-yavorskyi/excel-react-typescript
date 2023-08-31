import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CellPros } from '../../interfaces';

const initialState: CellPros = {
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyle: {},
  currentCell: '',
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
    setCurrentStyle: (state, action: PayloadAction<{ style: object }>) => {
      state.currentStyle = { ...action.payload.style };
    },
    setCurrentCell: (state, action: PayloadAction<{ cell: string }>) => {
      state.currentCell = action.payload.cell;
    },
    setStyle: (
      state,
      action: PayloadAction<{
        styleObj: { style: string; value: string; cell: string };
      }>
    ) => {
      const { style, value, cell } = action.payload.styleObj;

      state.stylesState[cell as keyof typeof state.stylesState] = {
        ...state.stylesState[cell],
        [style]: value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addText,
  setCurrentText,
  setCurrentCell,
  setStyle,
  setCurrentStyle,
} = cellSlice.actions;

export default cellSlice.reducer;
