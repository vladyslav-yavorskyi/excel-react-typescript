import ContentEditable from 'react-contenteditable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  addText,
  setCurrentText,
  setCurrentCell,
} from '../../store/features/cellSlice';

interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col: string;
  data_row: number;
  type?: string;
}

function Cell({ width, type, data_col, data_row }: ICell) {
  const dataState = useAppSelector((state) => state.cellReducer.dataState);
  const currentCell = useAppSelector((state) => state.cellReducer.currentCell);
  const dispatch = useAppDispatch();

  const changeHandler = (event: any) => {
    dispatch(
      addText({
        coords: `${data_col}:${data_row}`,
        text: event.target.value,
      })
    );

    dispatch(setCurrentText({ text: event.target.value }));
  };

  const clickHandler = () => {
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
        onKeyDown={(e) => console.log(e)}
        onChange={changeHandler}
        html={
          dataState[`${data_col}:${data_row}` as keyof typeof dataState] ?? ''
        }
        disabled={type ? true : false}
        spellCheck={false}
        className={`flex items-center whitespace-nowrap outline-none text-ellipsis overflow-hidden`}
        data-col={data_col}
        data-row={data_row}
      />
    </div>
  );
}

export default Cell;
