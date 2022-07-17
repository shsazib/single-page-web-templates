import React, { useState } from 'react';
import './NavBarStyle.css';
import Logo from './Image/logo-1.png';
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { GrMenu } from "react-icons/gr";
import { CgClose } from "react-icons/cg";




const NavBar = () => {

  const [change, setChange] = useState();
  const handleClick = () => {
    setChange(!change);
  }

  return (
    <>
      <nav>

        {/* logo */}
        <div className="logo">
          <NavLink to="#home">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        {/* NavBar */}
        <div className="mainNav">
          <ul className={change ? "menu-list" : "menu-list close"}>
            <li><NavLink smooth to="#home" >Home</NavLink></li>
            <li><NavLink smooth to="#about" >About</NavLink></li>
            <li><NavLink smooth to="#team" >Team</NavLink></li>
            <li><NavLink smooth to="#features" >Features</NavLink></li>
            <li><NavLink smooth to="#contacts" >Contacts</NavLink></li>
            <button>Contact Now</button>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            {change ? <CgClose /> : <GrMenu />}
          </div>
        </div>

      </nav>
    </>
  )
}

export default NavBar;