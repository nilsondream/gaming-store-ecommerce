import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Cpu, HandbagSimple, Headset, House, Keyboard, List, Monitor, MagnifyingGlass, Mouse, User, X } from 'phosphor-react'

const linksNavbar = [
    { name: 'Inicio', to: '/', icon: <House size={30} /> },
    { name: 'Audífonos', to: '/headsets', icon: <Headset size={30} /> },
    { name: 'Mouses', to: '/mouses', icon: <Mouse size={30} /> },
    { name: 'Teclados', to: '/keyboards', icon: <Keyboard size={30} /> },
    { name: 'Monitores', to: '/monitors', icon: <Monitor size={30} /> },
    { name: 'CPU', to: '/cpus', icon: <Cpu size={30} /> },
];

const Navbar = () => {

    // open sidebar
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <nav>
                <div className='nav-left'>
                    <div className='btn-menu' onClick={showSidebar}><List /></div>
                    <NavLink to={'/'} className='logo'>
                        <h1>Gaming</h1>
                        <span>store</span>
                    </NavLink>
                    <div className='links'>
                        {linksNavbar.map((item) => (
                            <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className='nav-center'>Gaming Store</div>
                {/*<div className='nav-center'>
                <label htmlFor="">
                    <MagnifyingGlass />
                    <input type="text" placeholder='Buscar' />
                </label>
                    </div>*/}
                <div className='nav-right'>
                    <HandbagSimple />
                    <User />
                </div>
            </nav>

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