import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import icon from '../icons/icon.png';
import { setTitle } from '../store/features/cellSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.cellReducer);
  const [localTitle, setLocalTitle] = useState(title || 'Untitled');
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(title);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(event.target.value);
  };

  const keyHandler = (event: any) => {
    if (event.key === 'Enter') {
      inputRef.current?.blur();
      if (localTitle === '') {
        setLocalTitle('Untitled');
      }
    }
  };

  const blurHandler = () => {
    if (localTitle === '') {
      setLocalTitle('Untitled');
    }
    dispatch(setTitle({ title: localTitle }));
  };

  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input
          ref={inputRef}
          className="text-gray-600 text-[20px]"
          value={title || 'Untitled'}
          onKeyUp={keyHandler}
          onChange={changeHandler}
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
