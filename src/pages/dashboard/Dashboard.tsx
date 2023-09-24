import React from 'react';
import TablesList from './TablesList';
import { initialState } from '../../store/features/cellSlice';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleSpreadsheet = () => {
    const id = Date.now();
    localStorage.setItem(`excel:${id}`, JSON.stringify(initialState));
    navigate(`/excel/${id}`);
  };

  return (
    <>
      <div>
        <h1>Dashboard EXCEL</h1>

        <div className="max-w-[1000px] mx-auto">
          <TablesList />
        </div>
      </div>
      <button
        onClick={handleSpreadsheet}
        className="bg-green-500 border-solid border-green-500 border-2 hover:bg-white hover:text-green-500 text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:ring focus:ring-green-300 fixed bottom-10 right-10"
      >
        +
      </button>
    </>
  );
}

export default Dashboard;
