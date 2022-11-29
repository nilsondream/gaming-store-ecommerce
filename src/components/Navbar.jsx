import React from 'react'
import { NavLink } from 'react-router-dom'
import { Cpu, Headset, Keyboard, MagnifyingGlass, Mouse, ShoppingCartSimple, User } from 'phosphor-react'

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
                <div className='logo'>
                    <h1>Gaming</h1>
                    <span>store</span>
                </div>
                <div className='links'>
                    {linksNavbar.map((item) => (
                        <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='nav-center'>
                <label htmlFor="">
                    <MagnifyingGlass />
                    <input type="text" placeholder='Buscar' />
                </label>
            </div>
            <div className='nav-right'>
                <ShoppingCartSimple />
                <User />
            </div>
        </nav>
    )
}

export default Navbar