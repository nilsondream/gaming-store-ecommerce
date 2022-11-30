import { DiscordLogo, FacebookLogo, InstagramLogo, TwitchLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footer-links'>
                <img src={''} alt="logo" />
                <ul>
                    <h1>Soporte</h1>
                    <p>Soporte de producto</p>
                    <p>Soporte de contacto</p>
                </ul>
                <ul>
                    <h1>Compañía</h1>
                    <p>Sobre nosotros</p>
                    <p>Privacidad</p>
                    <p>Términos de Uso</p>
                    <p>Accesibilidad</p>
                    <p>Uso de cookies</p>
                </ul>
                <ul>
                    <h1>Otros recursos</h1>
                    <p>Software NGENUITY</p>
                    <p>Blog</p>
                </ul>
            </div>
            <div className='social-links'>
                <div><InstagramLogo weight='fill' /></div>
                <div><FacebookLogo weight='fill' /></div>
                <div><DiscordLogo weight='fill' /></div>
                <div><TwitchLogo weight='fill' /></div>
                <div><TwitterLogo weight='fill' /></div>
                <div><YoutubeLogo weight='fill' /></div>
            </div>
        </footer>
    )
}

export default Footer