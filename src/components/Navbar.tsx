import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import icon from '../icons/icon.png';
import { setTitle } from '../store/features/globalSlice';

function Navbar() {
  const dispatch = useAppDispatch();
  const [localTitle, setLocalTitle] = useState('Undefined' as string);
  const { title } = useAppSelector((state) => state.cellReducer);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setTitle({ title: event.target.value }));
  };

  return (
    <nav>
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input
          // value={title.length ? title : 'Untitled'}
          className="w-[auto]"
          value={title}
          onChange={(event) => setLocalTitle(event.target.value)}
          onFocus={(event) => event.target.select()}
          onBlur={() => dispatch(setTitle({ title: localTitle }))}
        />
      </div>
    </nav>
  );
}

export default Navbar;
