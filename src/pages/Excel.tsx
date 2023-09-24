import { useLocation } from 'react-router-dom';
import Formula from '../components/Formula';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import Table from '../components/table/Table';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { setState } from '../store/features/cellSlice';

function Excel() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const setStateLocalStorage = async () => {
      const data = await localStorage.getItem(
        `excel:${location.pathname.split('/')[2]}`
      );
      console.log(data);

      if (data) {
        await dispatch(setState({ state: JSON.parse(data) }));
        setIsFetched(true);
      }
    };
    setStateLocalStorage();
  }, [dispatch, location.pathname]);

  return (
    <>
      {isFetched ? (
        <div>
          <Navbar />
          <Toolbar />
          <Formula />
          <Table />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Excel;
