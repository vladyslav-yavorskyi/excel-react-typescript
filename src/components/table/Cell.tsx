import React, { DragEvent, useState } from 'react';

interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col?: string;
  data_row?: number;
  type?: string;
}

const resizeCol = `absolute top-0 right-0 w-[5px] h-[100%] bg-gray-400  cursor-pointer opacity-0 hover:opacity-100`;
const resizeRow = `absolute w-[100%] h-[5px] bg-gray-400  bottom-0 left-0 cursor-pointer opacity-0 hover:opacity-100`;

function Cell({ id, width, content, type, data_col, data_row }: ICell) {
  const [initialPos, setInitialPos] = useState<number>(-5000);
  const [initialSize, setInitialSize] = useState<number>(-5000);

  const initial = (e: DragEvent<HTMLDivElement>) => {
    let resizable = document.getElementById(String(id));
    setInitialPos(type === 'col' ? e.clientX : e.clientY);
    setInitialSize(
      type === 'col'
        ? Number(resizable?.offsetWidth)
        : Number(resizable?.offsetHeight)
    );
  };

  const endResize = (e: DragEvent) => {
    const resizable = document.getElementById(String(id));
    const resizer = document.getElementById(`resizer-${type}`);

    if (type === 'col') {
      resizable!.style.width = `${
        initialSize + String(e.clientX - Number(initialPos))
      }px`;

      Array.from(
        document.querySelectorAll<HTMLElement>(`[data-col='${data_col}']`)
      ).forEach(
        (el) => (el.style.width = `${initialSize + (e.clientX - initialPos)}px`)
      );
    } else {
      resizable!.style.height = `${initialSize + (e.clientY - initialPos)}px`;

      Array.from(
        document.querySelectorAll<HTMLElement>(`[data-row='${data_row}']`)
      ).forEach(
        (el) =>
          (el.style.height = `${initialSize + (e.clientY - initialPos)}px`)
      );
    }

    resizer!.style[`${type === 'col' ? 'left' : 'top'}`] = `${-5000}px`;
  };

  const resize = (e: DragEvent) => {
    const resizer = document.getElementById(`resizer-${type}`);
    const table = document.querySelector('[data-component="table"]');
    const topTable = table!.getBoundingClientRect().top;

    if (type === 'col') {
      resizer!.style.left = `${e.clientX}px`;
    } else {
      resizer!.style.top = `${e.clientY - topTable}px`;
    }
  };

  return (
    <div
      className={`relative text-center border-solid border-l-0 border-b-0 border-2 border-gray-300 z-10`}
    >
      <div
        style={{ width }}
        className="flex items-center justify-center"
        id={String(id)}
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
      ></div>
    </div>
  );
}

export default Cell;
