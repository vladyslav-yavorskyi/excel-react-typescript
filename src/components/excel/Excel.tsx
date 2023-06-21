import React from 'react';
import GenerateFirstRow from './GenerateFirstRow';
import GridTable from './GridTable';

function Excel() {
  return (
    <div>
      <GenerateFirstRow />
      <GridTable amount={100} />
    </div>
  );
}

export default Excel;
