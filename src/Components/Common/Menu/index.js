import React from 'react'
import './style.css'

import MenuItems from './MeniItems'

const Menu = ({list}) => {
  return (
    <main>
      {list.map((item)=>
      (
        <MenuItems key={item.id} item={item}/>

      ))}
    </main>
  )
}

export default Menu
