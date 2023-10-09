import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addText,
  setCurrentCell,
  setCurrentStyle,
  setCurrentText,
} from '../../store/features/cellSlice';
import useDebaunce from '../../hooks/useDebaunce';
import { ICell } from '../../interfaces';
import { nextSelector } from './utils/cellHelpers';
import { memo, useState } from 'react';
import {
  clearGroup,
  handleIsSelecting,
  selectCells,
  setStartCoords,
} from '../../store/features/groupSelectSlice';

function Cell({ width, type, data_col, data_row }: ICell) {
  const [isActive, setIsActive] = useState(false);
  const { dataState, stylesState } = useAppSelector(
    (state) => state.cellReducer
  );
  const dispatch = useAppDispatch();

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

  const keyHandler = (event: React.KeyboardEvent) => {
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

      dispatch(setCurrentCell({ cell: next }));
      dispatch(
        setCurrentText({
          text: dataState[next as keyof typeof dataState] ?? '',
        })
      );

      const nextCell = document.getElementById(next) as HTMLElement;
      nextCell?.click();
      nextCell?.focus();

      // Create a range object and set its start and end positions to the end of the content
      const range = document.createRange();
      range.selectNodeContents(nextCell);
      range.collapse(false);

      // Create a selection object and set its range to the range you created
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const clickHandler = () => {
    dispatch(clearGroup());
    setIsActive(true);
    dispatch(setCurrentCell({ cell: `${data_col}:${data_row}` }));
    dispatch(
      setCurrentStyle({
        style: stylesState[
          `${data_col}:${data_row}` as keyof typeof stylesState
        ] ?? { fontWeight: '', fontStyle: '', textDecoration: '' },
      })
    );
    dispatch(
      setCurrentText({
        text:
          dataState[`${data_col}:${data_row}` as keyof typeof dataState] ?? '',
      })
    );
  };

  const startSelect = (event: React.MouseEvent) => {
    if (event.shiftKey) {
      const id = (event.target as HTMLDivElement).id;
      dispatch(setStartCoords(id));
      dispatch(handleIsSelecting(true));
    }
  };

  return (
    <div
      className={`relative text-center border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10 `}
      style={{
        ...stylesState[`${data_col}:${data_row}` as keyof typeof stylesState],
        backgroundColor: isActive ? 'rgba(0, 0, 255, 0.2)' : '',
      }}
      onClick={clickHandler}
      onBlur={() => setIsActive(false)}
    >
      <ContentEditable
        style={{
          width,
          height: '100%',
          caretColor:
            dataState[`${data_col}:${data_row}` as keyof typeof dataState] ?? ''
              ? ''
              : 'transparent',
        }}
        onMouseDown={startSelect}
        onMouseUp={() => dispatch(handleIsSelecting(false))}
        onMouseEnter={(event: any) => {
          if (event.shiftKey) {
            dispatch(selectCells(event.target.id));
          }
        }}
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

export default memo(Cell);
