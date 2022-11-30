import React from 'react'
import { NavLink } from 'react-router-dom'
import { Cpu, HandbagSimple, Headset, Keyboard, List, /*MagnifyingGlass,*/ Mouse, User } from 'phosphor-react'

const linksNavbar = [
    { name: 'Audífonos', to: '/headsets', icon: <Headset size={20} /> },
    { name: 'Mouses', to: '/mouses', icon: <Mouse size={20} /> },
    { name: 'Teclados', to: '/keyboards', icon: <Keyboard size={20} /> },
    { name: 'CPU', to: '/cpus', icon: <Cpu size={20} /> },
];

const Navbar = () => {
    return (
        <nav>
            <div className='nav-left'>
                <div className='btn-menu'><List /></div>
                <NavLink to={'/'} className='logo'>
                    <h1>Gaming</h1>
                    <span>store</span>
                    <h2>GS</h2>
                </NavLink>
                <div className='links'>
                    {linksNavbar.map((item) => (
                        <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
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
    )
}

export default Navbar