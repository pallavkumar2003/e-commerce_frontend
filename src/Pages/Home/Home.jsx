import React from "react";
import { useState } from "react";
import bg from "../../assets/bg0.gif";
import "./Home.css";
import { Category } from "../../Category";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummyData";

const Home = () => {

  const [category, setCategory] = useState(dummydata);

  function filterCategory(category) {
    setCategory(dummydata.filter((product) => product.category === category));
  }

  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {Category.slice(0,5).map((category) =>
           (
            <div className="category-card " onClick={() => filterCategory(category.name)} >
              <img src={category.image} alt="" />
              <span>{category.name}</span>
            </div>
           ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {category.slice(0,7).map((product) => (
          <Product name={product.name} image={product.image} price={product.price}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
