import React from 'react'
import { Bell, ChatDots, MagnifyingGlass } from 'phosphor-react'
import { CPU1, Graphic, Headset1, HomeImg, HomeImg2, Keyboard1, Mouse1, Profile } from '../assets/images'

const Beginning = () => {
    return (
        <div className='beginning-container'>
            <div className='beginning-landing'>
                <div className='shadow-beginning' />
                <img className='beginning-img' src={HomeImg} alt="homeimage" />
                <div className='desc-beginning'>
                    <h1>Bienvenido a<br/><span>Gaming</span> Store</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eum!</p>
                </div>

                <div className='beginning-header'>
                    <div className='header-left'>
                        <form>
                            <MagnifyingGlass size={20} />
                            <input type="text" placeholder="Buscar..." />
                        </form>

                        <Bell size={20} /><ChatDots size={20} />
                    </div>

                    <div className='header-right'>
                        <img src={Profile} alt="profile" />
                        <p>nilsondream</p>
                    </div>
                </div>
            </div>

            <div className='beginning-sections'>

                <div className='promotions-container'>
                    <h1>Promociones</h1>
                    <div className='grid-promotions'>
                        <div className='promotion-item'>
                            <div className='desc-item'>
                                <h2>Desbloquea otra dimensión con audio 3D ultrarrealista.</h2>
                                <span>Fnatic</span>
                            </div>
                            <img src={Headset1} alt="productimage" />
                        </div>

                        <div className='promotion-item'>
                            <div className='desc-item'>
                                <h2>Apunta más rápido, juega mejor.</h2>
                                <span>Diseño ultraligero</span>
                            </div>
                            <img src={Mouse1} alt="productimage" />
                        </div>
                    </div>
                </div>

                <div className='products-container'>
                    <h1>Top productos</h1>
                    <div className='grid-products'>
                        <div className='products-item'>
                            <div className='img-item'>
                                <img src={Headset1} alt="productimage" />
                            </div>
                            <div className='desc-item'>
                                <div className='desc-header'>
                                    <h2>React</h2>
                                    <span>Fnatic</span>
                                </div>
                                <div className='desc-footer'>
                                    <span>Esport Performance Headset</span>
                                    <p>$49.49</p>
                                </div>
                            </div>
                        </div>

                        <div className='products-item'>
                            <div className='img-item'>
                                <img src={Mouse1} alt="productimage" />
                            </div>
                            <div className='desc-item'>
                                <div className='desc-header'>
                                    <h2>Bolt - Black</h2>
                                    <span>Fnatic</span>
                                </div>
                                <div className='desc-footer'>
                                    <span>Esport Performance Headset</span>
                                    <p>$89.99</p>
                                </div>
                            </div>
                        </div>

                        <div className='products-item'>
                            <div className='img-item'>
                                <img src={Keyboard1} alt="productimage" />
                            </div>
                            <div className='desc-item'>
                                <div className='desc-header'>
                                    <h2>STREAK65</h2>
                                    <span>Fnatic</span>
                                </div>
                                <div className='desc-footer'>
                                    <span>Ultra Compact Esports Keyboard</span>
                                    <p>$99.99</p>
                                </div>
                            </div>
                        </div>

                        <div className='products-item'>
                            <div className='img-item'>
                                <img src={CPU1} alt="productimage" />
                            </div>
                            <div className='desc-item'>
                                <div className='desc-header'>
                                    <h2>Chillblast x Fnatic Contender</h2>
                                    <span>Fnatic</span>
                                </div>
                                <div className='desc-footer'>
                                    <span>Pro Gaming PC</span>
                                    <p>$984.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='setup-container'>
                    <img src={HomeImg2} alt="grapichimage" />
                    <div>
                        <h1>Arma tu setup<br />como tú quieras</h1>
                        <button>Empezar</button>
                    </div>
                </div>

                <div className='ad-team'>
                    <img src={Graphic} alt="grapichimage" />
                    <span>Anuncio</span>
                </div>
            </div>
        </div>
    )
}

export default Beginning