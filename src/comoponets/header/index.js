import React from "react";
import "./style.scss";

const Header = props => {
  return (
    <header>
      <div dclassName="wrap" data-test="headerComponent">
        <div className="logo">
          <img data-test="logoIMG" src="./logo- hemnette.png" alt="logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
