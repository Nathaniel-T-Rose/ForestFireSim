import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Contact, Menu, Home, Portfolio } from './components'

function App() {
    return (
        <div className='app'>
            <Home />
            <Menu />
            {/*<Portfolio />
            <Contact />*/}
        </div>
    );
}

export default App
