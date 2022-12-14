import React from 'react'
import { BagSimple } from 'phosphor-react'
import { CPU1, HomeImg, Headset1, Keyboard1, Mouse1, Setup1, Setup2 } from '../assets/images'

const Home = () => {

    return (
        <section className='home-container'>
            <div className='home-hero'>
                <h1>Bienvenido a Gaming Store</h1>
                <div className='landing-img'>
                    <img src={HomeImg} alt='landing' />
                </div>
            </div>

            <div className='products-section'>
                <h1>Los mejores productos con las mejores ofertas</h1>
                <div className='products-grid'>
                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Headset1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>React</h2>
                            <span>Esport Performance Headset</span>
                            <p>PEN 49.49</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Mouse1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Bolt - Black</h2>
                            <span>Esport Performance Headset</span>
                            <p>PEN 89.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Keyboard1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>STREAK65</h2>
                            <span>Ultra Compact Esports Keyboard</span>
                            <p>PEN 99.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={CPU1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Chillblast x Fnatic Contender</h2>
                            <span>Pro Gaming PC</span>
                            <p>PEN 984.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='setup-section'>
                <div className='setup-item'>
                    <div className='img-setup'>
                        <img src={Setup2} alt="setup" />
                        <span>Ver setups completos</span>
                    </div>
                    <div className='desc-setup'>
                        <h1>Lo último en tecnología para ti</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Sequi, totam ex? Quam suscipit quae voluptate ea explicabo
                            sed eum earum quaerat sint quis deserunt, iusto placeat nemo
                            quidem molestias eveniet!
                        </p>
                    </div>
                </div>
                <div className='setup-item'>
                    <div className='img-setup'>
                        <img src={Setup1} alt="setup" />
                        <span>Ver todos los accesorios</span>
                    </div>
                    <div className='desc-setup'>
                        <h1>Accesorios para una mejor experiencia</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Sequi, totam ex? Quam suscipit quae voluptate ea explicabo
                            sed eum earum quaerat sint quis deserunt, iusto placeat nemo
                            quidem molestias eveniet!
                        </p>
                    </div>
                </div>
            </div>

            <div className='products-section'>
                <h1>Los mejores productos con las mejores ofertas</h1>
                <div className='products-grid'>
                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Headset1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>React</h2>
                            <span>Esport Performance Headset</span>
                            <p>PEN 49.49</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Mouse1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Bolt - Black</h2>
                            <span>Esport Performance Headset</span>
                            <p>PEN 89.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Keyboard1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>STREAK65</h2>
                            <span>Ultra Compact Esports Keyboard</span>
                            <p>PEN 99.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={CPU1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Chillblast x Fnatic Contender</h2>
                            <span>Pro Gaming PC</span>
                            <p>PEN 984.99</p>
                            <button><BagSimple />Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home