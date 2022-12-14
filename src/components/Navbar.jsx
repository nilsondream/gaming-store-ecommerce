import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Envelope, Info, List, MagnifyingGlass, Question, ShoppingBag, User, X } from 'phosphor-react'
import { Logo } from '../assets/images'
import Header from './Header'

const linksNavbar = [
    { name: 'Tienda', to: '/', icon: <ShoppingBag size={32} /> },
    { name: 'Preguntas Frecuentes', to: '/questions', icon: <Question size={32} /> },
    { name: 'Ayuda', to: '/info', icon: <Info size={32} /> },
    { name: 'Soporte', to: '/support', icon: <Envelope size={32} /> },
];

const Navbar = () => {

    // open sidebar
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //scroll change display
    const [display, setDisplay] = useState(false);
    const changeDisplay = () => {
        if (window.scrollY >= 20) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }

    window.addEventListener('scroll', changeDisplay);

    return (
        <>
            <div className='fixed-nav-head'>
                <nav className={display ? 'nav-scroll' : ''}>
                    <div className='nav-left'>
                        <div className='btn-menu' onClick={showSidebar}><List /></div>
                        <NavLink to={'/'} className='logo'>
                            <img src={Logo} alt="logo" />
                        </NavLink>
                        <div className='links'>
                            {linksNavbar.map((item) => (
                                <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                                    <p>{item.name}</p>
                                    <span />
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className='nav-right'>
                        <button>
                            <User weight="fill" />
                            <p>Iniciar sesión</p>
                        </button>
                        <button><p>Registrarse</p></button>
                    </div>
                </nav>
                <Header />
            </div>

            <div className={sidebar ? 'sidebar-mobile sidebar-mobile-active' : 'sidebar-mobile'}>
                <div className='btn-mobile-close' onClick={showSidebar}><X /></div>
                <div className='sidebar-links'>
                    {linksNavbar.map((item) => (
                        <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to} onClick={showSidebar}>
                            {item.icon}{item.name}
                        </NavLink>
                    ))}
                </div>
                <label htmlFor="">
                    <MagnifyingGlass size={30} />
                    <input type="text" placeholder='Buscar producto' />
                </label>

                <div className='buttons'>
                    <button>Iniciar</button>
                    <button>Registrarse</button>
                </div>
            </div>
        </>
    )
}

export default Navbar