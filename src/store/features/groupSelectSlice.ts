import { createSlice } from '@reduxjs/toolkit';

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
        state.group.forEach((id: string) => {
          const cell = document.getElementById(id) as HTMLElement;
          cell?.classList.remove('bg-blue-200');
        });

        for (
          let i = Math.min(Number(startR), Number(r));
          i <= Math.max(Number(startR), Number(r));
          i++
        ) {
          for (
            let j = Math.min(Number(startC), Number(c));
            j <= Math.max(Number(startC), Number(c));
            j++
          ) {
            const cell = document.getElementById(`${i}:${j}`) as HTMLElement;

            cell?.classList.add('bg-blue-200');
            state.group.push(`${i}:${j}`);
          }
        }
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
