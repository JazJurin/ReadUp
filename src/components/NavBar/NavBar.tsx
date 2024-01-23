import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          READUP
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <button
              type="button"
              className="navbar-toggler-btn"
              onClick={handleNavbar}
            >
              <HiOutlineMenuAlt3 size={36} />
            </button>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
