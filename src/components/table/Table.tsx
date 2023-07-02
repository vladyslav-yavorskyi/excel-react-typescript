import React from 'react';
import GenerateFirstRow from './GenerateFirstRow';
import GridTable from './GridTable';

function Table() {
  return (
    <div className="absolute overflow-x-auto">
      <GenerateFirstRow />
      <GridTable rowsCount={100} />
      <div className="absolute h-[100%] w-[4px] bg-gray-400 top-0 left-3  z-30"></div>
    </div>
  );
}

export default Table;
