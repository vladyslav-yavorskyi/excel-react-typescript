import icon from '../icons/icon.png';

function Navbar() {
  return (
    <nav>
      <div className="flex items-center">
        <img className="w-[36px] m-2" src={icon} alt="icon" />
        <input placeholder="ENTER YOUR TITLE" />
      </div>
    </nav>
  );
}

export default Navbar;
