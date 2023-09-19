import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import icon from '../icons/icon.png';
import { setTitle } from '../store/features/cellSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useAppDispatch();
  const [localTitle, setLocalTitle] = useState('Undefined' as string);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setTitle({ title: event.target.value }));
  };

  const keyHandler = (event: any) => {
    if (event.key === 'Enter') {
      inputRef.current?.blur();
      if (localTitle === '') {
        setLocalTitle('Undefined');
      }
    }
  };

  const blurHandler = () => {
    if (localTitle === '') {
      setLocalTitle('Undefined');
    }
    dispatch(setTitle({ title: localTitle }));
  };

  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input
          ref={inputRef}
          className="w-[auto] text-gray-600 text-[20px]"
          value={localTitle}
          onKeyUp={keyHandler}
          onChange={(event) => setLocalTitle(event.target.value)}
          onFocus={(event) => event.target.select()}
          onBlur={blurHandler}
        />
      </div>
      <Link to={'/'}>
        <button className=" transition ease-in-out font-bold p-2 m-2 border-solid border-2 border-green-600 bg-green-600 rounded-xl text-white hover:bg-white hover:text-green-600">
          Save & Exit
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
