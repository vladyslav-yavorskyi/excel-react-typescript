import React from 'react';
import TablesList from './TablesList';
import { initialState } from '../../store/features/cellSlice';
import { useNavigate } from 'react-router-dom';
import icon from '../../icons/icon.png';
import profile from '../../icons/img.jpg';

function Dashboard() {
  const navigate = useNavigate();

  const handleSpreadsheet = () => {
    const id = Date.now();
    console.log({ ...initialState, lastOpen: id });

    localStorage.setItem(
      `excel:${id}`,
      JSON.stringify({ ...initialState, lastOpen: id })
    );
    navigate(`/excel/${id}`);
  };

  return (
    <>
      <div>
        <div className="flex justify-between m-7">
          <img className="w-[36px] m-2" src={icon} alt="icon" />
          <a
            href="https://github.com/vladyslav-yavorskyi"
            className="rounded-full "
          >
            <img
              src={profile}
              alt="Profile Logo"
              className="rounded-full w-14 h-14 object-cover"
            />
          </a>
        </div>

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
