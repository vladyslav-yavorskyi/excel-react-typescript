import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import icon from '../icons/icon.png';
import { setTitle } from '../store/features/cellSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.cellReducer);

  const [localTitle, setLocalTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(event.target.value);
  };

  const checkEmptyTitle = () => {
    if (localTitle === '') {
      setLocalTitle('Untitled');
      dispatch(setTitle({ title: 'Untitled' }));
    } else {
      dispatch(setTitle({ title: localTitle }));
    }
  };

  const keyHandler = (event: any) => {
    if (event.key === 'Enter') {
      inputRef.current?.blur();
      checkEmptyTitle();
    }
  };

  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input
          ref={inputRef}
          className="text-gray-600 text-[20px]"
          value={localTitle}
          onKeyUp={keyHandler}
          onChange={changeHandler}
          onFocus={(event) => event.target.select()}
          onBlur={checkEmptyTitle}
        />
      </div>
      <Link to={'/'}>
        <button className="transition ease-in-out font-bold p-2 m-2 border-solid border-2 border-green-600 bg-green-600 rounded-xl text-white hover:bg-white hover:text-green-600">
          Exit
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
