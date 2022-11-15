import React from 'react'
import { NavLink } from 'react-router-dom'
import { Cpu, Headset, House, Keyboard, MagnifyingGlass, Mouse, ShoppingCartSimple, SquaresFour, User } from 'phosphor-react'
import { LogoWhite } from '../assets/images'

const linksSidebar = [
    { name: 'Inicio', to: '/', icon: <House size={20} />, iconactive: <House size={20} weight='fill' /> },
    { name: 'Buscar', to: '/search', icon: <MagnifyingGlass size={20} />, iconactive: <MagnifyingGlass size={20} weight='fill' /> },
    { name: 'Perfil', to: '/profile', icon: <User size={20} />, iconactive: <User size={20} weight='fill' /> },
    { name: 'Productos', to: '/products', icon: <SquaresFour size={20} />, iconactive: <SquaresFour size={20} weight='fill' /> },
    { name: 'Audífonos', to: '/headsets', icon: <Headset size={20} />, iconactive: <Headset size={20} weight='fill' /> },
    { name: 'Mouses', to: '/mouses', icon: <Mouse size={20} />, iconactive: <Mouse size={20} weight='fill' /> },
    { name: 'Teclados', to: '/keyboards', icon: <Keyboard size={20} />, iconactive: <Keyboard size={20} weight='fill' /> },
    { name: 'CPU', to: '/cpus', icon: <Cpu size={20} />, iconactive: <Cpu size={20} weight='fill' /> },
    { name: 'Carrito', to: '/cart', icon: <ShoppingCartSimple size={20} />, iconactive: <ShoppingCartSimple size={20} weight='fill' /> },
];

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-top'>
                <img src={LogoWhite} alt="logo" />
                <p>Gaming<br/>Store</p>
            </div>
            <div className='sidebar-center'>
                {linksSidebar.map((item) => (
                    <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                        {({ isActive }) => (isActive ? <>{item.iconactive}{item.name}</> : <>{item.icon}{item.name}</>)}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar