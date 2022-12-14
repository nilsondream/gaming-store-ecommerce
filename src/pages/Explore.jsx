import React from 'react'
import { BagSimple, Cpu, GameController, Headset, Keyboard, Monitor } from 'phosphor-react'
import { CPU1, Headset1, Keyboard1, Mouse1 } from '../assets/images'
import { NavLink } from 'react-router-dom';

const linksCategories = [
    { name: 'Monitores', to: '/monitors', icon: <Monitor /> },
    { name: 'Teclados', to: '/keyboards', icon: <Keyboard /> },
    { name: 'Audífonos', to: '/headsets', icon: <Headset /> },
    { name: 'CPU & Cases', to: '/keyboards', icon: <Cpu /> },
    { name: 'Accesorios', to: '/accesories', icon: <GameController /> },
];

const Explore = () => {
    return (
        <section className='explore-container'>
            <div className='categories-section'>
                <h1>Categorías populares</h1>
                <div className='categories-grid'>
                    {
                        linksCategories.map((item, i) => (
                            <NavLink to={item.to} key={i}>
                                {item.icon}
                                <h2>{item.name}</h2>
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <div className='new-realse'>
                <div className='products-section'>
                    <h1>Nuevos lanzamientos</h1>
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
            </div>
        </section>
    )
}

export default Explore