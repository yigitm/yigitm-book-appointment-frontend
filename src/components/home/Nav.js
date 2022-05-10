import React from 'react';
import {
  FaSignature,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const loggedIn = sessionStorage.getItem('LOGIN?');

  const handleLogout = () => {
    !!loggedIn
      ? sessionStorage.setItem('LOGIN?', false)
      : sessionStorage.setItem('LOGIN?', true);
  };

  return (
    <nav className="h-screen md:w-1/4 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="self-center mt-5">
          <FaSignature size={70} />
        </div>

        <ul className="mt-20 ml-5 text-1xl">
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/sign">SIGN UP</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/login">LOGIN</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/courses">COURSES</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/courses">RESERVE COURSE</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/add">ADD COURSE</Link>
          </li>
          <li className="font-extrabold p-4 hover:bg-lime-500 hover:text-white">
            <Link to="/delete">DELETE COURSE</Link>
          </li>
          <li
            onClick={handleLogout}
            className="font-extrabold p-4 hover:bg-lime-500 hover:text-white"
          >
            <Link to="/login">LOGOUT</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex">
          <FaTwitter className="mr-1" />
          <FaFacebookF className="mr-1" />
          <FaGooglePlusG className="mr-1" />
          <FaVimeoV className="mr-1" />
          <FaPinterestP className="mr-1" />
        </div>
        <p className="text-sm">@2022 microverse-inc</p>
      </div>
    </nav>
  );
};

export default Nav;
