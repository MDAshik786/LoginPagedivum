import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMessageAdd } from "react-icons/bi";

const Header = () => {
  
  return (
    <main>
      <header className="header-main">
        <div>
        <Link to="/" >
            <img src="/images/Divum_Logo.svg" alt="" className="img" />
          </Link>
        </div>
        <div className="icons">
          <Link to="./additem" >
            <BiMessageAdd className="icons-img" role="button" data-testid = "add-button"/>
          </Link>
        </div>
      </header>
    </main>
  );
};

export default Header;
