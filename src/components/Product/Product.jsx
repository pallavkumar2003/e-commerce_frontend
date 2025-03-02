import React from 'react'
import { useDispatch } from 'react-redux';
import './Product.css'
import { addItem } from '../../redux/cartSlice';
const Product = ({name, image, price ,id}) => {

  let dispatch = useDispatch();
  return (
    <div className="product">
      <img className='product-image' src={image} alt="" />
      <div className="product-details">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
        <button onClick={()=>{dispatch(addItem({ id:id, name: name , price: price, image: image }))
      alert("Product added successfully")}} >Add +</button>
      </div>
    </div>
  )
}

export default Product
