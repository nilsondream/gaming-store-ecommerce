import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Sidebar } from './components'
import { Beginning } from './pages'
import './styles/GlobalStyle.scss'

const App = () => {
    return (
        <div className='app-container'>
            <Sidebar />

            <div className='route-container'>
                <Routes>
                    <Route path="/" element={<Beginning />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default App