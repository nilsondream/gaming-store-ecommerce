import React from 'react'
import { CPU, CPU1, Headset, Headset1, HomeImg, Keyboard, Keyboard1, Mouse1, Setup } from '../assets/images'

const Home = () => {
    return (
        <section className='home-container'>
            <div className='landing-img'>
                <img src={HomeImg} alt="gaming-main" />
            </div>

            <div className='categories-section'>
                <h1>Top Categorías</h1>
                <div className='categories-grid'>
                    <div className='category-item'>
                        <img src={Keyboard} alt="category" />
                        <h2>Teclados</h2>
                    </div>
                    <div className='category-item'>
                        <img src={Headset} alt="category" />
                        <h2>Audífonos</h2>
                    </div>
                    <div className='category-item'>
                        <img src={CPU} alt="category" />
                        <h2>CPU'S</h2>
                    </div>
                </div>
            </div>

            <div className='products-section'>
                <h1>Top Productos</h1>
                <div className='products-grid'>
                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Headset1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>React</h2>
                            <span>Esport Performance Headset</span>
                            <p>$49.49</p>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Mouse1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Bolt - Black</h2>
                            <span>Esport Performance Headset</span>
                            <p>$89.99</p>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={Keyboard1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>STREAK65</h2>
                            <span>Ultra Compact Esports Keyboard</span>
                            <p>$99.99</p>
                        </div>
                    </div>

                    <div className='products-item'>
                        <div className='img-item'>
                            <img src={CPU1} alt="productimage" />
                        </div>
                        <div className='desc-item'>
                            <h2>Chillblast x Fnatic Contender</h2>
                            <span>Pro Gaming PC</span>
                            <p>$984.99</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='setup-section'>
                <img src={Setup} alt="setup" />
                <span className='shadow' />
                <div className='desc-setup'>
                    <h1>Pide tu setup<br/>completo</h1>
                    <button>Comprar ahora</button>
                </div>
            </div>
        </section>
    )
}

export default Home