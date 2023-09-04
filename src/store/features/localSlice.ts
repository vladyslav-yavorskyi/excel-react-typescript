import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  currentText: '',
  currentStyle: {},
  currentCell: '0:0',
};

export const localSlice = createSlice({
  name: 'localReducer',
  initialState,
  reducers: {
    setCurrentText: (state, action: PayloadAction<{ text: string }>) => {
      state.currentText = action.payload.text;
    },
    setCurrentStyle: (state, action: PayloadAction<{ style: object }>) => {
      state.currentStyle = { ...action.payload.style };
    },
    setCurrentCell: (state, action: PayloadAction<{ cell: string }>) => {
      state.currentCell = action.payload.cell;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentText, setCurrentCell, setCurrentStyle } =
  localSlice.actions;

export default localSlice.reducer;
