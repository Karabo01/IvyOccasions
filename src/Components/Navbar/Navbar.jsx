import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/ivyLogo.png'
import '../../index.css'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 250 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500} >Our Services</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
            {/* <li><Link to='leaders' smooth={true} offset={-260} duration={500} >Our Leaders</Link></li> */}
            {/* <li><Link to='giving' smooth={true} offset={-260} duration={500} >Giving</Link></li> */}
            <li><button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></button></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar