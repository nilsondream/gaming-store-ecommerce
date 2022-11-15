import React from 'react'
import { LogoWhite } from '../assets/images'

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={LogoWhite} alt="logo" />
            <div className='footer-links'>
                links
            </div>
            <div className='social-links'>
                social links
            </div>
        </div>
    )
}

export default Footer