import React from 'react'
import './style.css'
import Img1 from '../Banner/img2.jpg'
import Logo from '../../Common/Logo'

const Banner = () => {
  return (
    <>
      <header>
        <div className="header-content">
             <Logo/>
             <div className="content-main">
                     
                     <h1>Pizza Cart Project </h1>
                     <p>It is the dummy project just for practice</p>
                     <button>Menu is here 
                     <i className="fas fa-long-arrow-alt-right"></i>
                     
                     </button>

             </div>
        </div>
        <img src={Img1} alt="" className="header-img" />
      </header>
    </>
  )
}

export default Banner
