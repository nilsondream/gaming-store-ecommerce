import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Cart, Explore, Headsets, Home } from './pages'
import './styles/Global.scss'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/headsets" element={<Headsets />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App