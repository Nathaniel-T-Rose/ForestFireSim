import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Contact, Experience, Hero, Portfolio } from './components'

function App() {
    return (
        <div className='app'>
            <Hero />
            {/*Experience />
            <Portfolio />
            <Contact />*/}
        </div>
    );
}

export default App
