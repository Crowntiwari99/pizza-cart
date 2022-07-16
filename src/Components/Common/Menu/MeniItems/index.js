import React from 'react'
import './style.css'
// import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';

const MenuItems = ( {item }) => {
const {id,name,info,price,img}=item;

  return (

    <div className='item'>
    <img src={img} alt='food' />
    <div className='item-head_desc'>
      <p className='head_desc-name'>{name}</p>
      <p className='head_desc-info'>
        <small>{info}</small>
      </p>
    </div>
    <div className='item-foot_desc'>
      <span className='foot_desc-price'>${price}</span>
      <button>Add +</button>
      {/* <ButtonAddRemoveItem
        quantity={handleQuantity()}
        handleRemoveItem={() => cartRemoveItem(item)}
        handleAddItem={() => cartAddItem(item)}
      /> */}
    </div>
  </div>
  )
}

export default MenuItems
