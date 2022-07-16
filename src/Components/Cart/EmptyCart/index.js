import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import emptyCartImg from "../EmptyCart/empty-cart.png"

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className='emptyCart'>
      <img src={emptyCartImg} alt='' />
      <h1>oops no item is there . Plz add items to cart</h1>
      <button onClick={()=> navigate('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  )
}

export default EmptyCart
