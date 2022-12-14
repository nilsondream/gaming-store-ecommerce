import React from 'react'
import { BagSimple, Globe, MagnifyingGlass, SquaresFour } from 'phosphor-react'
import { NavLink } from 'react-router-dom';

const linksHeader = [
    { name: 'Descubre', to: '/', icon: <SquaresFour size={32} /> },
    { name: 'Explora', to: '/explore', icon: <Globe size={32} /> },
];

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-left'>
                    <div className='search'>
                        <MagnifyingGlass />
                        <input data-testid="input-input" placeholder="Buscar en la tienda" />
                    </div>

                    <div className='links-header'>
                        {linksHeader.map((item) => (
                            <NavLink key={item.name} className={({ isActive }) => (isActive ? 'active' : '')} to={item.to}>
                                <p>{item.name}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>

                <NavLink to={'/cart'}><BagSimple /></NavLink>
            </div>
        </>
    )
}

export default Header