import React from "react";
import { Link } from "react-router-dom";
import ".././styles/index.css";

import logo from "../assets/logo-spoonacular.svg";

export const Header = () => {
  return (
    <div className='navbar'>
      <div className='flex-1 justify-center logo'>
        <Link to='/' className='btn btn-ghost normal-case text-xl logo'>
          <img src={logo} alt='logo de spoonacular' />
          Spoonacular
        </Link>
      </div>
    </div>
  );
};
