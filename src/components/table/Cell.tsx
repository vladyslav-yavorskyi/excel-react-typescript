import ContentEditable from 'react-contenteditable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addText } from '../../store/features/cellSlice';

interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col?: string;
  data_row?: number;
  type?: string;
}

function Cell({ id, width, content, type, data_col, data_row }: ICell) {
  const dataState = useAppSelector((state) => state.cellReducer.dataState);
  const dispatch = useAppDispatch();
  // console.log(dataState?[`${data_col}:${data_row}`])
  console.log(`${data_col}:${data_row}`);

  return (
    <div
      className={`relative text-center border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10`}
    >
      <ContentEditable
        style={{ width }}
        onChange={(event) =>
          dispatch(
            addText({
              coords: `${data_col}:${data_row}`,
              text: event.target.value,
            })
          )
        }
        html={content}
        disabled={type ? true : false}
        className={`flex items-center whitespace-nowrap outline-none text-ellipsis overflow-hidden`}
        data-col={data_col}
        data-row={data_row}
      />
    </div>
  );
}

export default Cell;
