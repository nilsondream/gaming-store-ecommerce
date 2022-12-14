import React from 'react'
import { DiscordLogo, InstagramLogo } from 'phosphor-react'
import { Logo } from '../assets/images'

const Footer = () => {
    return (
        <footer>
            <div className='social-links'>
                <InstagramLogo />
                <DiscordLogo weight='fill' />
            </div>


            <div className='footer-links'>
                <h1>Recursos</h1>
                <div>
                    <ul>
                        <p>Soporte de producto</p>
                        <p>Soporte de contacto</p>
                        <p>Sobre nosotros</p>
                    </ul>
                    <ul>
                        <p>Privacidad</p>
                        <p>Términos de Uso</p>
                        <p>Accesibilidad</p>
                    </ul>
                    <ul>
                        <p>Uso de cookies</p>
                        <p>Blog</p>
                    </ul>
                </div>

                <h1>Recursos</h1>
                <div>
                    <ul>
                        <p>Soporte de producto</p>
                        <p>Soporte de contacto</p>
                        <p>Sobre nosotros</p>
                    </ul>
                    <ul>
                        <p>Privacidad</p>
                        <p>Términos de Uso</p>
                        <p>Accesibilidad</p>
                    </ul>
                </div>
            </div>

            <span className='line-footer'></span>

            <p className='text-footer'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis veniam
                ratione harum modi eius exercitationem. Deserunt dolor voluptas rerum, totam, quod
                error pariatur doloremque molestiae nihil nam doloribus aspernatur alias eligendi
                voluptates eos consectetur nisi fugit cum aut maxime. Magni non exercitationem optio
                veniam reprehenderit quas deleniti minus consequatur officiis inventore. Maiores iste
                numquam accusamus voluptatibus placeat exercitationem, delectus cupiditate. Quae
                voluptatem necessitatibus distinctio facilis possimus repellat nulla expedita placeat
                ullam adipisci, ab quibusdam culpa, blanditiis fugiat tempore fuga minus facere,
                officia nemo natus beatae. Corporis quisquam illum quos eaque. Nesciunt earum at
                fugiat magnam doloribus iure, voluptate ducimus?
            </p>

            <div className='footer-bottom'>
                <ul>
                    <p>Términos de servicio</p>
                    <p>Política de provacidad</p>
                    <p>Política de reembolso de la tienda</p>
                </ul>

                <img src={Logo} alt="logo" />
            </div>

        </footer>
    )
}

export default Footer