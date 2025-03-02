import React from "react";
import "./Shop.css";
import { Category } from "../../Category";
import { dummydata } from "../../dummyData";
import { useState } from "react";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa6";
const Shop = () => {
    const [category, setCategory] = useState(dummydata);
    
      function filterCategory(category) {
        if(category === 'All') {
          setCategory(dummydata);
          return;
        }
        setCategory(dummydata.filter((product) => product.category === category));
      }
  return (
    <div className="shop">
        <div className="shop-heading">
            <span>Shop</span>
            <FaShopify/>
        </div>
      <div className="category-section">
        {Category.map((category) => (
          <div
            className="category-card "
            onClick={() => filterCategory(category.name)}
          >
            <img src={category.image} alt="" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <div className="product-section">
        {category.map((product) => (
          <Product name={product.name} image={product.image} price={product.price} id={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
