import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TablesList() {
  const [keys, setKeys] = React.useState<string[]>([]);

  useEffect(() => {
    const getAllKeys = () => {
      const localKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key?.includes('excel')) {
          continue;
        }
        localKeys.push(key);
      }
      return localKeys;
    };

    const keysData = getAllKeys();
    setKeys(keysData);
  }, []);

  const changeLastOpen = (key: string) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(key) as string),
        lastOpen: Date.now(),
      })
    );
  };

  if (!keys.length) return <p>You don't have any excel table.</p>;

  return (
    <>
      <div className="flex justify-between text-[16px] font-medium mb-[10px] px-[12px]">
        <span>Name</span>
        <span>Date of open</span>
      </div>
      <ul className="m-0 p-0 list-none">
        {keys.map((key, index) => (
          <Link
            to={`/excel/${key.split(':')[1]}`}
            onClick={() => changeLastOpen(key)}
            key={index}
          >
            <li
              className="flex rounded-full justify-between items-center p-2 md:p-3 lg:p-4 mb-4 hover:bg-green-200 hover:rounded-full"
              key={index}
            >
              <p className="no-underline hover:underline text-gray-700 text-base md:text-lg lg:text-xl">
                {JSON.parse(String(localStorage.getItem(key))).title}
              </p>
              <strong>
                {new Date(
                  JSON.parse(String(localStorage.getItem(key))).lastOpen
                ).toLocaleDateString([], {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </strong>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default TablesList;
