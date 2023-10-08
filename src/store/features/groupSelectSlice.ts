import { createSlice } from '@reduxjs/toolkit';
import { range } from '../utils';

export const gropuSelectSlice = createSlice({
  name: 'groupSelectReducer',
  initialState: {
    isSelecting: false,
    startCoords: '',
    group: [] as string[],
  },
  reducers: {
    selectCells: (state, action) => {
      const [r, c] = action.payload.split(':');
      const [startR, startC] = state.startCoords.split(':');

      if (state.isSelecting) {
        const cols = range(Number(startC), Number(c));
        const rows = range(Number(startR), Number(r));

        state.group.forEach((id: string) => {
          const cell = document.getElementById(id) as HTMLElement;
          cell?.classList.remove('bg-blue-200');
        });

        const arr = cols.reduce((acc: string[], col) => {
          rows.forEach((row) => {
            const cell = document.getElementById(
              `${row}:${col}`
            ) as HTMLElement;
            cell?.classList.add('bg-blue-200');
            acc.push(`${row}:${col}`);
          });
          return acc;
        }, []);

        state.group = arr;
      }
    },
    setStartCoords: (state, action) => {
      state.startCoords = action.payload;
    },
    clearGroup: (state) => {
      state.group.forEach((id: string) => {
        const cell = document.getElementById(id) as HTMLElement;
        cell?.classList.remove('bg-blue-200');
      });
      state.group = [];
    },
    handleIsSelecting: (state, action) => {
      state.isSelecting = action.payload;
    },
  },
});

export const { handleIsSelecting, selectCells, clearGroup, setStartCoords } =
  gropuSelectSlice.actions;
export default gropuSelectSlice.reducer;
