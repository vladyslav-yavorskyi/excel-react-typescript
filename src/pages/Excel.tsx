import { useLocation } from 'react-router-dom';
import Formula from '../components/Formula';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import Table from '../components/table/Table';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { setState } from '../store/features/cellSlice';

function Excel() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = localStorage.getItem(
      `excel:${location.pathname.split('/')[2]}`
    );
    console.log(data);

    if (data) {
      console.log(JSON.parse(data));

      dispatch(setState({ state: JSON.parse(data) }));
    }
  }, [location.pathname, dispatch]);

  return (
    <>
      <Navbar />
      <Toolbar />
      <Formula />
      <Table />
    </>
  );
}

export default Excel;
