import { useAppDispatch } from '../hooks/redux';
import icon from '../icons/icon.png';
import { setTitle } from '../store/features/cellSlice';

function Navbar() {
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ title: event.target.value }));
  };

  return (
    <nav>
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input placeholder="ENTER YOUR TITLE" onChange={changeHandler} />
      </div>
    </nav>
  );
}

export default Navbar;
