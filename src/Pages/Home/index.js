import React from 'react'
import "./style.css"
import Banner from '../../Components/Home/Banner'
import Menu from '../../Components/Common/Menu'
import Footer from '../../Components/Common/Footer'
import CartCountBotton from '../../Components/Common/CartCountBotton'
import { menuItemsData } from '../../Components/Common/Menu/data'



const Home = () => {
  return (
    <div>
    {/* Bannner component */}
    <Banner/>
    {/* Menu component */}
    <Menu list={menuItemsData}/>
    {/* Footer component */}
    <Footer/>
    {/* CartCountBotton */}
    <CartCountBotton/>
      
    </div>
  )
}

export default Home
