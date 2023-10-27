import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CellPros } from '../../interfaces';

export const initialState: CellPros = {
  title: 'Untitled',
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
    addText: (state, action: PayloadAction<{ coords: string; text: string }>) => {
      const { coords, text } = action.payload;
      console.log(text);

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
    setColState: (state, action: PayloadAction<{ coords: string; col: number }>) => {
      const { coords, col } = action.payload;

      state.colState = { ...state.colState, [coords]: col };
    },
    setRowState: (state, action: PayloadAction<{ coords: string; row: number }>) => {
      const { coords, row } = action.payload;

      state.rowState = { ...state.rowState, [coords]: row };
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
    resetAll: (state) => {
      state.title = '';
      state.dataState = {};
      state.stylesState = {};
      state.colState = {};
      state.rowState = {};
      state.currentText = '';
      state.currentStyle = {};
      state.currentCell = '0:0';
    },
    setState: (state, action: PayloadAction<{ state: CellPros }>) => {
      state.title = action.payload.state.title;
      state.dataState = action.payload.state.dataState;
      state.stylesState = action.payload.state.stylesState;
      state.colState = action.payload.state.colState;
      state.rowState = action.payload.state.rowState;
      state.currentText = action.payload.state.currentText;
      state.currentStyle = action.payload.state.currentStyle;
      state.currentCell = action.payload.state.currentCell;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addText,
  setStyle,
  setTitle,
  setColState,
  setRowState,
  setCurrentCell,
  setCurrentStyle,
  setCurrentText,
  resetAll,
  setState,
} = cellSlice.actions;

export default cellSlice.reducer;
