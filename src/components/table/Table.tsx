import React, { memo } from 'react';
import GenerateFirstRow from './GenerateFirstRow';
import GridTable from './GridTable';

function Table() {
  return (
    <div className="absolute overflow-x-auto" data-component="table">
      <GenerateFirstRow />
      <GridTable rowsCount={100} />
      <div
        id="resizer-col"
        className="absolute h-[100%] w-[4px] bg-gray-400 top-0 left-[-5000px] z-30"
      ></div>
      <div
        id="resizer-row"
        className="absolute w-[100%] h-[4px] bg-gray-400 bottom-0  z-30"
      ></div>
    </div>
  );
}

export default memo(Table);
