import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addText,
  setCurrentText,
  setCurrentCell,
} from '../../store/features/cellSlice';
import useDebaunce from '../../hooks/useDebaunce';
import { ICell } from '../../interfaces';
import { nextSelector } from './utils/cellHelpers';
import { useEffect, useState } from 'react';

function Cell({ width, type, data_col, data_row }: ICell) {
  const [data, setData] = useState({});
  const { dataState, currentCell } = useAppSelector(
    (state) => state.cellReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(dataState, data);

    if (dataState) {
      setData(dataState);
    }
  }, [dataState]);

  const setText = useDebaunce((event: ContentEditableEvent) => {
    dispatch(
      addText({
        coords: `${data_col}:${data_row}`,
        text: event.target.value,
      })
    );
    dispatch(setCurrentText({ text: event.target.value }));
  }, 400);

  const changeHandler = (event: ContentEditableEvent) => {
    setText(event);
  };

  const keyHandler = (event: any) => {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];

    const { key } = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const next = nextSelector(key, { col: data_col, row: data_row });
      console.log(data);

      dispatch(setCurrentCell({ cell: next }));
      dispatch(
        setCurrentText({
          text: dataState[next as keyof typeof dataState] ?? '',
        })
      );
      document.getElementById(next)?.click();
      document.getElementById(next)?.focus();
    }
  };
  const clickHandler = () => {
    console.log(dataState);

    dispatch(setCurrentCell({ cell: `${data_col}:${data_row}` }));
    dispatch(
      setCurrentText({
        text:
          dataState[`${data_col}:${data_row}` as keyof typeof dataState] ?? '',
      })
    );
  };

  return (
    <div
      className={`relative text-center border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10 `}
      style={
        `${data_col}:${data_row}` === currentCell
          ? { backgroundColor: 'rgba(0, 0, 255, 0.2)' }
          : {}
      }
      onClick={clickHandler}
    >
      <ContentEditable
        style={{ width }}
        onKeyDown={keyHandler}
        onChange={changeHandler}
        html={
          dataState[`${data_col}:${data_row}` as keyof typeof dataState] ?? ''
        }
        disabled={type ? true : false}
        spellCheck={false}
        className={`flex items-center whitespace-nowrap outline-none text-ellipsis overflow-hidden`}
        data-col={data_col}
        data-row={data_row}
        id={`${data_col}:${data_row}`}
      />
    </div>
  );
}

export default Cell;
