import React, { useState } from 'react';

interface ICell {
  id: string | number;
  width: number;
  height: number;
  content: string;
  data_col?: string;
  data_row?: number | string;
  type?: string;
}

const resizeCol = `absolute top-0 right-0 w-[5px] h-[100%] bg-gray-400  cursor-pointer opacity-0 hover:opacity-100`;
const resizeRow = `absolute w-[100%] h-[5px] bg-gray-400  bottom-0 left-0 cursor-pointer opacity-0 hover:opacity-100`;

function Cell({ id, width, height, content, type, data_col, data_row }: ICell) {
  const [initialPos, setInitialPos] = useState<any>(null);
  const [initialSize, setInitialSize] = useState<any>(null);

  const initial = (e: any) => {
    let resizable = document.getElementById(String(id));
    setInitialPos(type === 'col' ? e.clientX : e.clientY);
    setInitialSize(
      type === 'col' ? resizable?.offsetWidth : resizable?.offsetHeight
    );
  };

  const resize = (e: any) => {
    let resizable = document.getElementById(String(id));

    if (type === 'col') {
      resizable!.style.width = `${
        parseInt(initialSize) + parseInt(String(e.clientX - initialPos))
      }px`;

      Array.from(document.querySelectorAll(`[data-col='${data_col}']`)).forEach(
        (el: any) =>
          (el.style.width = `${
            parseInt(initialSize) + parseInt(String(e.clientX - initialPos))
          }px`)
      );
    } else {
      resizable!.style.height = `${
        parseInt(initialSize) + parseInt(String(e.clientY - initialPos))
      }px`;

      Array.from(document.querySelectorAll(`[data-row='${data_row}']`)).forEach(
        (el: any) =>
          (el.style.height = `${
            parseInt(initialSize) + parseInt(String(e.clientY - initialPos))
          }px`)
      );
    }
  };

  return (
    <div
      className={`relative text-center  border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10`}
    >
      <div
        style={{ width, height }}
        className="flex items-center justify-center"
        id={String(id)}
        data-col={data_col}
        data-row={data_row}
      >
        {content}
      </div>

      <div
        id={'draggable'}
        draggable="true"
        onDragStart={initial}
        onDrag={resize}
        className={type === 'col' ? resizeCol : type === 'row' ? resizeRow : ''}
      ></div>
    </div>
  );
}

export default Cell;
