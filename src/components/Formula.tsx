import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addText, setCurrentText } from '../store/features/cellSlice';

function Formula() {
  const currentText = useAppSelector((state) => state.cellReducer.currentText);
  const currentCell = useAppSelector((state) => state.cellReducer.currentCell);
  const dispatch = useAppDispatch();

  const changeHandler = (event: any) => {
    dispatch(setCurrentText({ text: event.target.value }));
    dispatch(addText({ coords: currentCell, text: event.target.value }));
  };

  return (
    <div className="flex">
      <span>f(x)</span>
      <input
        className="border-solid border-2 border-gray-300 rounded"
        type="text"
        spellCheck={false}
        value={currentText}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Formula;
