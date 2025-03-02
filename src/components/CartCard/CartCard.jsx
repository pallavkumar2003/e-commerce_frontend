import React from 'react'
import { MdDelete } from "react-icons/md";
import './CartCard.css'
import image9 from "../../assets/image9.jpg"
import { removeItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartCard = ({name, price ,image ,id}) => {
    let dispatch = useDispatch();
  return (
    <div className='cartCard'>
        <div className="left-card">
            <img src={image} alt="" />
            <div className="name-price">
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
        <div className="right-card">
            {/* <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div> */}
            <button onClick={()=>dispatch(removeItem(id))}>Remove <MdDelete />
            </button>
        </div>
      
    </div>
  )
}

export default CartCard
