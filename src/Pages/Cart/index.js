import React from 'react'
import Logo from '../../Components/Common/Logo'
import Menu from '../../Components/Common/Menu'
import { menuItemsData } from '../../Components/Common/Menu/data'
import Footer from '../../Components/Common/Footer'
import './style.css'
import EmptyCart from '../../Components/Cart/EmptyCart'

const Cart = () => {
  return (
    <>
       <div className="cart-header">
         <Logo/>
       </div>
       <EmptyCart/>
       {/* ORDERS ENDS HERE */}
       <div className="orders">
         <h1 className='orders-heading'>Your's Orders</h1>
         <div className="orders-menu">
           <Menu list={menuItemsData}/>

         </div>
         <h3 className='orders-total'>Your's Total $26</h3>
       </div>
       <Footer/>
    </>
  )
}

export default Cart
