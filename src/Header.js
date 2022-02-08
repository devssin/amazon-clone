import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
        className="header_logo"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Nissay</span>
          <span className="header__optionLineTow">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTow">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTow">Primes</span>
        </div>
      </div>
      <div className="header__optionBasket">
        <ShoppingBasketIcon className="header__optionBasketIcon" />
        <span className="header__optionLineTow header__basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
