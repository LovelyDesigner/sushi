import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../logo.svg'
import "../styles/main.css"

const NavigationBar = () => {
    const showMenuBar = ()=>{
        document.body.classList.toggle('navOpen');
    }
    const removeMenuBar = ()=>{
        document.body.classList.remove('navOpen');
    }
  return (
    <section className='container'>
        <nav className='navbar'>
            <div className='logoc'>
                <Link className='logli' to="/">
                   <img className='logo' src={Logo} alt='Sushi Jack'/>
                </Link>
                <button onClick={showMenuBar} id='absolute'>
                    <span className='bars'/>
                </button>
            </div>
            <ul className='menuItem'>
                <li onClick={removeMenuBar} className='navLists'>
                    <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to="/">Home</NavLink>
                </li>
                <li onClick={removeMenuBar} className='navLists'>
                    <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to="/about">About Me</NavLink>
                </li>
                <li onClick={removeMenuBar} className='navLists'>
                    <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to="/gallery">Gallery</NavLink>
                </li>
                <li onClick={removeMenuBar} className='navLists'>
                    <NavLink className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                } to="/menu">My Menu</NavLink>
                </li>
                <li onClick={removeMenuBar} className='navLists'>
                    <a className='active fb' href="https://www.facebook.com/jack.manuel.902" target='_blank' rel="noopener">
                        <i className='fa-brands fa-facebook' />
                    </a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default NavigationBar