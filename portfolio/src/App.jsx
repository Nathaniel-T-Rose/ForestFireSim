import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Contact, Menu, Home, Profile } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/portfolio' element={<Menu />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/about' element={<Profile page='about' />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        
    );
}

export default App
