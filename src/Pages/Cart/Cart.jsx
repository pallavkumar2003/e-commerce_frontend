import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  let items = useSelector((state) => state.cart);
  let total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      {items.length <= 0 ? (
        <div><h1>No Items in Cart</h1></div>
      ) : (
        <div className="cartCard-section">
          {items.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
          <div className="price-section">
            <span>Total Products: {items.length}</span>
            <span>Total Price: {total}</span>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Cart;
