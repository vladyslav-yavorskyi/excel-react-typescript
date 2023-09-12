import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CellPros } from '../../interfaces';

const initialState: CellPros = {
  title: '',
  dataState: {},
  stylesState: {},
  colState: {},
  rowState: {},
  currentText: '',
  currentStyle: {},
  currentCell: '0:0',
};

export const cellSlice = createSlice({
  name: 'cellReducer',
  initialState,
  reducers: {
    addText: (
      state,
      action: PayloadAction<{ coords: string; text: string }>
    ) => {
      const { coords, text } = action.payload;

      state.dataState = { ...state.dataState, [coords]: text };
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
    setTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title;
    },
    setColState: (
      state,
      action: PayloadAction<{ coords: string; col: number }>
    ) => {
      const { coords, col } = action.payload;

      state.colState = { ...state.colState, [coords]: col };
    },
    setRowState: (
      state,
      action: PayloadAction<{ coords: string; row: number }>
    ) => {
      const { coords, row } = action.payload;

      state.rowState = { ...state.rowState, [coords]: row };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addText, setStyle, setTitle, setColState, setRowState } =
  cellSlice.actions;

export default cellSlice.reducer;
