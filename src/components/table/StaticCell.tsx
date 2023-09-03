import useResize from './utils/useResize';
import useClientRect from '../../hooks/useClientRect';
import { IStaticCell } from '../../interfaces';

const resizeCol = `absolute top-0 right-0 w-[5px] h-[100%] bg-gray-400  cursor-pointer opacity-0 hover:opacity-100`;
const resizeRow = `absolute w-[100%] h-[5px] bg-gray-400  bottom-0 left-0 cursor-pointer opacity-0 hover:opacity-100`;

function StaticCell({
  type,
  width,
  height,
  content,
  data_col,
  data_row,
}: IStaticCell) {
  const [rect, elementRef] = useClientRect();

  const { resize, endResize, initial } = useResize({
    resizable: rect,
    type,
    data_col,
    data_row,
  });

  return (
    <div
      className={`relative text-center border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10`}
    >
      <div
        ref={elementRef}
        style={{ width, height }}
        className={`flex items-center whitespace-nowrap outline-none text-ellipsis overflow-hidden justify-center`}
        data-col={data_col}
        data-row={data_row}
      >
        {content}
      </div>
      <div
        draggable="true"
        onDragStart={initial}
        onDrag={resize}
        onDragEnd={endResize}
        className={type === 'col' ? resizeCol : type === 'row' ? resizeRow : ''}
      />
    </div>
  );
}

export default StaticCell;
