import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {FaBars, FaReact} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'

const data = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About',
        to: '/about'
    },
    {
        label: 'Skills',
        to: '/skills'
    },
    {
        label: 'Resume',
        to: '/resume'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
]
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggleIcon = () => {
        setToggle(!toggle);
    }

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
            <Link to={'/'} className='navbar__container__logo'>
            <FaReact size={30} />
            </Link>
        </div>
        <ul className='navbar__container__menu'>
            {
                data.map((item, index) => {
                    return (
                        <li key={index} className='navbar__container__menu__item'>
                            <Link className='navbar__container__menu__item__links' to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
            {
                toggle ? <HiX size={30} /> : <FaBars size={30} />
            }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
