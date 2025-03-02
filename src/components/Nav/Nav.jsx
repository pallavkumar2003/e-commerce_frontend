import React, { use } from "react";
import { FaShopify } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Nav = () => {
  let dispatch = useDispatch();
  let items = useSelector(state => state);
  console.log(items);
  return (
    <> 
      <div className="nav">
        <div className="top-nav">
        <Link to='/'><div className="logo">
            <span>V-Shop</span>
            <FaShopify />
          </div></Link>
          <form action="" className="search-box">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button>
              <FaSearch />
            </button>
          </form>
          <Link to='/cart'>
          <div className="cart-box">
            <FaShoppingCart />
            <span>{items.cart.length}</span>
          </div>
          </Link>
        </div>
        <div className="bottom-nav">
          <Link to='/'><li>Home</li></Link>
          <Link to='/shop'><li>Shop</li></Link>
          <Link to='/cart'><li>Cart</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
