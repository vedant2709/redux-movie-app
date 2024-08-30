import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"

function Header() {
  return (
    <div className="header bg-[#1a242f] text-white w-full h-[72px] px-[40px] flex justify-between items-center">
      <Link to={'/'}>
        <div className="logo text-2xl font-semibold">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" className="w-[40px] h-[40px]"/>
      </div>
    </div>
  );
}

export default Header;
