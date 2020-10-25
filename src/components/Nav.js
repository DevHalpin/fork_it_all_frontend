import React from 'react';
import '../tailwind.output.css';
import Logo from './images/ForkItAll.png';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav class="flex justify-between items-center bg-black">
      <div class="flex-shrink-0 ml-10 cursor-pointer">
        <Link to="/">
          <img src={Logo} alt="logo" className="img-responsive" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;