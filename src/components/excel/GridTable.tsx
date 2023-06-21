import React from 'react';

function GridTable({ amount }: { amount: number }) {
  const firstColumn = Array(amount).fill({});
  const grid = Array(amount).fill(Array(26).fill([]));
  console.log(grid);

  return (
    <div>
      {firstColumn.map((_, i) => (
        <div className=" text-center w-[70px] border-solid border-t-0 border-2 border-gray-300">
          {i}
        </div>
      ))}
      {grid.map((value) => value)}
    </div>
  );
}

export default GridTable;
