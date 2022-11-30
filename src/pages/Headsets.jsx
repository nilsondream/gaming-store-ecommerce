import React from 'react'
import { CPU1, Headset1, Keyboard1, Mouse1 } from '../assets/images'

const Headsets = () => {
    return (
        <div className='headsets-container'>
            <h1 className='title'>Audífonos</h1>
            <p className='subtitle'>Rendimiento en los deportes electrónicos.</p>

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
    )
}

export default Headsets