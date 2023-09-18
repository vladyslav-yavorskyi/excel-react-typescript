import React from 'react';
import TablesList from './TablesList';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard EXCEL</h1>

      <div className="max-w-[1000px] mx-auto">
        <TablesList />
      </div>
    </div>
  );
}

export default Dashboard;
