import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo2.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }
    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" className='profile-img'/>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef}  className='nav-menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="Home"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            </ul>
            <input type="checkbox" id="day-night-toggle" class="hidden-checkbox"/>
<label for="day-night-toggle" class="toggle-switch">
  <span class="toggle-handle"></span>
</label>
            <div className="nav-connect"><AnchorLink className='abc' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar
