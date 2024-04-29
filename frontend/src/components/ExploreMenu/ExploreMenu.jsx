import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
            <div className='explore-menu-list'>
                {menu_list.map((menu, index)=>(
                    <div onClick={()=>setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===menu.menu_name?"active":""} src={menu.menu_image} alt="" />
                        <p>{menu.menu_name}</p>
                    </div>
                ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
