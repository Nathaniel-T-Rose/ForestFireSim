import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Contact, Menu, Home } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Portfolio' element={<Menu />}/>
                </Routes>
                {/*<Portfolio />
                <Contact />*/}
            </div>
        
    );
}

export default App
