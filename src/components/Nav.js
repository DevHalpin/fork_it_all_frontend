import React from 'react';
import '../tailwind.output.css';
import Logo from './images/ForkItAll.png';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <ul>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;