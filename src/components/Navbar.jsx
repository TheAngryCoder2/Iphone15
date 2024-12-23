import { appleImg, searchImg, bagImg } from '../utils';

const Navbar = () => {
  return (
    <header
      className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black text-white"
    >
      <nav className="flex w-full max-w-screen-xl mx-auto items-center">
        {/* Logo */}
        <img
          src={appleImg}
          alt="Apple logo"
          width={14}
          height={18}
          className="cursor-pointer"
        />

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          <ul className="flex space-x-5">
            {['Phones', 'Macbooks', 'Music', 'Beats', 'Tablets'].map((nav) => (
              <li
                key={nav}
                className="text-sm cursor-pointer text-gray
                 hover:text-white transition-all"
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-4 items-center">
          <img
            src={searchImg}
            alt="Search icon"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="Bag icon"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
