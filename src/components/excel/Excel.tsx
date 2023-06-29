import React from 'react';
import GenerateFirstRow from './GenerateFirstRow';
import GridTable from './GridTable';

function Excel() {
  return (
    <div className="absolute overflow-x-auto">
      <GenerateFirstRow />
      <GridTable rowsCount={100} />
    </div>
  );
}

export default Excel;
