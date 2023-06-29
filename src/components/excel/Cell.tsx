import React from 'react';

interface ICell {
  id: string | number;
  width: number;
  content: string;
}

function Cell({ id, width, content }: ICell) {
  return (
    <div
      onClick={() => console.log(id)}
      className={`text-center w-[${width}px] border-solid border-l-0 border-b-0 border-2 border-gray-300`}
    >
      {content}
    </div>
  );
}

export default Cell;
