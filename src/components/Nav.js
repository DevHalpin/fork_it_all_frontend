import React, {useState} from 'react';
import '../tailwind.output.css';
import {Input} from "antd";
import Logo from './images/ForkItAll.png';
import Login from './Login';
import {Link} from "react-router-dom";

const {Search} = Input;

const onSearch = value => console.log(value);

const Nav = ({ForkItAll}) => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav className="flex items-center justify-space-between flex-wrap bg-black">
      <div className="flex items-center flex-shrink-0 text-white mr-6 justify-left">
        <span className="font-semibold text-xl tracking-tight">{ForkItAll}</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-orange-400 hover:border-orange-400">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link to={`/page-2`} href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </Link>
          <Link to={`/page-2`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </Link>
          <Link to={`/page-2`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </Link>
        </div>
      </div>
      <div class="flex-shrink-0 ml-10 cursor-pointer">
        <Link to="/">
          <img src={Logo} alt="logo" className="img-responsive" />
        </Link>
      </div>
      <div class="absolute top-10 right-0">
        <>
          <Search
            placeholder="Search Recipes"
            onSearch={onSearch}
            style={{width: 200, margin: '0 10px'}}
          />
        </>,
        </div>
          mountNode,
        );
      <div class="absolute top-10 right-0">
        <Link to="/login">
          <button class="btn btn-blue">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;